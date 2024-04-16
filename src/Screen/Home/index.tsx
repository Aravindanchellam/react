import { useEffect, useState } from "react";
import "./Home.css";
function Home() {
  const [latitude, setLatitude] = useState<number | undefined>(undefined);
  const [longitude, setLongitude] = useState<number | undefined>(undefined);

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const [weather, setWeather] = useState<any>();

  useEffect(() => {
    getMyLocation();
  });

  function getWeather() {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=9b16cfe696b476492072466012417c13`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setWeather(res);
        setLoading(false);
        setShow(true)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getMyLocation() {
    const location = window.navigator && window.navigator.geolocation;
    if (location) {
      location.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          alert(error);
        }
      );
    }
  }

  return (
    <main className="main-container">
      <button onClick={() => getWeather()}>Get Weather</button>
      {!loading ? (
        <div>{show ? <div>Weather: {weather.main.temp} </div> : <div></div>}</div>
      ) : (
        <div>Loading..</div>
      )}
    </main>
  );
}

export default Home;
