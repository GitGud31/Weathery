import React, { useState, useEffect } from 'react';
import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { API_KEY } from "./keys";

function App() {

  const [latitude, setLatitude] = useState();
  const [logitude, setLogitude] = useState();
  const [weatherData, setWeatherData] = useState();

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
          }
        );

        if (latitude !== undefined && logitude !== undefined) {
          await fetch(
            "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + logitude + "&appid=" + API_KEY)
            .then(response => response.json())
            .then(body => {

              setWeatherData(body);

            }).catch((e) => {
              console.log(e);
            });
        }

      } else {
        alert("Please activate location in your browser and refresh the page.");
      }
    }
    fetchData();

  }, [latitude, logitude]);

  return (<div className="App">
    {(weatherData !== undefined) ? <Home data={weatherData} /> : null}
  </div>);
}



export default App;
