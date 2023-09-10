function displayTemperature(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionELement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    temperatureElement.innerHTML = Math.round
    (response.data.temperature.current);
    cityElement.innerHTML = response.data.city;
    descriptionELement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = response.data.temperature.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
}


let key = "00t0518374baoeb3faaa6c86b66cc02f";
let apiUrl = 
    `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=${key}&units=metric`;

axios.get(apiUrl).then(displayTemperature);