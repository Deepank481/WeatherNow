const KEY = "7be87c2e620a42549bc103419250806";
const BASE_URL = `https://api.weatherapi.com/v1/forecast.json?key=${KEY}`;
export async function fetchWeatherDetails(q, days) {
  const res = await fetch(BASE_URL + `&q=${q}&days=${days}&aqi=no&alerts=no`);
  return res;
}

export async function getYourCoordinates() {
  // 1) Quick feature‑detection guard
  if (!navigator.geolocation) {
    throw new Error("Geolocation is not supported by this browser.");
  }

  try {
    // 2) Wrap getCurrentPosition in a Promise so we can await it
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    // 3) Destructure the coords object for latitude & longitude
    const { latitude, longitude } = position.coords;
    return [latitude, longitude];
  } catch (error) {
    // 4) Translate geolocation error codes into meaningful messages
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.log("The request to get user location timed out.");
        break;
      default:
        console.log("An unknown error occurred.");
        break;
    }
    return null;
  }
}
