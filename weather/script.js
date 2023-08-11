


const weatherFormEl = document.querySelector('.js-search-form');
const weatherWrapperEl = document.querySelector('.weather_wrapper');

const convertSecondsToHoursAndMinutes = seconds => {
    const date = new Date(seconds * 1000);
    return `${date.getHours()}:${date.getMinutes()}`;
}

const handleWeatherFormSubmit = event => {
    event.preventDefault();

    console.log(event.target.firstElementChild.value);
 };



weatherFormEl.addEventListener('submit', handleWeatherFormSubmit);

