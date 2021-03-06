import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Today from "./Today.jsx";
import Week from "./Week.jsx"; 
import NotFoundCity from './NotFound';

import "../styles/Home.css";
import "../styles/Title.css";


function Home() {
    const API_KEY = process.env.REACT_APP_API_KEY;

    const [latitude, setLatitude] = useState();
    const [longitude, setLogitude] = useState();
    const [todayData, setTodayData] = useState();
    const [weekData, setWeekData] = useState();
    const [error, setError] = useState("");


    useEffect(() => {

        /* Get user coordinates via naviator */
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

                if (latitude !== undefined && longitude !== undefined) {
                    await fetchToday();
                }

            } else {
                alert("Please activate location in your browser and refresh the page.");
            }
        }
        fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [longitude, latitude]);


    async function fetchToday(cityname) {

        /* if no cityname provided seach by coordinates. Mainly for first time */
        if (cityname === undefined) {
            await fetch(
                "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + API_KEY)
                .then(response => response.json())
                .then(body => {

                    if (body.cod !== "404") {
                        setError("");

                        setTodayData(body); 

                        const lat = body["coord"].lat;
                        const lon = body["coord"].lon;

                        fetchWeek(lat, lon);
                    } else {
                        throw Error(body.message);
                    }
                })
                .catch((e) => {
                    setError(cityname);
                });

            /* if no cityname provided seach by cityname */
        } else {
            await fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&lat=" + latitude + "&lon=" + longitude + "&appid=" + API_KEY)
                .then(response => response.json())
                .then(body => {
                    console.log(body)

                    if (body.cod !== "404") {
                        setError("");

                        setTodayData(body);

                        const lat = body["coord"].lat;
                        const lon = body["coord"].lon;

                        fetchWeek(lat, lon);
                    } else {
                        throw Error(body.message);
                    }
                })
                .catch((e) => {
                    setError(cityname);
                });
        }
    }

    async function fetchWeek(_latitude, _longitude) {

        await fetch(
            "https://api.openweathermap.org/data/2.5/onecall?lat=" + _latitude + "&lon=" + _longitude + "&exclude=hourly,minutely&appid=" + API_KEY)
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

    const submitHandler = (value) => {
        fetchToday(value);
    }

    return (<section className="home-section" >
        <Navbar onSubmitHandle={submitHandler} />



        {
            (error === "")
                ? <>
                    {(todayData !== undefined && weekData !== undefined) ? <Today data={todayData} /> : null}
                    {(todayData !== undefined && weekData !== undefined) ? <Week data={weekData} /> : null}
                </>
                : <>
                    <NotFoundCity name={error} />
                </>
        }



    </section >);
}

export default Home;