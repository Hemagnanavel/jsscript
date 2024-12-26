const searchBtn = document.querySelector(".search-btn");
const searchInput = document.getElementById("search");
const cityName = document.getElementById("city-name");
const weatherDescription = document.getElementById("weather-description");
const temperature = document.getElementById("temperature");
const humidityData = document.getElementById("humidity-data");
const windData = document.getElementById("wind-data");
const dateElement = document.querySelector(".date");
const errorMessage = document.getElementById("error-message");

function updateDate() {
    const now = new Date();
    const formatDate = now.toLocaleString('en-US', {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
    dateElement.textContent = formatDate;
}
updateDate();
searchBtn.addEventListener('click', () => {
    const city = searchInput.value;
    const apiKey = 'ee01c188a156b6a3757c894d93c8c43e';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
   // console.log(city);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherData = data.weather[0];
            const mainData = data.main;
            cityName.textContent = data.name;
            weatherDescription.textContent = weatherData.description;
            temperature.textContent = `${(mainData.temp - 273.15).toFixed(2)}°C`;
            humidityData.textContent = `${mainData.humidity}%`;
            windData.textContent = `${data.wind.speed} m/s`;
        })
        .catch(error => {
            console.error(error);
            cityName.textContent = 'city not found';
            weatherDescription.textContent = '';
            temperature.textContent = '--';
            humidityData.textContent = '--';
            windData.textContent = '--';
        });
});
