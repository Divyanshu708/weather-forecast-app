import { useSelector } from "react-redux";

export default function WeatherItem({ current, unit, name, icon }) {
  const isDay = useSelector((state) => state.weather.isDay);

  return (
    <div
      className={`my-5 flex justify-around w-full flex-wrap font-semibold bg-blue-100/10  py-3 rounded-xl border-b-2 border-r-2 drop-shadow-xl ${
        isDay === 1
          ? "border-amber-200 bg-amber-100/10"
          : "border-cyan-200 bg-blue-100/10"
      }`}
    >
      <img src={icon} alt="" className="scale-150 drop-shadow-xl " />
      <span className="text-2xl mb-1 drop-shadow-xl ">
        {current} {unit}
      </span>
      <span className="text-xl drop-shadow-xl">{name}</span>
    </div>
  );
}
