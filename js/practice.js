// # Модуль 1. Заняття 1. Змінні, типи та оператори
//
// ## Example 1 - Математичні оператори
//
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 300;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff = apples - grapes;
// console.log(diff)

// ## Example 2 - Комбіновані оператори
//
// Заміни вираз перевизначення комбінованим оператором `+=`.

// let students = 100;

//students = students + 50;
// students *= 2;
// console.log(students);

// ## Example 3 - Пріоритет операторів
//
// Розбери пріоритет операторів в інструкції привласнення значення змінної
//   `result`.

// const result = 10 + 20 - 2 * 5;
// console.log(result);

// ## Example 4 - Клас Math
//
// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення
// змінної `value`. Використовуй методи `Math.floor()`, `Math.ceil()` та
//   `Math.round()`. Перевір що буде в консолі при значеннях `27.3` та `27.9`.

// const value = 27.5;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));

// ## Example 5 - Шаблонні рядки
//
// Склади фразу за допомогою шаблонних рядків `A has B bots in stock`, де A, B -
// змінні вставлені в рядок.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = companyName + ' has ' + (repairBots + defenceBots) + ' bots in stock';
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// ## Example 6 - Методи рядків та чейнінг
//
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього
// необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.
//
//   Вага та висота зберігаються у змінних `weight` та `height`, але не як числа, а в
// вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді
//   `24.7` або `24,7`, тобто як роздільник дробової частини може бути
// кома.
//
//   Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = '88,3';
// let height = '1.75';
// const newWeight = Number(weight.replace(',', '.'));
// const newHeight = Number(height.replace(',', '.'));

// console.log(newHeight);
// console.log(typeof Number(weight));
// console.log(Number(weight));
// console.log(Number.parseFloat(weight));

// const bmi = newWeight / Math.pow(newHeight, 2);
// console.log(bmi);
// console.log(bmi.toFixed(1));
// console.log(bmi); // 28.8

// ## Example 7 - Оператори порівняння та приведення типів
//
// Яким буде результат виразів?

// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');
// console.log('2'.charCodeAt(0));
// console.log('12'.charCodeAt(0));

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);
//
// console.log('false' === false);
//
// console.log(1 == true);
//
// console.log(1 === true);
//
// console.log('0' == false);
//
// console.log('0' === false);
//
// console.log('Papaya' < 'papaya');
//
// console.log('Papaya' === 'papaya');
//
// console.log(undefined == null);
//
// console.log(undefined === null);

// Значення, перетворення яких дають false
// 1. false
// 2. null
// 3. undefined
// 4. NaN
// 5. 0
// 5. -0
// 6. ''

// ## Example 8 - Логічні оператори
//
// Яким буде результат виразів?

// console.log(true && 3);
//
// console.log(false && 3);
//
// console.log(true && 4 && 'kiwi');
//
// console.log(true && 0 && 'kiwi');
//
// console.log(true || 3);
//
// console.log(true || 3 || 4);
//
// console.log(true || false || 7);
//
// console.log(null || 2 || undefined);
//
// console.log((1 && null && 2) > 0);
//
// console.log(null || (2 && 3) || 4);

// ## Example 9 - Значення за замовчуванням та оператор нульового злиття
//
// Отрефактори код так, щоб у змінну `value` присвоювалося значення
// змінної `incomingValue`, якщо воно не рівне `undefined` або `null`. В
// іншому випадку має присвоюватися значення `defaultValue`. Перевір роботу
// скрипта для наступних значень змінної `incomingValue`: null, undefined, 0,
//   false. Використовуй оператор `??` (nullish coalescing operator).

// const incomingValue = false;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value);

// ## Example 10 - Оператор % та методи рядків
//
// Напиши скрипт, який переведе значення `totalMinutes` (кількість хвилин) в
// рядок у форматі годин та хвилин `HH:MM`.

// - 70 покаже 01:10
// - 450 покаже 07:30
// - 1441 покаже 24:01

// const totalMinutes = 70;
//
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);
//
// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
//// const products = 10;
// const search = '';
// const filters = 1;
//
// if (search && !products) {
//   console.log('Пошук не дав результатів');
// } else if (filters && !products) {
//   console.log('Фільтр не дав результатів');
// } else {
//   console.log('У нас ще немає продуктів');
// }

