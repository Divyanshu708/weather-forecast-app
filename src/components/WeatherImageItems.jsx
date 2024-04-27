export default function WeatherImageItems({ url, className }) {
  return (
    <img
      src={url}
      alt="img"
      className={`${className} drop-shadow-xl w-1/2 sm:w-2/5 md:w-1/3 lg:w-1/3 xl:w-1/3 absolute z-0 top-[28%] `}
    />
  );
}
