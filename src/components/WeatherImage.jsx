import { useSelector } from "react-redux";
import { getWeatherIcon } from "../utils/helper";
import WeatherImageItems from "./WeatherImageItems";
import { memo } from "react";

const WeatherImage = memo(function ({ weather }) {
  const BASE_URL = `https://em-content.zobj.net/source/microsoft-teams/363`;

  const weatherCode = useSelector((state) => state.weather.weather.weatherCode);

  switch (getWeatherIcon(weatherCode)) {
    case "rain":
      return (
        <WeatherImageItems
          url={`${BASE_URL}/cloud-with-rain_1f327-fe0f.png`}
          className={`sm:top-[25%] lg:top-[30%] md:top-[28%] xl:top-[30%]`}
        />
      );

    case "sunshower":
      return (
        <WeatherImageItems
          url={`${BASE_URL}/sun-behind-rain-cloud_1f326-fe0f.png`}
          className={`sm:top-[25%] md:top-[26%] lg:top-[30%]  xl:top-[27%]`}
        />
      );

    case "lightning":
      return (
        <WeatherImageItems
          url={`${BASE_URL}/cloud-with-lightning_1f329-fe0f.png`}
          className={`sm:top-[25%] md:top-[26%] lg:top-[30%]  xl:top-[27%]`}
        />
      );
    case "lightningRain":
      return (
        <WeatherImageItems
          url={`${BASE_URL}/cloud-with-lightning-and-rain_26c8-fe0f.png`}
          className={`sm:top-[25%] md:top-[26%] lg:top-[30%]  xl:top-[27%]`}
        />
      );
    case "cloudy":
      return <WeatherImageItems url={`${BASE_URL}/cloud_2601-fe0f.png`} />;

    case "sunCloudy":
      return (
        <WeatherImageItems
          url={`${BASE_URL}/sun-behind-small-cloud_1f324-fe0f.png`}
          className={`sm:top-[25%] md:top-[24%] lg:top-[26%]  xl:top-[25%]`}
        />
      );
    case "sunny":
      return (
        <WeatherImageItems
          url={`${BASE_URL}/sun_2600-fe0f.png`}
          className={`sm:top-[25%] md:top-[24%] lg:top-[26%]  xl:top-[25%]`}
        />
      );

    case "snow":
      return (
        <WeatherImageItems url={`${BASE_URL}/cloud-with-snow_1f328-fe0f.png`} />
      );
  }
});

export default WeatherImage;