// # Модуль 1. Заняття 2. Розгалуження. Цикли
//
// ## Example 1 - Введення користувача та розгалуження
//
// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме:
//   `"Яка офіційна назва JavaScript?"`. Якщо користувач вводить
//   `ECMAScript`, то показуй alert з рядком `"Правильно!"`, в іншому випадку -
// `"Не знаєте? ECMAScript!"`

// const answer = prompt('Яка офіційна назва JavaScript?');
// console.log(answer);
// if (answer === 'ECMAScript') {
//   alert("Правильно!")
// } else {
//   alert('Не знаєте? ECMAScript!')
// }

//
// ## Example 2 - Відображення часу (if...else)
//
// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка
// формату `"14 г. 26 хв."`. Якщо значення змінної `minutes` дорівнює `0`, то
// виводь рядок `"14 г."`, без хвилин.
//
// const hours = 14;
// const minutes = 0;
// let timestring;
//
// if (minutes !== 0) {
//   timestring = `${hours} год. ${minutes} хв`;
// } else {
//   timestring = `${hours} год.`
// }
//
// console.log(timestring);

//
// ## Example 3 - Розгалуження
//
// Напиши скрипт, який виводить у консоль рядок `"Це позитивне число"`,
//   якщо у prompt користувач ввів число більше нуля. Якщо було введено нуль, виводь
// в консоль рядок `"Це нуль"`. Якщо передали від'ємне число, у консолі
// повинен бути рядок `"Це негативне число"`.
//
// const userInput = Number(prompt('Введіть число'));
// //console.log(Number(userInput));
// if (userInput > 0) {
//   console.log('Це позитивне число');
// } else if (userInput === 0) {
//   console.log('Це нуль');
// } else if (userInput < 0) {
//   console.log('Це негативне число');
// } else {
//   console.log('Ви ввели не число');
// }

// const userInput = prompt('Введіть число');
// //console.log(Number(userInput));
// if (userInput === null) {
//   console.log('Це позитивне число');
// } else if (Number(userInput) === 0) {
//   console.log('Це нуль');
// } else if (userInput < 0) {
//   console.log('Це негативне число');
// } else {
//   console.log('Ви ввели не число');
// }

//
// ## Example 4 - Вкладені розгалуження
//
// Напиши скрипт, який порівнює числа у змінних `a` та `b`. Якщо обидва
// значення більше `100`, то виведи в консоль максимальне з них. В протилежному
// випадку у консолі повинна бути сума значення `b` та числа 512.
//
// const a = 120;
// const b = 80;

// if (a > 100) {
//   if (b > 100) {
//     console.log(Math.max(a, b));
//   } else {
//     console.log(b + 512);
//   }
// } else {
//   console.log(b + 512);
// }

// if (a > 100 && b > 100) {
//   console.log(Math.max(a, b));
// } else {
//   console.log(b + 512);
// }
//
// ## Example 5 - Форматування посилання
//
// Напиши скрипт який перевіряє чи закінчується значення змінної `link`
// символом `/`. Якщо ні, додай до кінця значення `link` цей символ. Використовуй
// конструкцію `if...else`.
//
// let link = 'https://my-site.com/about';
//
// if (!link.endsWith('/')) {
//   //link = link + '/'
//   link = `${link}/`
//   //link += '/'
// };
// console.log(link);
//
// ## Example 6 - Форматування посилання
//
// Напиши скрипт який перевіряє чи закінчується значення змінної `link`
// символом `/`. Якщо ні, додай до кінця значення `link` цей символ, але тільки в
// тому випадку, якщо в `link` є підрядок `"my-site"`. Використовуй конструкцію
//   `if...else`.
//
// let link = 'https://somesite.com/my-site/about';
//
// if (!link.endsWith('/') && link.includes('my-site')) {
//   link = `${link}/`
// }
// console.log(link);
//
// ## Example 7 - Форматування посилання (тернарний оператор)
//
// Виконай рефакторинг коду попередньої задачі, використовуючи тернарний оператор.
//
// let link = 'https://somesite.com/about';
// link = !link.endsWith('/') && link.includes('my-site') ? `${link}/` : link;
//
// ## Example 8 - if...else та логічні оператори
//
// Напиши скрипт який виводитиме в консоль браузера рядок залежно від
// значення змінної `hours`.
//
//   Якщо значення змінної `hours`:
//
// - менше `17`, виводь рядок `"Pending"`
// - більше або дорівнює `17` і менше або дорівнює 24, виводь рядок `"Expires"`
// - більше `24` , виводь рядок `"Overdue"`
//
// const hours = 10;
//
// ## Example 9 - Дедлайн здачі проекту (if...else)
//
// Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй
// конструкцію `if...else`.
//
// - Якщо до дедлайну 0 днів - виведи рядок `"Сьогодні"`
// - Якщо до дедлайну 1 день - виведи рядок `"Завтра"`
// - Якщо до дедлайну 2 дні - виведи рядок `"Післязавтра"`
// - Якщо до дедлайну 3+ днів - виведи рядок `"Дата у майбутньому"`
//
// const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//   console.log('Сьогодні');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Післязавтра');
// } else {
//   console.log('Дата у майбутньому')
// }
//
// ## Example 10 - Дедлайн здачі проекту (switch)
//
//   Виконай рефакторинг коду попередньої задачі використовуючи `switch`.
//
// const daysUntilDeadline = 5;
//
// switch (daysUntilDeadline) {
//   case 0:
//     console.log('Сьогодні');
//     break;
//   case 1:
//     console.log('Завтра');
//     break;
//   case 2:
//     console.log('Післязавтра');
//     break;
//   default:
//     console.log('Дата у майбутньому');
//     break;
// }
//
// ## Example 11 - Цикл for
//
//     Напиши цикл for, який виводить у консоль браузера числа за зростанням від `min`
//     до `max`, але тільки якщо число кратне `5`.
//
// const max = 100;
// const min = 26;
//
// for (let i = min; i < max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }
//
// for (let i = min; i < max; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

