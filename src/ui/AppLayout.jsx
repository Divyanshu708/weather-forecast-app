import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import night from "../assets/night.png";
import day from "../assets/day.png";
import Loader from "../ui/Loader";
import "boxicons";

import SearchBox from "./SearchBox";
import RenderData from "../components/RenderData";
import { fetchCityfromCoords, fetchWeather } from "../services/apiWeather";
import {
  setPosition,
  setDisplayLocation,
  setIsDay,
  setIsLoading,
  setWeather,
} from "../components/weatherSlice";

export default function AppLayout() {
  const dispatch = useDispatch();
  const isDay = useSelector((state) => state.weather.isDay);
  const isLoading = useSelector((state) => state.weather.isLoading);

  useEffect(function () {
    if (navigator.geolocation) {
      dispatch(setIsLoading(true));
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        fetchInfo(lat, lng);
      });
    } else {
      throw new Error("Geolocation is not supported by this browser.");
    }
  }, []);

  async function fetchInfo(lat, lng) {
    const data = await fetchCityfromCoords(lat, lng);
    dispatch(setPosition({ lat, lng }));
    dispatch(setDisplayLocation(data[0]));

    const weatherInfo = await fetchWeather(lat, lng);
    dispatch(setIsDay(weatherInfo.isDay));
    dispatch(setWeather(weatherInfo));
    dispatch(setIsLoading(false));
  }

  return (
    <div
      style={{
        backgroundImage: `url(${isDay ? day : night})`,
      }}
      className=" w-full h-screen bg-cover img flex justify-center items-center shadow-lg"
    >
      {isLoading && <Loader />}
      <div
        className={`w-[97%] sm:w-3/4 md:w-3/2 lg:w-1/2 2xl:w-1/3 h-[98%] sm:h-3/4 flex rounded-lg border-2 ${
          isDay ? "border-amber-200" : "border-cyan-800"
        }`}
      >
        <div className="w-full rounded-r-lg flex flex-col justify-between bgImg backdrop-blur-lg">
          <SearchBox />

          <RenderData />
        </div>
      </div>
    </div>
  );
}
