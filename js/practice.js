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









// Скрипт, который считает сумму элементов двух массивов

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30, 100, 12];
// let total = 0; 

// const numbers = array1.concat(array2);

// for (const number of numbers) {
//     total += number;
// }
// console.log(total);








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








// Делаем Slug в URL из названия статьи 
// Заголовок состоит только из букв и пробелов

// -нормаоизируем строку
// -разбиваем по словам
// -сшиваем строку с разделителями
// должно получиться     top-10-benefits-of-react-framework

// const title = 'Top 10 benefits of React framework';

// const slug = title.toLowerCase().split(' ').join('-');

// console.log(slug);









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








// Посчитать общую сумму покупок в корзине

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;
// // 1) Перебрать массив
// for(let i = 0; i < cart.length; i += 1) {
//     console.log(cart[i]);

//     total += cart[i];
// }
// console.log('Total: ', total);
// // 2)сделать переменную total до цикла
// // 3)каждый элемент приплюсовать к total







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