//
// ## Example 12 - Введення користувача та розгалуження
//
//     Напиши скрипт, який питатиме логін за допомогою `prompt` та логувати
//     результат у консоль браузера.
//
//   - Якщо відвідувач вводить `"Адмін"`, то `prompt` запитує пароль
//   - Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок `"Скасовано"`
//   - В іншому випадку вивести рядок `"Я вас не знаю"`
//
//     Пароль перевіряти так:
//
//     - Якщо введено пароль `"Я адмін"`, то вивести рядок `"Здрастуйте!"`
//   - Інакше виводити рядок `"Невірний пароль"`

// const inputValue = prompt('Логін');
// if (inputValue === 'Адмін') {
//   const password = prompt('Пароль');
//   if (password === 'Я адмін') {
//     alert('Здрастуйте!')
//   } else {
//     alert('Невірний пароль')
//   }
// } else if (inputValue === '' || inputValue === null) {
//   alert('Скасовано');
// } else {
//   alert('Я вас не знаю');
// }
//
// const arr = [7, 3, 8, 9, 2];
// const newArr = arr.slice(1);
// console.log(newArr);

// const deadline = 0;
// if (!deadline) {
//   console.log('if block');
// } else {
//   console.log('else block');
// }

// # Модуль 2. Заняття 3. Масиви
//
// ## Example 1 - Базові операції з масивом
//
// 1. Створіть масив `genres` з елементами «Jazz» та «Blues».
// 2. Додайте «Рок-н-рол» до кінця.
// 3. Виведіть у консоль перший елемент масиву.
// 4. Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву
// довільної довжини.
// 5. Видаліть перший елемент та виведіть його в консоль.
// 6. Вставте «Country» та «Reggae» на початок масиву.
//
// const genres = ['Jazz', 'Blues'];
// genres.push('Rock&Roll');
//const firstElement = genres.shift();
//console.log(genres.shift());
//console.log(genres[genres.length - 1]);
// genres.unshift('Country', 'Reggae');
// console.log(genres);
//
// ## Example 2 - Масиви та рядки
//
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення
// яких зберігаються у змінній `values` у вигляді рядка. Значення гарантовано
// розділені пробілом.
//
// const values = '8 11';
// const valuesArr = values.split(' ');
//const height = Number(valuesArr[0]);
// console.log(valuesArr);
// console.log(Number(valuesArr[0]) * Number(valuesArr[1]));

//
// ## Example 3 - Перебір масиву
//
// Напиши скрипт для перебору масиву `fruits` циклом `for`. Для кожного елемента
// масиву виведи в консоль рядок у форматі `номер_елемента: значення_елемента`.
//   Нумерація елементів повинна починатися з `1`.
//
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`Element ${i + 1}: `, fruits[i]);
// }
//
// ## Example 4 - Масиви та цикли
//
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У
// змінних `names` та `phones` зберігаються рядки імен та телефонних номерів,
//   розділені комами. Порядковий номер імен та телефонів у рядках вказують на
// відповідність. Кількість імен та телефонів гарантовано однакова.
//
// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const namesArr = names.split(',');
// const phonesArr = phones.split(',');
// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${namesArr[i]}: `, phonesArr[i]);
// }

