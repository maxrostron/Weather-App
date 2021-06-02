function updateDOM(weatherData) {
  document.querySelector(".conditions").textContent =
    weatherData.currentConditions;

  document.querySelector(".location").textContent = weatherData.location;

  document.querySelector(".degreeValue").textContent = weatherData.temperature;

  document.querySelector(".feelsLike").textContent = weatherData.feelsLike;

  document.querySelector(".windSpeed").textContent = weatherData.wind;

  document.querySelector(".humidity").textContent = weatherData.humidity;
}

function updatePhoto(photoURL) {
  document.getElementById("weatherPhoto").src = photoURL;
}

function updateErrorMsg() {
  document.getElementById("errorMsg").setAttribute("class", "errorMsg");
  document.getElementById("errorMsg").textContent = "No matching location!";
}

function removeErrorMsg() {
  if (document.getElementById("errorMsg").classList.contains("errorMsg")) {
    document.getElementById("errorMsg").removeAttribute("class", "errorMsg");
    document.getElementById("errorMsg").textContent = "";
  }
}

export { updateDOM, updatePhoto, updateErrorMsg, removeErrorMsg };
