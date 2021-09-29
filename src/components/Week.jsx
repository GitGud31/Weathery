/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Title from "./Title.jsx";

import { dayFormatter } from "../utils/dayformatter.js";

import "../styles/Title.css";
import "../styles/Week.css";


function Week({ daily }) {

    const [_temp, setTemp] = useState();
    const [_minTemp, setMinTemp] = useState();
    const [_maxTemp, setMaxTemp] = useState();

    let kelvinTemp = 0;
    let kelvinMinTemp = 0;
    let kelvinMaxTemp = 0;

    const weekTemps = [];

    daily.map((d, index) => {
        //get only 6 days (exclude today and nextWeek's)
        if (index !== 0 && index < 7) {
            const day = d["dt"];

            const date = dayFormatter(new Date(day * 1000).getDay());
            kelvinTemp = Math.trunc(d["temp"]["day"] - 273.15);
            kelvinMinTemp = Math.trunc(d["temp"]["min"] - 273.15);
            kelvinMaxTemp = Math.trunc(d["temp"]["max"] - 273.15);

            weekTemps.push({
                date: date,
                temp: kelvinTemp,
                minTemp: kelvinMinTemp,
                maxTemp: kelvinMaxTemp,
            });
        }
    });


    /* Kelvin to Celsius */
    const toCelsius = () => {
        weekTemps.map(v => {
            setTemp(kelvinTemp);
            setMinTemp(kelvinMinTemp);
            setMaxTemp(kelvinMaxTemp);
        });
    }

    /* Celsius to Fahrenheit (weekTemps already holds Celsius values from first init) */
    const toFahrenheit = () => {

        weekTemps.map(v => {
            setTemp((v.temp * 9 / 5) + 32);
            setMinTemp((v.minTemp * 9 / 5) + 32);
            setMaxTemp((v.maxTemp * 9 / 5) + 32);
        });
    }

    /* for first render */
    useEffect(() => {
        console.log("rendered")
        toCelsius();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (<section className="week-section">

        <div className="highlight-week-content">
            <Title>Week's Highlights </Title>
            <ButtonGroup className="btn-grp">
                <Button onClick={toCelsius} className="btn-temp" size="sm" >C°</Button>
                <Button onClick={toFahrenheit} className="btn-temp" size="sm" >F°</Button>
            </ButtonGroup>
        </div>


        <div className="week-content">

            {weekTemps.map((d, index) => {

                return <Card key={index} className="big-card">
                    <Card.Title className="week-card-title">{d.date}</Card.Title>
                    <Card.Body className="week-card-body">
                        <p>Temp: {_temp}°</p>
                        <p>Min: {_minTemp}°</p>
                        <p>Max: {_maxTemp}°</p>
                    </Card.Body>
                </Card>;

            })}
        </div>

    </section>);
}

export default Week;