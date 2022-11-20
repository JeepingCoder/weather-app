const form = document.querySelector(".side");
 
form.addEventListener("submit", e => {
  e.preventDefault();
  const inputVal = input.value;
});

const apiKey = "be3a1c546ba346651be769db457cb1b7";
const inputVal = input.value;
 
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

fetch(url)
.then(response => response.json())
.then(data => {
  // do stuff with the data
})
.catch(() => {
  msg.textContent = "Please search for a valid city 😩";
});