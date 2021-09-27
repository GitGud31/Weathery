import React from "react";
import Navbar from "./Navbar.jsx";
import Today from "./Today.jsx";
import Week from "./Week.jsx";

import "../styles/Home.css";
import "../styles/Title.css";

function Home() {
    return (<section className="home-section">
        <Navbar />
        {/* <Today/> */}
        <Week />
    </section >);
}

export default Home;