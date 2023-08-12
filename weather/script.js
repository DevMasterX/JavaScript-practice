import { getWeatherDataByCityname } from './weather-api.js';
// import weatherCardTemplate from '../templates/weather-card.hbs';

const weatherFormEl = document.querySelector('.js-search-form');
const weatherWrapperEl = document.querySelector('.weather_wrapper');

const convertSecondsToHoursAndMinutes = seconds => {
  const date = new Date(seconds * 1000);
  return `${`${date.getHours()}`.padStart(
    2,
    0
  )}:${`${date.getMinutes()}`.padStart(2, 0)}`;
};

const handleWeatherFormSubmit = event => {
  event.preventDefault();

  const searchQuery = event.target.firstElementChild.value.trim();

  if (!searchQuery) {
    return;
  }
  getWeatherDataByCityname(searchQuery)
    .then(data => {
      data.sys.sunset = convertSecondsToHoursAndMinutes(data.sys.sunset);
      data.sys.sunrise = convertSecondsToHoursAndMinutes(data.sys.sunrise);
      console.log(data);
      // weatherWrapperEl.innerHTML = weatherCardTemplate(data);
    })
    .catch(console.warn);
};

weatherFormEl.addEventListener('submit', handleWeatherFormSubmit);
