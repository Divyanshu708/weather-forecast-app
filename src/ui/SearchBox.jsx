import searchIcon from "../assets/searchIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  setDisplayLocation,
  setIsDay,
  setIsLoading,
  setIsLoading2,
  setWeather,
} from "../components/weatherSlice";
import { fetchLocation, fetchWeather } from "../services/apiWeather";
import { useState } from "react";

export default function SearchBox() {
  const isDay = useSelector((state) => state.weather.isDay);

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  async function handleClick() {
    dispatch(setIsLoading2(true));
    const city = await fetchLocation(input.split(" ").join("").toLowerCase());

    dispatch(setDisplayLocation(city[0]));

    const weather = await fetchWeather(city[1], city[2]);

    if (city) dispatch(setIsDay(weather.isDay));

    dispatch(setWeather(weather));
    dispatch(setIsLoading2(false));
  }

  return (
    <div className="w-full ">
      <div
        className={`px-4 border ${
          isDay ? "border-amber-100" : "border-cyan-200"
        } py-3 mx-6 rounded-xl flex justify-between mt-10`}
      >
        <input
          className={`bg-transparent font-semibold ${
            isDay ? "text-amber-50" : "text-cyan-50"
          }  uppercase w-3/4 focus:outline-none`}
          placeholder="Search"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        ></input>
        <img
          src={searchIcon}
          className="cursor-pointer"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
