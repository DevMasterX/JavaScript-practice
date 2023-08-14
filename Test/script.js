// --------------------------------ОПОВЕЩЕНИЕ

// const refs = {
//     notification: document.querySelector('.js-alert')
// };

// const notification_delay = 3000;
// let timeoutId = null;

// refs.notification.addEventListener('click', onNotificationClick);

// showNotification();

// function onNotificationClick() {
//     hideNotification();
//     clearTimeout(timeoutId);
// }

// function showNotification() {
//     refs.notification.classList.add('is-visible');

//     timeoutId = setTimeout(() => {
//         console.log('Закрываем алерт автоматически, чтобы не висел');
//         hideNotification();
//     }, notification_delay)
// };

// function hideNotification() {
//     refs.notification.classList.remove('is-visible')
// }
//
//
//
//
//
//
//------------------------- НАДОЕДАЛКА

// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPTS = 3;

// let promptCounter = 0;
// let hasSubscribed = false;

// const intervalID = setInterval(() => {
//     if (promptCounter === MAX_PROMPT_ATTEMPTS  || hasSubscribed) {
//         console.log('Останавливаем интервал');
//         clearInterval(intervalID)
//         return;
//     }
//     console.log('Подпишись на рассылку! -' + Date.now());
//     promptCounter += 1;
// }, PROMPT_DELAY);
//
//
//
//
//
//
//
//
