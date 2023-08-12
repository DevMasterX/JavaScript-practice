const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '9611bec292c58893c7155e57ae530664';

export const getWeatherDataByCityname = cityName =>
  fetch(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&lang=en&units=metric`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
