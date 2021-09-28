import React, { Component } from "react";

import "../styles/Date.css";

import { dayFormatter } from "../utils/dayformatter.js";
import { timeFormatter } from "../utils/timeformatter.js";

class LocalDate extends Component {

    constructor(props) {
        super(props);

        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = window.setInterval(
            () => this.tick(), 1000 * 60
        );
    }

    componentWillUnmount() {
        window.clearInterval(this.timerID);
    }

    tick() {
        this.setState({ date: new Date() });
    }


    render() {

        const _date = this.state.date;
        const day = dayFormatter(_date.getDay());
        const time = timeFormatter(_date.toTimeString());

        return (
            <div className="bubble-date">
                <p>{day}</p>
                <span>{time}</span>
            </div>
        );
    }
}


export default LocalDate;