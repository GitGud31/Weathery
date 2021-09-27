import React from "react";
import LocalDate from "./Date.jsx";
import CardInfo from "./CardInfo.jsx";

import "../styles/Today.css";

function Today() {

    return (<div className="today-container">
        <div className="highlight-title">
            <h1>Today's Highlights</h1>
        </div>

        <div className="content">
            <div className="wrapper-bubbles">
                <LocalDate />

                <div className="bubble-temp">
                    <p>-99 <span>c°</span></p>
                </div>
            </div>

            <div className="wrapper-cards-info">

                <div className="ghost-container">
                    <CardInfo
                        title="Ux Index"
                        content="Some quick example text to" />

                    <CardInfo
                        title="Wind Status"
                        content="Some quick example text to" />

                    <CardInfo
                        title="Humidity"
                        content="Some quick example text to" />

                    <CardInfo
                        title="Air Quality"
                        content="Some quick example text to" />

                    <CardInfo
                        title="visibility"
                        content="Some quick example text to" />

                    <CardInfo
                        title="Sunrise and sunset"
                        content="Some quick example text to" />
                </div>

            </div>
        </div>
    </div>);
}


export default Today;