/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/fetchData.js":
/*!**********************************!*\
  !*** ./src/modules/fetchData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchData": () => (/* binding */ fetchData)
/* harmony export */ });
/* harmony import */ var _updateDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateDOM.js */ "./src/modules/updateDOM.js");


document
  .querySelector("#searchBox")
  .addEventListener("keypress", function (event) {
    if (event.which == 13) {
      event.preventDefault();
      (0,_updateDOM_js__WEBPACK_IMPORTED_MODULE_0__.removeErrorMsg)();
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
    (0,_updateDOM_js__WEBPACK_IMPORTED_MODULE_0__.updateDOM)(weatherData);
  } catch (error) {
    (0,_updateDOM_js__WEBPACK_IMPORTED_MODULE_0__.updateErrorMsg)();
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
    (0,_updateDOM_js__WEBPACK_IMPORTED_MODULE_0__.updatePhoto)(locationPhoto);
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




/***/ }),

/***/ "./src/modules/updateDOM.js":
/*!**********************************!*\
  !*** ./src/modules/updateDOM.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateDOM": () => (/* binding */ updateDOM),
/* harmony export */   "updatePhoto": () => (/* binding */ updatePhoto),
/* harmony export */   "updateErrorMsg": () => (/* binding */ updateErrorMsg),
/* harmony export */   "removeErrorMsg": () => (/* binding */ removeErrorMsg)
/* harmony export */ });
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/fetchData */ "./src/modules/fetchData.js");


(0,_modules_fetchData__WEBPACK_IMPORTED_MODULE_0__.fetchData)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL21vZHVsZXMvZmV0Y2hEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvbW9kdWxlcy91cGRhdGVET00uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBS3dCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2REFBYztBQUNwQjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsU0FBUztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFTO0FBQ2IsR0FBRztBQUNILElBQUksNkRBQWM7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLE9BQU87QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQVc7QUFDZixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSxNQUFNO0FBQ04seUJBQXlCLDRDQUE0QztBQUNyRSwyQkFBMkIsMkJBQTJCO0FBQ3REO0FBQ0E7QUFDQTs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FckI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFa0U7Ozs7Ozs7VUMvQmxFO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTmdEOztBQUVoRCw2REFBUyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgdXBkYXRlRE9NLFxuICB1cGRhdGVQaG90byxcbiAgdXBkYXRlRXJyb3JNc2csXG4gIHJlbW92ZUVycm9yTXNnLFxufSBmcm9tIFwiLi91cGRhdGVET00uanNcIjtcblxuZG9jdW1lbnRcbiAgLnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoQm94XCIpXG4gIC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LndoaWNoID09IDEzKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmVtb3ZlRXJyb3JNc2coKTtcbiAgICAgIGZldGNoRGF0YSh0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH0pO1xuXG5hc3luYyBmdW5jdGlvbiBmZXRjaERhdGEobG9jYXRpb24pIHtcbiAgaWYgKGxvY2F0aW9uID09IHVuZGVmaW5lZCkge1xuICAgIGxvY2F0aW9uID0gXCJNb3Njb3dcIjtcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgLy9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZhcHBpZD0zYmQyNDJiODdjNjM1ZmYyYjFmOGM4ZTE2MDg2MDdlY2AsXG4gICAgICB7XG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgbG9jYXRpb25EYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gZXh0cmFjdERhdGEobG9jYXRpb25EYXRhKTtcbiAgICB1cGRhdGVET00od2VhdGhlckRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHVwZGF0ZUVycm9yTXNnKCk7XG4gIH1cbiAgZmV0Y2hQaG90byhsb2NhdGlvbik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoUGhvdG8obG9jYXRpb24pIHtcbiAgY29uc3Qgc2VhcmNoID0gbG9jYXRpb24gKyBcIiBidWlsZGluZ1wiO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tLzE2MDB4OTAwLz8ke3NlYXJjaH1gLFxuICAgICAge1xuICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IGxvY2F0aW9uUGhvdG8gPSByZXNwb25zZS51cmw7XG4gICAgdXBkYXRlUGhvdG8obG9jYXRpb25QaG90byk7XG4gIH0gY2F0Y2gge1xuICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgaW4gZmV0Y2hQaG90byFcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXh0cmFjdERhdGEobG9jYXRpb25EYXRhKSB7XG4gIGNvbnN0IG15RGF0YSA9IHtcbiAgICBjdXJyZW50Q29uZGl0aW9uczogbG9jYXRpb25EYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24udG9VcHBlckNhc2UoKSxcbiAgICBsb2NhdGlvbjogbG9jYXRpb25EYXRhLm5hbWUudG9VcHBlckNhc2UoKSxcbiAgICB0ZW1wZXJhdHVyZTogTWF0aC5yb3VuZChsb2NhdGlvbkRhdGEubWFpbi50ZW1wIC0gMjczLjE1KSxcbiAgICBmZWVsc0xpa2U6IGBGRUVMUyBMSUtFOiAke01hdGgucm91bmQoXG4gICAgICBsb2NhdGlvbkRhdGEubWFpbi5mZWVsc19saWtlIC0gMjczLjE1XG4gICAgKX1cXHUwMEIwQ2AsXG4gICAgd2luZDogYFdJTkQgU1BFRUQ6ICR7TWF0aC5yb3VuZChsb2NhdGlvbkRhdGEud2luZC5zcGVlZCAqIDIuMjM3KX1NUEhgLFxuICAgIGh1bWlkaXR5OiBgSFVNSURJVFk6ICR7bG9jYXRpb25EYXRhLm1haW4uaHVtaWRpdHl9JWAsXG4gIH07XG4gIHJldHVybiBteURhdGE7XG59XG5cbmV4cG9ydCB7IGZldGNoRGF0YSB9O1xuIiwiZnVuY3Rpb24gdXBkYXRlRE9NKHdlYXRoZXJEYXRhKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZGl0aW9uc1wiKS50ZXh0Q29udGVudCA9XG4gICAgd2VhdGhlckRhdGEuY3VycmVudENvbmRpdGlvbnM7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvblwiKS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVncmVlVmFsdWVcIikudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS50ZW1wZXJhdHVyZTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxzTGlrZVwiKS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmZlZWxzTGlrZTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRTcGVlZFwiKS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLndpbmQ7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eVwiKS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmh1bWlkaXR5O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQaG90byhwaG90b1VSTCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXJQaG90b1wiKS5zcmMgPSBwaG90b1VSTDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRXJyb3JNc2coKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JNc2dcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlcnJvck1zZ1wiKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvck1zZ1wiKS50ZXh0Q29udGVudCA9IFwiTm8gbWF0Y2hpbmcgbG9jYXRpb24hXCI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVycm9yTXNnKCkge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvck1zZ1wiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJlcnJvck1zZ1wiKSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JNc2dcIikucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlcnJvck1zZ1wiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yTXNnXCIpLnRleHRDb250ZW50ID0gXCJcIjtcbiAgfVxufVxuXG5leHBvcnQgeyB1cGRhdGVET00sIHVwZGF0ZVBob3RvLCB1cGRhdGVFcnJvck1zZywgcmVtb3ZlRXJyb3JNc2cgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSBcIi4vbW9kdWxlcy9mZXRjaERhdGFcIjtcblxuZmV0Y2hEYXRhKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9