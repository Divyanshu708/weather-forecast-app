import { useSelector } from "react-redux";
import humidityIcon from "../assets/humidityIcon.svg";
import tempIcon from "../assets/tempIcon.svg";
import windIcon from "../assets/windIcon.svg";
import WeatherItem from "./WeatherItem";

export default function LoadWeatherItems() {
  const {
    humidity,
    humidityUnits,
    temperature,
    temperatureUnits,
    windSpeed,
    windSpeedUnits,
  } = useSelector((state) => state.weather.weather);

  const isDay = useSelector((state) => state.weather.isDay);

  return (
    <div
      className={`mx-5 flex-col justify-around mb-10 sm:mb-5 md:mb-4 lg:mb-3 ${
        isDay ? "text-amber-50" : "text-cyan-50"
      }`}
    >
      <WeatherItem
        current={temperature}
        unit={temperatureUnits}
        name={`Temperature`}
        icon={tempIcon}
      />
      <WeatherItem
        current={humidity}
        unit={humidityUnits}
        name={`Humidity`}
        icon={humidityIcon}
      />
      <WeatherItem
        current={windSpeed}
        unit={windSpeedUnits}
        name={`Windspeed`}
        icon={windIcon}
      />
    </div>
  );
}
