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
