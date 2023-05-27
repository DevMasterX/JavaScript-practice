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
