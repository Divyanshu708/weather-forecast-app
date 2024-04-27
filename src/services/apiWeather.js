import { convertToFlag } from "../utils/helper";

const BASE_KEY = "82023211c3764ca1ac4dafe869bf3d0a";

export async function fetchCityfromCoords(lat, lng) {
  try {
    const geoCity = await fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${BASE_KEY}`
    );

    const getCity = await geoCity.json();

    if (!getCity.features) throw new Error("City not found");

    const { city, country_code } = getCity.features.at(0).properties;

    const cityName = `${city} ${convertToFlag(country_code)}`;

    return [cityName];
  } catch (err) {
    throw Error("Failed to fetch city");
  }
}

export async function fetchWeather(lat, lng) {
  if (lat) {
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m&timezone=auto`
    );

    const weatherData = await weatherRes.json();

    // if (!weatherData.current) throw new Error("Weather not found");

    const weather = {
      weatherCode: weatherData.current.weather_code,
      isDay: weatherData.current.is_day,
      temperature: weatherData.current.temperature_2m,
      humidity: weatherData.current.relative_humidity_2m,
      windSpeed: weatherData.current.wind_speed_10m,
      temperatureUnits: weatherData.current_units.temperature_2m,
      humidityUnits: weatherData.current_units.relative_humidity_2m,
      windSpeedUnits: weatherData.current_units.wind_speed_10m,
    };

    return weather;
  } else {
    return 0;
  }
}

export async function fetchLocation(search) {
  try {
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${search}`
    );
    const geoData = await geoRes.json();
    // console.log(geoData);
    if (!geoData.results) throw new Error("Location not found");

    const { latitude, longitude, name, country_code } = geoData.results.at(0);

    const cityName = `${name} ${convertToFlag(country_code)}`;

    return [cityName, latitude, longitude];
  } catch (err) {
    // throw Error("Failed to fetch Loaction");
    return 0;
  }
}
