import { memo } from "react";
import { useSelector } from "react-redux";

const RenderCity = memo(function () {
  const city = useSelector((state) => state.weather.displayLocation);
  const isDay = useSelector((state) => state.weather.isDay);
  if (!city) return;
  const data = city.split(" ");
  return (
    <div className={`flex gap-5 ${isDay ? "text-amber-50" : "text-cyan-50"}`}>
      <p className=" text-3xl mt-2 ml-10 drop-shadow-xl">
        {data.slice(0, data.length - 1).join(" ")}
      </p>
      <span className="text-5xl mt-1 drop-shadow-xl">
        {data[data.length - 1]}
      </span>
    </div>
  );
});

export default RenderCity;
