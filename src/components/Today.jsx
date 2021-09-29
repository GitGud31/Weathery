import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import LocalDate from "./Date.jsx";
import CardInfo from "./CardInfo.jsx";
import Title from "./Title.jsx";

import "../styles/Today.css";

import { timeFormatter } from "../utils/timeformatter.js";


/* (Celsius × 9/5) + 32 = Fahrenheit */

function Today({ data }) {

    const current = data.current;

    const sunset = current["sunset"];
    const sunrise = current["sunrise"];
    const humidity = current["humidity"];
    const visibility = current["visibility"];
    const pressure = current["pressure"];
    const windDeg = current["wind_deg"];
    const windStatus = current["wind_speed"];
    const sunriseTime = timeFormatter(new Date(sunrise * 1000).toTimeString());
    const sunsetTime = timeFormatter(new Date(sunset * 1000).toTimeString());

    const kelvinTemp = Math.trunc(current["temp"]);
    const [temperature, setTemperature] = useState(Math.trunc(kelvinTemp - 273.15));
    
    /* Kelvin to Celsius */
    const toCelsius = () => {
        setTemperature(Math.trunc(kelvinTemp - 273.15));
    }
    
    /* Kelvin to Fahrenheit */
    const toFahrenheit = () => {
        setTemperature(Math.trunc((kelvinTemp - 273.15) * (9 / 5) + 32));
    }
    
    return (<div className="today-container">

        <div className="highlight-today-content">
            <Title>Today's Highlights </Title>
            <ButtonGroup className="btn-grp">
                <Button onClick={toCelsius} className="btn-temp" size="sm" >C°</Button>
                <Button onClick={toFahrenheit} className="btn-temp" size="sm" >F°</Button>
            </ButtonGroup>
        </div>

        <div className="today-content">

            <div className="wrapper-bubbles">
                <LocalDate />
                <div className="bubble-temp">
                    <p>{temperature}°</p>
                </div>
            </div>

            <div className="wrapper-cards-info">

                <div className="ghost-container">
                    <CardInfo
                        title="Pressure"
                        content={pressure}
                        unit="mBar" />

                    <CardInfo
                        title="Humidity"
                        content={humidity}
                        unit="%" />

                    <CardInfo
                        title="Visibility"
                        content={visibility / 1000}
                        unit="km" />

                    <CardInfo
                        title="Wind Status"
                        content={windStatus}
                        unit="kt" />

                    <CardInfo
                        title="Wind Deg"
                        content={windDeg}
                        unit="°" />

                    <CardInfo
                        title="Sunrise &amp; Sunset"
                        content=""
                        unit="">
                        Sunrise: {sunriseTime}
                        <br />
                        Sunset: {sunsetTime}
                    </CardInfo>
                </div>

            </div>
        </div>
    </div>);
}


export default Today;