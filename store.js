import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./src/components/weatherSlice";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export default store;
