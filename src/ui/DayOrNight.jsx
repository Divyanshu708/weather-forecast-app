import { useSelector } from "react-redux";

export default function DayOrNight({ className }) {
  const isDay = useSelector((state) => state.weather.isDay);

  return (
    <div>
      {isDay ? (
        <box-icon
          name="sun"
          color="#ffffff"
          class={className}
          size="lg"
        ></box-icon>
      ) : (
        <box-icon
          name="moon"
          color="#ffffff"
          class={className}
          size="lg"
        ></box-icon>
      )}
    </div>
  );
}