//
// ## Example 5 - Масиви та рядки
//
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і
// останнього. Результуючий рядок не повинен починатися або закінчуватися
// символ пробілу. Скрипт повинен працювати для будь-якого рядка.
//
// const string = 'Welcome to the future';
// const wordsArr = string.split(' ');
// wordsArr.pop();
// wordsArr.shift();
// console.log(`"${wordsArr.join(' ')}"`);
// const wordsArr = string.split(' ');
// const newWordsArr = wordsArr.slice(1, wordsArr.length -1);
// console.log(newWordsArr.join(' '));

//
// ## Example 6 - Масиви та рядки
//
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить
// його в консоль.
//
// const string = 'Welcome to the future';
// let newSting = '';
// for (let i = string.length - 1; i >=0; i -= 1) {
//   newSting += string[i]
// }
// console.log(newSting);

// const charsArr = string.split('');
// const reversedCharsArr = charsArr.reverse();
// console.log(reversedCharsArr.join(''));
// console.log(string.split('').reverse().join(''));

//
// ## Example 7 - Сортування масиву із циклом
//
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою
// елемента.
//
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// for (let i = 0; i < langs.length; i += 1) {
//   // порівнюємо поточний елемент з іншими елементами масиву
//   for (let j = i + 1; j < langs.length; j += 1) {
//     // мфняємо елементи місцями
//     if (langs[i] > langs[j]) {
//       const thirdValue = langs[i];
//       langs[i] = langs[j];
//       langs[j] = thirdValue
//     }
//   }
// }
// console.log(langs);
//
// ## Example 8 - Пошук елемента
//
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для
// будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
//
// const numbers = [2, 17, 94, 1, 23, 37];
// let min;
// for (let number of numbers) {
//   if (min === undefined || number < min) {
//     min = number
//   }
// }
// console.log(min); // 1
//
//
//
//
//
//
//
//
//

//Напиши код, який буде запитувати логін за допомогою prompt та логувати результат у консоль браузера.
// Якщо користувач вводить "Адмін", то prompt запитує пароль.Якщо нічого не введено або натиснута клавіша Esc,
//     вивести рядок "Відмінено"
//     У іншому випадку вивести рядок "Я вас не знаю!"

// let login = prompt('Введіть догін:');
// if (login === 'Адмін') {
//   let password = prompt('Введіть пароль:');
//   if (password === '' || password === null) {
//     console.log('Відмінено');
//   } else {
//     console.log(`Пароль: ${password}`);
//   }
// } else if (login === '' || login === null) {
//   console.log('Відмінено');
// } else {
//   console.log('Я вас не знаю!');
// }
//
//
//
//
//
//
//
//

// При завантаженні сторінки користувачу пропонується у prompt ввести число.
//     Те, що вводить користувач, додається до значення змінної total.
// Операція вводу числа триває до тих пір, поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив вводити числа і натиснув на кнопку Cancel,
//     показувати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку, що користувач ввів саме число, а не довільні символи, не потрібно.

// let total = 0;

// for (;;) {
//     let input = prompt ('Enter number')

//     if (input === null) {
//         break;
//     }

//     let number = Number(input);
//      total += number;
// }

// alert(`summ of number: ${total}`);
//
//
//
//
//
//
//

// Скрипт, который считает сумму элементов двух массивов

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30, 100, 12];
// let total = 0;

// const numbers = array1.concat(array2);

// for (const number of numbers) {
//     total += number;
// }
// console.log(total);
//
//
//
//
//
//
//
//
//

// Карточки в Trello
// Метод Splice()
// Удалить
// Добавить
// Обновить

// const cards = [
//     'Карточка-1',
//     'Карточка-2',
//     'Карточка-3',
//     'Карточка-4',
//     'Карточка-5'
// ]
// console.table(cards);

//  Удаление (по индексу), метод indexOf()

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);
// cards.splice(index, 1);

// console.table(cards);

// Добавление (по индексу)

// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(index, 0, cardToInsert);
// console.table(cards);

// Обновление (по индексу)

// const cardToUpdate = 'Карточка-4';
// const index = cards.indexOf(cardToUpdate);
// console.log(index);
// cards.splice(index, 1, 'Обновленная Карточка-4');

