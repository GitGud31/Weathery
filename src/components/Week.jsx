import React from "react";
import { Card } from "react-bootstrap";
import Title from "./Title.jsx";

import { dayFormatter } from "../utils/dayformatter.js";

import "../styles/Title.css";
import "../styles/Week.css";


function Week({ daily }) {

    return (<section className="week-section">
        <Title>Week's Highlights </Title>
        <div className="week-content">

            {daily.map((d, index) => {

                /* get only 6 days (exclude today and nextWeek's) */
                if (index !== 0 && index < 7) {
                    const day = d["dt"];
                    const date = dayFormatter(new Date(day * 1000).getDay());

                    const temp = d["temp"]["day"];
                    const minTemp = d["temp"]["min"];
                    const maxTemp = d["temp"]["max"];
                    
                    return <Card key={index} className="big-card">
                        <Card.Title className="week-card-title">{date}</Card.Title>
                        <Card.Body className="week-card-body">
                            <p>Temp: {temp}</p>
                            <p>Min: {minTemp}</p>
                            <p>Max: {maxTemp}</p>
                        </Card.Body>
                    </Card>;
                }

            })}
        </div>

    </section>);
}

export default Week;