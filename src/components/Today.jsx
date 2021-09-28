import React from "react";
import LocalDate from "./Date.jsx";
import CardInfo from "./CardInfo.jsx";
import Title from "./Title.jsx";

import "../styles/Today.css";


function formatter(time) {
    const formatted = time.split(' ')[0];
    const hours = formatted.split(':')[0];
    const minutes = formatted.split(':')[1];

    return hours + ":" + minutes;
}

function Today({ data }) {

    const current = data.current;

    const temperature = current["temp"];
    const sunset = current["sunset"];
    const sunrise = current["sunrise"];
    const humidity = current["humidity"];
    const visibility = current["visibility"];
    const pressure = current["pressure"];
    const windDeg = current["wind_deg"];
    const windStatus = current["wind_speed"];

    const sunriseTime = formatter(new Date(sunrise * 1000).toTimeString());
    const sunsetTime = formatter(new Date(sunset * 1000).toTimeString());

    return (<div className="today-container">

        <Title>Today's Highlights </Title>

        <div className="today-content">

            <div className="wrapper-bubbles">
                <LocalDate />
                <div className="bubble-temp">
                    <p>{temperature} c°</p>
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
                        title="visibility"
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
                        title="Sunrise &amp; sunset"
                        content=""
                        unit="">
                        <>
                            <h5>Sunrise: {sunriseTime}</h5>
                            <h5>Sunset: {sunsetTime}</h5>
                        </>
                    </CardInfo>
                </div>

            </div>
        </div>
    </div>);
}


export default Today;