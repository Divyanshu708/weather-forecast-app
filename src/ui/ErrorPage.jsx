import { useSelector } from "react-redux";
import loader from "../assets/loader.png";

export default function ErrorPage() {
  const isLoading2 = useSelector((state) => state.weather.isLoading2);

  return (
    <div className="flex justify-center">
      {isLoading2 ? (
        <img
          src={loader}
          alt="Loading..."
          className="w-20 absolute top-[48%] sm:top-[47%] "
        />
      ) : (
        <p className="text-3xl text-white absolute top-[50%]">
          Location not Found
        </p>
      )}
    </div>
  );
}
