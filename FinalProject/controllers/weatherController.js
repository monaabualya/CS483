import axios from 'axios';

// Function to fetch current weather data from OpenWeather API
export const fetchWeather = async (city) => {
  const apiKey = 'd23051bff5a73f91748626e97fb2f700'; // Use your OpenWeatherMap API key here
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  try {
    // Sending GET request to fetch weather data
    const response = await axios.get(apiURL);

    // Returning the weather data received from the API
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    throw new Error('Unable to fetch weather data');
  }
};

// Function to fetch the 5-day weather forecast data from OpenWeather API
export const fetchForecast = async (city) => {
  const apiKey = 'd23051bff5a73f91748626e97fb2f700'; // Use your OpenWeatherMap API key here
  const apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;

  try {
    // Sending GET request to fetch weather forecast data
    const response = await axios.get(apiURL);

    // Returning the forecast data received from the API
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast data:', error.message);
    throw new Error('Unable to fetch forecast data');
  }
};
