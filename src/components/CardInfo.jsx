import React from "react";
import { Card } from "react-bootstrap";

import "../styles/CardInfo.css";

function CardInfo({ title, content, children, unit }) {

    return (
        <Card className="card-info">
            <Card.Body>
                <Card.Title className="card-info-title">{title}</Card.Title>

                {(content === "")
                    ? <Card.Text className="card-info-children">{children}</Card.Text>
                    : <Card.Text className="card-info-body">{content}<span>{unit}</span></Card.Text>
                }
            </Card.Body>
        </Card>
    );
}

export default CardInfo;