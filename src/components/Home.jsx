import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Today from "./Today.jsx";
import Week from "./Week.jsx";

import "../styles/Home.css";
import "../styles/Title.css";

import { API_KEY } from "../keys.js";

function Home({ data }) {

    const [latitude, setLatitude] = useState();
    const [logitude, setLogitude] = useState();
    const [todayData, setTodayData] = useState();
    const [weekData, setWeekData] = useState();

    useEffect(() => {

        const fetchData = async () => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    function (position) {
                        setLatitude(position.coords.latitude);
                        setLogitude(position.coords.longitude);
                    },
                    function (error) {
                        console.log("ERROR", error);
                        alert("Please activate location in your browser and refresh the page.");
                    }
                );

                if (latitude !== undefined && logitude !== undefined) {
                    await fetchToday();
                }

            } else {
                alert("Please activate location in your browser and refresh the page.");
            }
        }
        fetchData();

    });


    async function fetchToday() {
        await fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + logitude + "&appid=" + API_KEY)
            .then(response => response.json())
            .then(body => {

                setTodayData(body);

                const lat = body["coord"].lat;
                const lon = body["coord"].lon;

                fetchWeek(lat, lon);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    async function fetchWeek(latitude, longitude) {

        await fetch(
            "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + logitude + "&exclude=hourly,minutely&appid=" + API_KEY)
            .then(response => response.json())
            .then(body => {
                sortWeekData(body);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    async function sortWeekData(data) {
        const weekData = [];

        const list = data["daily"];
        list.forEach((day, index) => {
            //get only 6 days (exclude today and nextWeek's)
            if (index > 0 && index < 7) {
                weekData.push(day);
            }
        });

        setWeekData(weekData);
    }


    return (<section className="home-section" >
        <Navbar />
        {(todayData !== undefined && weekData !== undefined) ? <Today data={todayData} /> : null}
        {(todayData !== undefined && weekData !== undefined) ? <Week data={weekData} /> : null}
    </section >);
}

export default Home;