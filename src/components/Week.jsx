/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Title from "./Title.jsx";

import { dayFormatter } from "../utils/dayformatter.js";

import "../styles/Title.css";
import "../styles/Week.css";


function Week({ data }) {

    const fahrenheitTemps = [];
    const celsiusTemps = [];

    data.map((d, index) => {

        const day = d["dt"];

        /* Kelvin to Celsius */
        celsiusTemps.push({
            date: dayFormatter(new Date(day * 1000).getDay()),

            temp: Math.trunc(d["temp"]["day"] - 273.15),
            minTemp: Math.trunc(d["temp"]["min"] - 273.15),
            maxTemp: Math.trunc(d["temp"]["max"] - 273.15),
        });

        /* Kelvin to Fahrenheit */
        fahrenheitTemps.push({
            date: dayFormatter(new Date(day * 1000).getDay()),

            temp: Math.trunc((d["temp"]["day"] - 273.15) * (9 / 5) + 32),
            minTemp: Math.trunc((d["temp"]["min"] - 273.15) * (9 / 5) + 32),
            maxTemp: Math.trunc((d["temp"]["max"] - 273.15) * (9 / 5) + 32),
        });

    });

    const [weekTemps, setWeekTemps] = useState(celsiusTemps);

    const handleConversion = (e) => {
        if (e.target.innerText === "C°") {
            setWeekTemps(celsiusTemps);
        } else {
            setWeekTemps(fahrenheitTemps);
        }
    }

    return (<section className="week-section">

        <div className="highlight-week-content">
            <Title>Week's Highlights </Title>
            <ButtonGroup className="btn-grp">
                <Button onClick={handleConversion} className="btn-temp" size="sm" >C°</Button>
                <Button onClick={handleConversion} className="btn-temp" size="sm" >F°</Button>
            </ButtonGroup>
        </div>

        <div className="week-content">
            {
                weekTemps.map((d, index) => {

                    return <Card key={index} className="big-card">
                        <Card.Title className="week-card-title">{d.date}</Card.Title>
                        <Card.Body className="week-card-body">
                            <p>Temp: {d.temp}°</p>
                            <p>Min: {d.minTemp}°</p>
                            <p>Max: {d.maxTemp}°</p>
                        </Card.Body>
                    </Card>;

                })
            }
        </div>

    </section>);
}

export default Week;