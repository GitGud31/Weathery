import React, { Component } from "react";

import "../styles/Date.css";


function dayFormatter(date) {
    let today = "";
    switch (date) {
        case 0:
            today = "Saturday";
            break;

        case 1:
            today = "Sunday";
            break;

        case 2:
            today = "Monday";
            break;

        case 3:
            today = "Tuesday";
            break;

        case 4:
            today = "Wednesday";
            break;

        case 5:
            today = "Thursday";
            break;

        case 6:
            today = "Friday";
            break;

        default:
            today = "--";
            break;
    }

    return today;
}

function timeFormatter(time) {

    const hours = time.split(':')[0];
    const minutes = time.split(':')[1];

    return hours + ":" + minutes;
}

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