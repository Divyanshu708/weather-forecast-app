import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isLoading2: false,
  displayLocation: "",
  weather: {},
  position: {},
  isDay: "",
};

const weatherSlice = createSlice({
  name: "weatherapp",
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setIsLoading2(state, action) {
      state.isLoading2 = action.payload;
    },
    setDisplayLocation(state, action) {
      state.displayLocation = action.payload;
    },
    setWeather(state, action) {
      state.weather = action.payload;
    },
    setPosition(state, action) {
      state.position = action.payload;
    },
    setIsDay(state, action) {
      state.isDay = action.payload;
    },
  },
});

export const {
  searchInput,
  setIsLoading,
  setDisplayLocation,
  setWeather,
  setPosition,
  setIsLoading2,
  setIsDay,
} = weatherSlice.actions;

export default weatherSlice.reducer;
