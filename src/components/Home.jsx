import React from "react";
import Navbar from "./Navbar.jsx";

import "../styles/Home.css";
import LocalDate from "./Date.jsx";

function Home() {
    return (<section className="home-section">
        <Navbar />
        <div className="today-container">
            <div className="highlight-title">
                <h1>Today's Highlights</h1>
            </div>

            <div className="content">
                <div className="card-bubble">
                    <LocalDate />
                    <div className="bubble-temp">
                        <p>-99C</p>
                    </div>
                </div>

                <div className="card-info">
                    <div className="card-body">
                        UX index
                    </div>

                    <div className="card-body">
                        Wind Status
                    </div>

                    <div className="card-body">
                        Sunrise and Sunset
                    </div>

                    <div className="card-body">
                        Humidity
                    </div>
                    <div className="card-body">
                        Visibility
                    </div>

                    <div className="card-body">
                        Air Quality
                    </div>
                </div>
            </div>
        </div>
    </section>);
}

export default Home;