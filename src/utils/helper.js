export function convertToFlag(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

export function getWeatherIcon(wmoCode) {
  const icons = new Map([
    [[0], "sunny"],
    [[1, 2], "sunCloudy"],
    [[3, 45, 48], "cloudy"],
    [[51, 56, 61, 66, 80], "sunshower"],
    [[53, 55, 63, 65, 57, 67, 81, 82], "rain"],
    [[71, 73, 75, 77, 85, 86], "snow"],
    [[95], "lightning"],
    [[96, 99], "lightningRain"],
  ]);
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";
  return icons.get(arr);
}

