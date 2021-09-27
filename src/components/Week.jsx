import React from "react";
import Title from "./Title.jsx";

import "../styles/Title.css";
import "../styles/Week.css";
import { Card } from "react-bootstrap";


function Week() {

    return (<section className="week-section">
        <Title>Week's Highlights </Title>
        <div className="week-content">
            <Card className="big-card">
                <Card.Title className="week-card-title">TITLE</Card.Title>
                <Card.Body className="week-card-body">BODY</Card.Body>
            </Card>

            <Card className="big-card">
                <Card.Title className="week-card-title">TITLE</Card.Title>
                <Card.Body className="week-card-body">BODY</Card.Body>
            </Card>

            <Card className="big-card">
                <Card.Title className="week-card-title">TITLE</Card.Title>
                <Card.Body className="week-card-body">BODY</Card.Body>
            </Card>

            <Card className="big-card">
                <Card.Title className="week-card-title">TITLE</Card.Title>
                <Card.Body className="week-card-body">BODY</Card.Body>
            </Card>

            <Card className="big-card">
                <Card.Title className="week-card-title">TITLE</Card.Title>
                <Card.Body className="week-card-body">BODY</Card.Body>
            </Card>

            <Card className="big-card">
                <Card.Title className="week-card-title">TITLE</Card.Title>
                <Card.Body className="week-card-body">BODY</Card.Body>
            </Card>


        </div>
    </section>);
}

export default Week;