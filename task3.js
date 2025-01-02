
let citiesWeather = [];


const addCityWeather = () => {
    const cityName = document.getElementById('cityName').value;
    const temperature = parseFloat(document.getElementById('temperature').value);
    const condition = document.getElementById('condition').value;

   
    const cityWeather = { cityName, temperature, condition };

    citiesWeather.push(cityWeather);

    document.getElementById('cityName').value = '';
    document.getElementById('temperature').value = '';
    document.getElementById('condition').value = 'Sunny';

    updateWeatherSummary();
};


const updateWeatherSummary = () => {
    const weatherList = document.getElementById('weather-list');
    weatherList.innerHTML = ''; 

    citiesWeather.forEach(({ cityName, temperature, condition }) => {
        const li = document.createElement('li');
        li.innerHTML = `City: ${cityName}, Temp: ${temperature}°C, Condition: ${condition}`;
        weatherList.appendChild(li);
    });
};


const findHottestCity = () => {
    const hottestCity = citiesWeather.reduce((max, city) => {
        return (city.temperature > max.temperature) ? city : max;
    }, citiesWeather[0]);

    const { cityName, temperature, condition } = hottestCity;
    console.log(`Hottest City: ${cityName}, Temp: ${temperature}°C, Condition: ${condition}`);
    alert(`Hottest City: ${cityName}, Temp: ${temperature}°C, Condition: ${condition}`);
};


const filterByCondition = (condition) => {
    const filteredCities = citiesWeather.filter(city => city.condition === condition);

    const weatherList = document.getElementById('weather-list');
    weatherList.innerHTML = '';

    filteredCities.forEach(({ cityName, temperature, condition }) => {
        const li = document.createElement('li');
        li.innerHTML = `City: ${cityName}, Temp: ${temperature}°C, Condition: ${condition}`;
        weatherList.appendChild(li);
    });
};
