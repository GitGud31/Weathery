import React from "react";

import { Card } from "react-bootstrap";

import "../styles/CardInfo.css";

function CardInfo({ title, content }) {

    return (
        <Card className="card-info">
            <Card.Body>
                <Card.Title className="card-title">{title}</Card.Title>
                <Card.Text>
                    {content}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardInfo;