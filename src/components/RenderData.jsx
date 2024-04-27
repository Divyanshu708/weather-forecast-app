import ErrorPage from "../ui/ErrorPage";
import RenderCity from "../ui/RenderCity";
import DayOrNight from "../ui/DayOrNight";
import LoadWeatherIcon from "./LoadWeatherIcon";
import LoadWeatherItems from "./LoadWeatherItems";
import { useSelector } from "react-redux";
import { memo } from "react";

const RenderData = memo(function () {
  const weather = useSelector((state) => state.weather.weather);

  return (
    <>
      {weather === 0 ? (
        <ErrorPage />
      ) : (
        <>
          <div className="flex w-full justify-between mr-10 -mt-20 sm:-mt-5 md:-mt-5 xl:-mt-3">
            <RenderCity />

            <DayOrNight className={`scale-100 mr-10 drop-shadow-xl`} />
          </div>

          <LoadWeatherIcon />

          <LoadWeatherItems />
        </>
      )}
    </>
  );
});

export default RenderData;
