import React from "react";
import Navbar from "./Navbar.jsx";

import "../styles/Home.css";

function Home() {
    return (<section className="home-section">
        <Navbar />
        {/* <div className="today-container">
            <div className="highlight-title">
                <h1>Today's Highlights</h1>
            </div>
        </div> */}
    </section>);
}

export default Home;