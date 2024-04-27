import { useEffect, useState } from "react";
import "./Home.css";
import { WEATHER_API } from "../../utils/service";
import WeatherCard from "./Components/WeatherCard";
import Loader from "../../Common/Components/Loader/Loader";
import React from "react";

function Home() {
  const [weather, setWeather] = useState<any>(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMyLocation();
  }, []);

  function getMyLocation() {
    setLoading(true);
    const location = window.navigator && window.navigator.geolocation;
    if (location) {
      location.getCurrentPosition(
        async (position) => {
          fetch(
            WEATHER_API.base +
              WEATHER_API.getWeather(
                position.coords.latitude,
                position.coords.longitude
              )
          )
            .then((res) => res.json())
            .then((res) => {
              setWeather(res);
              setLoading(false);
            })
            .catch((err) => {
              setLoading(true);
            });
        },
        (error) => {
          alert(error);
          setLoading(true);
        }
      );
    }
  }

  return (
    <main className="main-container">
      {loading ? (
        <Loader />
      ) : (
        weather && <WeatherCard weather={weather} refetech={getMyLocation} />
      )}
    </main>
  );
}

export default Home;
