document.getElementById('searchButton').addEventListener('click', getWeather);

function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    if (cityInput) {
        updateWeather(cityInput);
    }
}

function updateWeather(city) {
    const temperature = getRandomTemperature();
    const condition = getRandomCondition();
    const date = getFormattedDate();

    document.getElementById('cityName').textContent = city;
    document.getElementById('temperature').textContent = `${temperature}°C`;
    document.getElementById('condition').textContent = condition;
    document.getElementById('date').textContent = date;
}

function getRandomTemperature() {
    // Generates a random temperature between 15°C and 40°C
    return Math.floor(Math.random() * (40 - 15 + 1)) + 15;
}

function getRandomCondition() {
    // Array of possible weather conditions
    const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Stormy', 'Snowy', 'Clear', 'Hot', 'Windy'];
    return conditions[Math.floor(Math.random() * conditions.length)];
}

function getFormattedDate() {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}