// console.table(cards);

//
//
//
//
//
//
//
//

// Делаем Slug в URL из названия статьи
// Заголовок состоит только из букв и пробелов

// -нормаоизируем строку
// -разбиваем по словам
// -сшиваем строку с разделителями
// должно получиться     top-10-benefits-of-react-framework

// const title = 'Top 10 benefits of React framework';

// const slug = title.toLowerCase().split(' ').join('-');

// console.log(slug);
//
//
//
//
//
//
//
//
//
//

// Скрипт поиска самого маленького числа в массиве
// при условии, что числа не повторяются

// const numbers = [51, 18, 13, 24, 7, 2, 19];
// let smallestNumber = numbers[0];

// for(number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
// console.log('Smallest number: ',  smallestNumber);
//
//
//
//
//
//
//
//
//
//
//

// Поиск логина (несколько способов)
// - если логина нет, вывести сообщение 'Пользователь [логин] не найден'
// - если нашли, вывести сообщение 'Пользователь [логин] найден'

// -через for

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind} не найден`;

// for (let i = 0; i < logins.length; i+=1) {
//     const login = logins[i];

//     if(login === loginToFind) {
//         message = `Пользователь ${loginToFind}  найден`;
//         break
//     }
// }

// console.log(message);

// - через for...of

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind} не найден`;

// for (const login of logins) {
// console.log('Login: ', login );
// console.log(`${login} === ${loginToFind}: `, login === loginToFind);

// if ( login === loginToFind) {
//     console.log('Ура, равны!!!');
//     message = `Пользователь ${loginToFind}  найден`;
//     break;
//  }
// }

// console.log(message);

// -метод includes с тернарным оператором

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';

// const message = logins.includes(loginToFind) ? `Пользователь ${loginToFind}  найден` :  `Пользователь ${loginToFind} не найден`;

// console.log(message);
//
//
//
//
//
//
//
//
//
//
//

// Посчитать общую сумму покупок в корзине

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;
// 1) Перебрать массив
// for(let i = 0; i < cart.length; i += 1) {
//     console.log(cart[i]);

//     total += cart[i];
// }
// console.log('Total: ', total);
// 2)сделать переменную total до цикла
// 3)каждый элемент приплюсовать к total
//
//
//
//
//
//
//
//
//

