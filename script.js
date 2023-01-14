//my api key
// be3a1c546ba346651be769db457cb1b7

// link the openweather API key to my page
// var url = 'https://api.openweathermap.org/data/2.5/forecast?lat=35.2271&lon=80.8431&appid={be3a1c546ba346651be769db457cb1b7'
var key = "be3a1c546ba346651be769db457cb1b7";
var city = "YOUR CITY";
var searchBtn = document.querySelector(".citySearch");
var inputValue = document.querySelector(".inputValue");
var currentContainer = document.querySelector(".currentContainer");
var forecastContainer = document.querySelector(".forecastContainer");
// var requestUrl =

//build a search box where user can submit a city- this is setting up for user input later just place holding

function getLatLng(city) {
  var geo =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&appid=be3a1c546ba346651be769db457cb1b7";
  fetch(geo)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var lat = data[0].lat;
      var lon = data[0].lon;

      getCurrent(lat, lon);
      getForecast(lat, lon);

      // call getforecast func and call the lat lng call fun get data here
    });
}

function getCurrent(lat, lon) {
  var forecast =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    key;
  fetch(forecast)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var div = document.createElement("div");

      var currentHtml = `
      <h2>${data.name}</h2>
      <p>Temp: ${1.8 * (data.main.temp - 273) + 32} F</p>
      <p>Humidity: </p>
      <p>Wind: </p>
      `;

      //display html block on a div
      div.innerHTML = currentHtml;

      //append the div to the currentContainer
      currentContainer.appendChild(div);
    });
}

function getForecast(lat, lon) {
  var forecast =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    key;
  fetch(forecast)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      for (var i = 0; i < data.list.length; i++) {
        if (data.list[i].dt_txt.includes("12:00:00")) {
          console.log(data.list[i]);

          var forecastDate = data.list[i];
          var div = document.createElement("div");

          //create card html for each date
          var forecastHtml = `
          
          `;

          div.innerHTML = forecastHtml;
          forecastContainer.appendChild(div);
        }
      }
    });
}

searchBtn.addEventListener("submit", function (event) {
  event.preventDefault();
  var cityName = inputValue.value;
  getLatLng(cityName);
});

// getForecast('forecast')

// // seperate function for forecast witin data

// // add a listener for the submit button

//have listener bring up current and future conditions for city searched

//add searched city to local storage to use in search history

//display city search history on window

//make city search history clickable

// pull saved citys from window storage

// when city search history clicked present current and future conditions

//current weather conditions should load to the page along with City name, the Date
//an icon for weather conditions, the temp, the humidity, and wind speed

//have a way to look at future weather conditions in the 5 day forecast area

//in the 5 day area display date, weather cond. icon, temp, wind speed and humidity
