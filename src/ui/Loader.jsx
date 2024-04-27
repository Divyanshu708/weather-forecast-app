import loader from "../assets/loader.png";

export default function Loader() {
  return (
    <div className="absolute inset-0 z-40 flex items-center justify-center bg-slate-500/20 backdrop-blur-sm">
      <img src={loader} alt="Loading..." className="w-20 z-50" />
    </div>
  );
}
