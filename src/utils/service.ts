
export const WEATHER_API = {
    base: "https://api.openweathermap.org/",
    getWeather: function (latitude: number, longitude: number) {
        return `data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    }
}