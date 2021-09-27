import React from "react";
import Navbar from "./Navbar.jsx";

import "../styles/Home.css";
import Today from "./Today.jsx";

function Home() {
    return (<section className="home-section">
        <Navbar />
        <Today/>
    </section >);
}

export default Home;