// Посчитать сумму всех четных чисел в массиве

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (const number of numbers) {
//     if(number % 2 !== 0) {
//         console.log('Эту итерацию нужно пропустить', number);
//         continue;
//     }

//     console.log(`${number} - четное!!!!!!!`);
//     total += number;
// }

// console.log('Total: ', total)

//
//
//
//
//
//
//
//
//

// Скрипт, который выводит в консоль имя и телефонный номер пользователя. В переменных `names` и `phones` хранятся строки имен и номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Кол-во иимен и телефонов одинаково

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

// console.log(namesArr);
// console.log(phonesArr);
//
//
//
//
//
//
//
//
//
//
//

// Напиши скрипт, который выводит в консоль все слова строки, кроме первого и последнего.Скрипт должен работать для любой строки

// const string = 'Welcome to the future';

// const wordsArr = string.split(' ');
// const newWordsArr = wordsArr.slice(1, wordsArr.length - 1);

// console.log(newWordsArr.join(' '));

// Скрипт, который; разворачивает; строку(обратный, порядок, букв); и; выводит; ее; в; консоль

// const string = 'Welcome to the future';

// console.log(string.split('').reverse().join(''));

//
//
//
//
//
//
//
//
//
//
// Сортировка массива с циклом
// Скрипт сортировки массива строк в алфавитном порядке по первой букве элемента

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// for (let i = 0; i < langs.length; i += 1) {
// сравниваем текущий элемент с другими элементами массива
//   for (let j = i + 1; j < langs.length; j += 1) {
// меняем элементы местами
//     if (langs[i] > langs[j]) {
//       const thirdValue = langs[i];
//       langs[i] = langs[j];
//       langs[j] = thirdValue;
//     }
//   }
// }
// console.log(langs);
//
//
//
//
//
//
//
// Напиши функцию calculateTotalPrice(items)
// которая принимает массив цен (чисел) и возвращает их сумму
//
// const calculateTotalPrice = function (items) {
//   console.log('items внутри функции: ', items);
//
//   let total = 0;
//
//   for (const item of items) {
//     total += item;
//   }
//
//   return total;
// };
//
// console.log(calculateTotalPrice([1, 2, 3]));
// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));
//
//
//
//
//
//
//
//
//
//
//
// Напиши функцию logItems(items) для перебора и логирования массива
//
// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };
//
// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура', 'наушники', 'часы']);
//
//
//
//
//
//
//
//
//
//напиши функцию findLogin(allLogins, login) для поиска логина
// - если логина нет, вывести сообщение 'Пользователь [логин] не найден'
// - если нашли, вывести сообщение 'Пользователь [логин] найден'
//
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден`
//     : `Пользователь ${loginToFind} не  найден`;
// };

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'kiwidab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));
//
//
//
//
//
//
//
//
//
//
//
//
// напиши функцию findSmallestNumber(numbers) для поиска самого  маленького числа в массиве
// при условии, что числа уникальные (не повторяются)
// const findSmallestNumber = function (numbers) {
//   let smallestNumber = numbers[0];
//
//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }
//   return smallestNumber;
// };
//
// console.log(findSmallestNumber([3, 8, 12, -2, 15]));
// console.log(findSmallestNumber([100, 54, 8, 12, 47]));
// console.log(findSmallestNumber([7, 21, 84, 15, 4]));
//
//
//
//
//
//
//
//
//
// скрипт, который заменяет регистр
// каждого символа в строке на противоположный.
//
//
// const string = 'qWeRTzxCv';
// console.log(string);
// const letters = string.split('');
// let invertedString = '';
//
// console.log(letters);
//
// for (const letter of letters) {
//   const isEqual = letter === letter.toLowerCase();
//   invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }
//
// console.log('invertedString: ', invertedString);
//
//
//
//
//
//
//
//
//
//
//
// Напиши функцию changeCase(string) которая заменяет регистр
// каждого символа в строке на противоположный.
//
// const changeCase = function (string) {
//   const letters = string.split('');
//   let invertedString = '';

//   for (const letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();
//
//     invertedString += isInLowerCase
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
//   }
//
//   return invertedString;
// };

// console.log(changeCase('qweRTY'));
// console.log(changeCase('mAnGo'));
// console.log(changeCase('AjAx'));
//
//
//
//
//
//
//
//
//
//
//
//
//Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
// строка состоит только из букв и пробелов
//
// const slugify = function (string) {
//   return string.toLowerCase().split(' ').join('-');
// };

// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Azure Static Web Apps are Awesome'));
// console.log(slugify('Technical writing tips for non-native English speakers'));
//
//
//
//
//
//
//
//
//
//
//
//
// Напиши функцию add для сложения произвольного количества аргументов(чисел)
// Операция ...(rest)
//
// const add = function (...args) {
//   console.log(args);

//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));
//
//
//
//
//
//
//
//
//
//
//
//
// Напиши функцию filterNumbers(array[, number1, ...]) которая:
// - первым аргументом принимает массив чисел
// - после первого арумента может быть произвольное количество других аргументов
// которые будут числами
// - функция должна вернуть новый массив, в котором будут только те аргументы,
// начиная со второго,
// для которых есть аналог в оригинальном массиве
//
//
// const filterNumbers = function (array, ...args) {
//   console.log('array: ', array);
//   console.log('args: ', args);
//   const uniqueElements = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       uniqueElements.push(element);

//       console.log(`${element} есть везде!`);
//     }
//   }

//   return uniqueElements;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));
//
//
//
//
//
//
//
//
//
//
//
// Коли не потрібно робити return
// let a = 10;
// function foo(b) {
//   if (b > 10) {
//     a = b;
//   }
// }
//
// foo(20);
// console.log(a);

// Функція, яка не має return
// const foo = function () {
//   const a = 5;
// }
// console.log(foo());

// Різні варіанти оголошення функції
// foo(5); // => так не працює. Виклик функції має бути після оголошення змінної
// const foo = function (a) {
//   console.log(a);
// }

// foo(5); // => Так працює. Ініціалізація відбувається через ключове слово function
// function foo(a) {
//   console.log(a)
// }

// # Модуль 2. Заняття 4. Функції
//
// ## Example 1 - Індекс маси тіла
//
// Напиши функцію `calcBMI(weight, height)` яка розраховує та повертає
// індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на
// квадрат висоти людини в метрах.
//
//   Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді
//   `24.7` або `24,7`, тобто як роздільник дробової частини
// може бути кома.
//
//   Індекс маси тіла необхідно округлити до однієї цифри після коми;

// function calcBMI(weight, height) {
//   const newWeight = Number(weight.replace(',', '.'));
//   const newHeight = Number(height.replace(',', '.'));
//
//   return (newWeight / Math.pow(newHeight, 2)).toFixed(1);
// }
//
// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8
//
// ## Example 2 - Найменше з чисел
//
// Напиши функцію `min(a,b)`, яка повертає найменше з чисел `a` та `b`.
//
// function min(a, b) {
//   return Math.min(a, b);
// }
// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1
//
// ## Example 3 - Площа прямокутника
//
// Напиши функцію `getRectArea(dimensions)` для обчислення площі прямокутника
// зі сторонами, значення яких будуть передані до параметра `dimensions` у вигляді
// рядка. Значення гарантовано розділені пробілом.
//
// function getRectArea(dimensions) {
//   const valuesArr = dimensions.split(' ');
//   const width = Number(valuesArr[0]);
//   const height = Number(valuesArr[1]);
//
//   return width * height;
// }
// console.log(getRectArea('8 11'));

// function getRectArea(dimensions) {
//   if (!dimensions) {
//     return 'Error';
//   }
//
//   const valuesArr = dimensions.split(' ');
//   const width = Number(valuesArr[0]);
//   const height = Number(valuesArr[1]);
//
//   return width * height;
// }
// console.log(getRectArea('8 11'));

//
// ## Example 4 - Логування елементів
//
// Напиши функцію `logItems(items)`, яка отримує масив та використовує цикл
//   `for`, який для кожного елемента масиву буде виводити в консоль повідомлення у
// форматі `<номер елемента> - <значення елемента>`. Нумерація елементів повинна
// починатися з `1`.
//
//   Наприклад для першого елемента масиву `['Mango', 'Poly', 'Ajax']` з індексом `0`
// буде виведено `1 - Mango`, а для індексу 2 виведе `3 - Ajax`.
// function logItems(itemsArr) {
//   for (let i = 0; i < itemsArr.length; i += 1) {
//     console.log(`Element ${i + 1}: `, itemsArr[i]);
//   }
// }
// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
//
// ## Example 5 - Логування контактів
//
// Напиши функцію `printContactsInfo(names, phones)` яка виводить у консоль ім'я
// та телефонний номер користувача. У параметри `names` та `phones` будуть передані
// рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та
// телефонів у рядках вказують на відповідність. Кількість імен та телефонів
// гарантовано однакова.

// function printContactsInfo(names, phones) {
//   const namesArr = names.split(',');
//   const phonesArr = phones.split(',');
//
//   for (let i = 0; i < namesArr.length; i += 1) {
//     console.log(`${namesArr[i]}: `, phonesArr[i]);
//   }
// }
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );
//
// ## Example 6 - Пошук найбільшого елемента
//
// Напиши функцію `findLargestNumber(numbers)`яка шукає найбільше число в
// масиві.
// function findLargestNumber(numbersArr) {
//   let max;
//
//   for (let number of numbersArr) {
//     if (max === undefined || number > max) {
//       max = number
//     }
//   }
//
// // console.log(max);
//
//   return max;
// }
//
// const maxValue = findLargestNumber([2, 17, 94, 1, 23, 37]);
// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
//
// ## Example 7 - Середнє значення
//
// Напишіть функцію `calAverage()` яка приймає довільну кількість аргументів
// і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

// function calAverage(...args) {
//   console.log(args);
//   let sum = 0;
//
//   for (let argument of args) {
//     sum += argument;
//   }
//
//   return sum / args.length;
// }
// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// function calAverage() {
//   console.log(arguments);
//   let sum = 0;
//
//   for (let argument of arguments) {
//     sum += argument;
//   }
//
//   return sum / arguments.length;
// }
// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

//
// ## Example 8 - Форматування часу
//
// Напиши функцію `formatTime(minutes)` яка переведе значення `minutes`
// (кількість хвилин) у рядок у форматі годин та хвилин `HH:MM`.

// function formatTime(timeInMinutes) {
//   const hours = Math.floor(timeInMinutes / 60);
//   const minutes = timeInMinutes % 60;
//
//   // const hoursString = hours < 10 ? `0${hours}` : hours;
//   // const minutesString = minutes < 10 ? `0${minutes}` : minutes;
//
//   const hoursString = `${hours}`.padStart(2, 0);
//   const minutesString = `${minutes}`.padStart(2, 0);
//
//   return `${hoursString}:${minutesString}`
// }
// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
//
// ## Example 9 - Колекція курсів
//
// Напишіть функції для роботи з колекцією навчальних курсів `courses`:
//
// - додає курс до кінця колекції
// - видаляє курс із колекції
// - змінює ім'я на нове
//
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
//
// function addCourse(name) {
//   // if (courses.includes(name)) {
//   //   console.log('Ви вже маєте такий курс');
//   //   return;
//   // }
//   //
//   // console.log('Hello');
//
//   if (courses.includes(name)) {
//     console.log('Ви вже маєте такий курс');
//   } else {
//     courses.push(name);
//   }
// }
// addCourse('Express');
// // console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// // addCourse('CSS'); // 'Ви вже маєте такий курс'
//
// function removeCourse(name) {
//   if (courses.includes(name)) {
//     const courseIndex = courses.indexOf(name);
//     courses.splice(courseIndex, 1);
//   } else {
//     console.log('Курс із таким ім\'ям не знайдено');
//   }
// }
// removeCourse('React');
// // console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// //removeCourse('Vue'); // 'Курс із таким ім'ям не знайдено'
//
// function updateCourse(oldName, newName) {
//   if (courses.includes(oldName)) {
//     const courseIndex = courses.indexOf(oldName);
//     courses.splice(courseIndex, 1, newName);
//   } else {
//     console.log('Курс із таким ім\'ям не знайдено');
//   }
// }
// console.log(courses);
// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
//
//
//
//
//
//
//------------------------  ОБЪЕКТЫ --------
//
//
//
// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
//   changeName(newName) {
//     console.log(this);
//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//     this.trackCount = this.tracks.length;
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
// };
// playlist.changeName('новое имя');
// playlist.addTrack('new-Track');
// playlist.addTrack('new-Track1');
// playlist.updateRating(6);

// console.log(playlist);
//
//
//
//
//
//
//
//
//
//
//
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// // ---------массив ключей--------
// const keys = Object.keys(feedback);

// console.log(keys);

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);

//   totalFeedback += feedback[key];
// }

// console.log('totalFeedback: ', totalFeedback);
//
//
//
//
//
//
//
//
//

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;
// // ---------массив значений--------
// const values = Object.values(feedback);

// console.log(values);

// for (const value of values) {
//   console.log(value);

//   totalFeedback += value;
// }

// console.log('totalFeedback: ', totalFeedback);
//
//
//
//
//
//
//
//
//
//
// --------------------массив объектов--------
//
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];

// console.table(friends);

// for (const friend of friends) {
//   console.log(friend.online);
//   friend.newport = 555;
// }

// console.table(friends);
//
//
//
//
//
//
//
//

const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];

console.table(friends);

// -------------ищем друга по имени---------------

// const findFriendByName = function (allFriends, name) {
//   for (const friend of allFriends) {
//     // console.log(friend);
//     // console.log(friend.name);

//     if (friend.name === name) {
//       return 'Нашли!!!!!!!!!';
//     }
//   }
//
//   return 'Не Нашли (((';
// };
//
// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));
//
// -------------получаем имена всех друзей---------------
//
// const getAllNames = function (allfriends) {
//   const names = [];

//   for (const friend of allfriends) {
//     console.log(friend.name);

//     names.push(friend.name);
//   }
//   return names;
// };
// //
// console.log(getAllNames(friends));
//
//
// -------------получаем имена друзей, которые онлайн---------------
//
//
// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);

//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }
//   return onlineFriends;
// };

// console.log(getOnlineFriends(friends));

//
// -------------получаем имена друзей, которые оффлайн---------------
//
//
// const getOfflineFriends = function (allFriends) {
//     const offlineFriends = [];

//     for (friend of allFriends) {
//         console.log(friend.online);

//         if (!friend.online) {
//             offlineFriends.push(friend);
//         }
//     }

//     return offlineFriends;
// };

// console.log(getOfflineFriends(friends));
//
//
//  -------------получаем объект друзей по статусу оффлайн\онлайн---------------
//
//
const getFriendsByOnlineStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };

  for (const friend of allFriends) {
    if (friend.online) {
      friendsByStatus.online.push(friend);

      continue;
    }

    friendsByStatus.offline.push(friend);
  }

  return friendsByStatus;
};

console.log(getFriendsByOnlineStatus(friends));
