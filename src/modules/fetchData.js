import {
  updateDOM,
  updatePhoto,
  updateErrorMsg,
  removeErrorMsg,
} from "./updateDOM.js";

document
  .querySelector("#searchBox")
  .addEventListener("keypress", function (event) {
    if (event.which == 13) {
      event.preventDefault();
      removeErrorMsg();
      fetchData(this.value);
    }
  });

async function fetchData(location) {
  if (location == undefined) {
    location = "Moscow";
  }
  try {
    const response = await fetch(
      `//api.openweathermap.org/data/2.5/weather?q=${location}&appid=3bd242b87c635ff2b1f8c8e1608607ec`,
      {
        mode: "cors",
      }
    );
    const locationData = await response.json();
    const weatherData = extractData(locationData);
    updateDOM(weatherData);
  } catch (error) {
    updateErrorMsg();
  }
  fetchPhoto(location);
}

async function fetchPhoto(location) {
  const search = location + " building";
  try {
    const response = await fetch(
      `https://source.unsplash.com/1600x900/?${search}`,
      {
        mode: "cors",
      }
    );
    const locationPhoto = response.url;
    updatePhoto(locationPhoto);
  } catch {
    console.log("Error in fetchPhoto!");
  }
}

function extractData(locationData) {
  const myData = {
    currentConditions: locationData.weather[0].description.toUpperCase(),
    location: locationData.name.toUpperCase(),
    temperature: Math.round(locationData.main.temp - 273.15),
    feelsLike: `FEELS LIKE: ${Math.round(
      locationData.main.feels_like - 273.15
    )}\u00B0C`,
    wind: `WIND SPEED: ${Math.round(locationData.wind.speed * 2.237)}MPH`,
    humidity: `HUMIDITY: ${locationData.main.humidity}%`,
  };
  return myData;
}

export { fetchData };
