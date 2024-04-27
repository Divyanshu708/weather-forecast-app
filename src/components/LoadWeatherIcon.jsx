import WeatherImage from "./WeatherImage";

export default function LoadWeatherIcon() {
  return (
    <div className="flex justify-center pt-44 ">
      <WeatherImage weather={`snow`} />
    </div>
  );
}
