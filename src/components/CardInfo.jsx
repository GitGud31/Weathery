import React from "react";
import { Card } from "react-bootstrap";

import "../styles/CardInfo.css";

function CardInfo({ title, content }) {

    return (
        <Card className="card-info">
            <Card.Body>
                <Card.Title className="card-info-title">{title}</Card.Title>
                <Card.Text className="card-info-body">{content}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardInfo;