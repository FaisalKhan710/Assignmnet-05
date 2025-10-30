const staticWeatherData = [
    { location: "Mysore", temp: 28, condition: "Sunny", className: "sunny" },
    { location: "Dubai", temp: 32, condition: "Sunny", className: "sunny" },
    { location: "London", temp: 8, condition: "Rainy", className: "rainy" },
    { location: "Madikeri", temp: 11, condition: "Rainy", className: "rainy" },
    { location: "Amsterdam", temp: -2, condition: "Snowy", className: "snowy" },
    { location: "Banglore", temp: 18, condition: "Partialy Cloudy", className: "cloudy" }
];

const weatherCard = document.getElementById('weather-card');
const locationEl = document.getElementById('location');
const tempEl = document.getElementById('temperature');
const conditionEl = document.getElementById('condition');
const citySelect = document.getElementById('city-select');
const refreshButton = document.getElementById('refresh-button');

let currentDataIndex = 0;


function displayWeather(data) {
    if (!data) return;

    locationEl.textContent = data.location;
    tempEl.textContent = data.temp;
    conditionEl.textContent = data.condition;

    weatherCard.classList.remove('sunny', 'cloudy', 'rainy', 'snowy');
    weatherCard.classList.add(data.className);
}


function populateCitySelector() {
    staticWeatherData.forEach(data => {
        const option = document.createElement('option');
        option.value = data.location;
        option.textContent = data.location;
        citySelect.appendChild(option);
    });
}


function handleCityChange() {
    const selectedCity = citySelect.value;
    const data = staticWeatherData.find(item => item.location === selectedCity);
    
        currentDataIndex = staticWeatherData.findIndex(item => item.location === selectedCity);

    displayWeather(data);
}


function handleRefresh() {
  
    currentDataIndex = (currentDataIndex + 1) % staticWeatherData.length;
    const nextData = staticWeatherData[currentDataIndex];
    
    
    citySelect.value = nextData.location;

    displayWeather(nextData);
}



populateCitySelector();
citySelect.addEventListener('change', handleCityChange);


refreshButton.addEventListener('click', handleRefresh);

if (staticWeatherData.length > 0) {
    displayWeather(staticWeatherData[0]);
}