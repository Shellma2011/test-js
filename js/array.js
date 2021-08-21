// let userNumber = prompt('set number');
// let userPow = prompt('set pow');
// const number = Number(userNumber);
// const pow = Number(userPow); 
// console.log(typeof number);


// console.log(Math.pow(pow, number));
////////////////////////////////////////////////////////////////////////////////////////
// let num = '12345';
// let total = 1;

// for (let i = 1; i < num.length; i += 1) {
//     total *= num[i]

// }

// console.log(total)

////////////////////////////////////////////////////////////

// let hours = prompt('Введите часы');
// let days = prompt('Введите дни');
// let mounth = prompt('Введите месяцы');

// const userHours = hours * (60 * 60);
// const userDay = days * (60 * 60 * 24);
// const userMounth = mounth * (60 * 60 * 24 * 30);

// console.log(`количество секунд в часе: ${userHours}`);
// console.log(`количество секунд в дне: ${userDay}`);
// console.log(`количество секунд в месяце: ${userMounth}`);

// /////////////////////////////////////////////////////

// let hours = prompt('Введите часы');
// let minut = prompt('Введите минуты');
// let seconde = prompt('Введите секунды');

// console.log(`${hours}:${minut}:${seconde}`)

//////////////////////////////////////////////////////

// if (1 === '1') {
//     console.log('истина');
// } else {
//     console.log('ложь');
// }

// if (5 === '5') {
//     console.log('истина');
// } else {
//     console.log('ложь');
// }

// let message = (92 > '11' && 58 < 100)
//     ?
//     'истина' : 'ложь';
// console.log(message);
    
////////////////////////////////////////////////////

// let a = "" - 1 + 0;
// console.log(a);

/////////////////////////////////////////////////////

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// a = Number(a);
// b = Number(b)

// alert(a + b); // 12

/////////////////////////////////////////////////////

// if ("0") {
//   alert( 'Привет' );
// }

/////////////////////////////////////////////////////

// let value = prompt('Какое "официальное" название JavaScript?', '');

// if (value === 'ECMAScript') {
//     alert('Правильно!');
// } else {
//     'Не знаете? “ECMAScript”!'
// }

//////////////////////////////////////////////////////

// let value = prompt("введите число")

// if (value > 0) {
//     alert("1");
// } else if (value < 0) {
//     alert("-1");
// } else {
// alert("0");
// }

///////////////////////////////////////////////////

// let result;

// result = (a + b < 4) ? 'Мало' : 'Много';

// console.log(result)

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax', 1, 2, 3];
// console.log(friends)

// console.log(friends[0])
// console.log(friends[friends.length - 2])

// friends[1] = 'qweqwe'
// console.log(friends)

// friends[4] = 4
// friends[5] = 5
// friends[6] = 6
// console.log(friends)

// let arrayFriends = ['Mango', 'Kiwi', 'Poly', 'Ajax'], [1, 2, 3], [cat, dog, mouse];
// console.log(arrayFriends)

// let a = 10;
// let b = a;
// a = 20

// console.log(a)
// console.log(b)

///////////////////////////////////////////////////////////////////

// let a = [1, 2, 3];
// let b = a;
// let c = b;
// b[0] = 500
// c[0] = 200

// console.log(a)
// console.log(b)
// console.log(c)

// console.log(a === b)
// console.log([1, 2, 3] === [1, 2, 3]) два массива не будут равны, т.к. это разные ссылки

//////////////////////////////////////////////////////////////////

// for - если необходимо что-то менять в какой-то ячейке (необходим доступ к отдельным ячейкам)

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax', 1, 2, 3];
// console.log(friends)

// // const newFriends = friends.length - 1
// // for (let i = 0; i <= newFriends; i += 1){

// for (let i = 0; i <= friends.length - 1; i += 1){
//   friends[i] += '-1'  
//   console.log(friends[i])
// }

//////////////////////////////////////////////////////////////////

// for (  of ) - если просто перебрать, без изменений
  
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax', 1, 2, 3];

// for (const friend of friends) {
//   console.log(friends)
// }

////////////////////////////////////////////////////////////////
// посчитать сумму покупок в корзине
// 1. перебрать массив
// 2. создать переменную total
// 3. на каждой итеррации + к total

// const cart = [54, 28, 105, 70, 92, 17, 120];
// console.log(cart.length)
// let total =0

// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i])
//   total += cart[i];
//   // total = total + cart[i]
// }

// for (const value of cart) {
//   total += value
// }
// console.log('total:', total)

////////////////////////////////////////////////////////////////
// const cart = [54, 28, 105, 70, 92, 17, 120];

// for (let i = 0; i < cart.length; i +=1) {
//   cart[i] = Math.round(cart[i] * 1.2)
  
// }
// console.log('total:', cart)

////////////////////////////////////////////////////////////////
// напиши скрипт, который подсчитает сумму всех четных чисел в массиве
// 1.1. создать total
// 1. перебрать массиве
// 2. найти все четные числа
// 3. на каждой итеррации проверить число на кратность
// 4. если четное, то + к total

// const nambers = [54, 28, 105, 70, 92, 17, 120];
// console.log(nambers)

// let total = 0

// // for (let i = 0; i <= nambers.length; i += 1) {
// //   const namber = nambers[i];
// //   if (namber % 2 === 0){
// //     console.log('Четное!: ', namber);
// //     total += namber;
// //   } else {
// //     console.log('HE Четное!: ', namber);
// //   }
// // }
// // console.log(total)
  
// //////////////// 2й вариант

// for (let namber of nambers) {
//   if (namber % 2 === 0){
//     console.log('Четное!: ', namber);
//     total += namber;
//   } else {
//     console.log('HE Четное!: ', namber);
//   }
// }
// console.log(total)

// //////////////// 3й вариант

// for (let namber of nambers) {
//   if (namber % 2 !== 0){
//     console.log('эту итеррацию нужно пропустить: ', namber);
//     continue;
//   } else {
//     total += namber;
//     console.log('Четное!: ', namber);
//   }
// }
// console.log(total)

////////////////////////////////////////////////////////////////

// напиши скрипт поиска логина,
//   если логина нет, вывести `[логин] не найден`
// если нашли логин, вывести сообщение`Пользователь [логин] найден!`
  
// - через for
// - Через for...of
// - Логика break
// - Метод includes() через тернарный оператор



// const logins = ['m4fgjkghd', 'kiwi1234', 'ajax5678', 'roman7654'];
// const loginToFind = 'k123654iwi1234';
// let message = `Пользователь ${loginToFind} найден!`;

///////////////
// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   // console.log(login);

//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден!`;
//     break;
    
//   } else {
//     message = `${loginToFind} не найден`;
//   }
// }
// console.log(message)

//////////////
// for (let login of logins) {
//   console.log('Login:', login);
  

//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден!`;
//     break;
//   } 
//     message = `${loginToFind} не найден`; 
// }
// console.log(message);

//////////////

// console.log(logins.includes(loginToFind))

//////////////

// message = logins.includes(loginToFind) ? 
// `Пользователь ${loginToFind} найден!` :
// `${loginToFind} не найден`;
// console.log(message)

////////////////////////////////////////////////////////////////
// написать скрипт поиска самого маленького числа в массиве, 
// при условии, что числа не повторяются и уникальные

// const numbers = [54, 28, 105, 70, 92, 17, 120];
// let smallestNumber = numbers[0];

// console.log(smallestNumber)

// for (let number of numbers) {
//   console.log(number);

//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log('smallestNumber: ', smallestNumber);

///////////////

// const numbers = [54, 28, 105, 70, 92, 17, 120];
// let biggestNumber = numbers[0];

// console.log(biggestNumber)

// for (let number of numbers) {
//   console.log(number);

//   if (number > biggestNumber) {
//     biggestNumber = number;
//   }
// }
// console.log('biggestNumber: ', biggestNumber);

////////////////////////////////////////////////////////////////

// const numbers = [30, 25, 1101, 6, 92, 34, 1];
// let bigNumber = numbers[0];

// for (let number of numbers) {
//   // console.log(number)

//   if (number > bigNumber) {
//     bigNumber = number;
//   }
// }
// console.log('наибольшее число: ', bigNumber)

////////////////////////////////////////////////////////////////

// написать скрипт, который объединяет все элементы массива в одно строковое значение
// элементов может быть произвол.колличество
// пусть элементы в строке будут разделены ---
//   - сначала через for
//   - потоm через join
    
//     const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax']
// // let string = ' ';
//     console.log(friends)

// // for (let friend of friends) {
// //   // console.log(friend)

// //   string += friend + '---';
// // }
// // string = string.slice(0, string.length - 1);
// // console.log(string)

// ////////////

// const string = friends.join('---')
//////////////////// join -- берет массив и в строку сшивает через указанный разделитель
// console.log(string)

////////////////////////////////////////////////////////////////

// напиши скрипт,
// который заменяет регистр каждого символа в строке на противоположный

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = ' ';
// // split -- берет строку и разбивает ее в массив (на элементы)
// console.log(string)
// console.log(letters)

// for (let letter of letters) {
//   console.log(letter);

//   if (letter === letter.toLowerCase()) {
//     // console.log('эта буква в нижнем регистре: ', letter);

//     invertedString += letter.toUpperCase();
//   } else {
//     invertedString += letter.toLowerCase();
//     // console.log('эта буква в верхнем регистре: ', letter);
//   }
// }
//  console.log(invertedString)

///////////

// for (let letter of letters) {
//   console.log(letter);

// invertedString +=
//   letter === letter.toLowerCase()
//     ? letter.toUpperCase()
//     : letter.toLowerCase();
// }
// console.log(invertedString)

////////////////////////////////////////////////////////////////

// делаем slug и URL из названия статьи
//   (заголовок статьи состоит только из букв и пробелов)
//   - нормализируем строку
//   - разбиваем по словам
//   - сшиваем в строку с разделителями

// const title = 'Top 10 benefits of React framework';
// console.log(title);

// const normolizeTitle = title.toLowerCase();
// // .toLowerCase() -- привели все буквы к нижнему регистру
// console.log(normolizeTitle);

// const words = normolizeTitle.split(' ');
// // .split(' ') -- разбили строку на слова в массиве
// console.log(words);

// const slug = words.join('-');
// // .join('-') -- вставили разделение между словами
// console.log(slug);

///////////////////// 2й вариант

// const slug = title.toLowerCase().split(' ').join('-')
// console.log(slug);
// console.log(typeof slug);

////////////////////////////////////////////////////////////////

// напиши скрипт, который считает сумму элементов двух массивов

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// console.log(array1);
// console.log(array2);

// const nambers = array1.concat(array2);
// // // .concat(array2) -- соединяем два массива вместе
// console.log(nambers)

// for (let namber of nambers) {
//   total += namber;
// }

// console.log(total)

////////////////////////////////////////////////////////////////

// работаем с коллекцией карточек в трелло
  // - метод splice() -- деструктивный метод!!!
  // - удалить
  // - добавить
  // - обновить

// const cards = [
//   'Карточка - 1',
//   'Карточка - 2',
//   'Карточка - 3',
//   'Карточка - 4',
//   'Карточка - 5',
// ]

// console.table(cards)

///////////////////

// Удаление (по индексу), метод indexOf()
// const cardToRemove = 'Карточка - 3';
// const index = cards.indexOf(cardToRemove)
// // // .indexOf(cardToRemove) -- (идентификатор элемента) нашли индекс под которым находится картоска 3
// cards.splice(index, 1)
// // // .splice(index, 1) -- index - выбор позиции, 1 - количество элементов начиная с нее удалить

// console.log(cards)

///////////////////

// // Добавление (по индексу)
// const cardToIncert = 'Карточка - 6';
// const index = 3;

// cards.splice(3, 0, cardToIncert)
// cards.splice(4, 0, cardToIncert) -- добавили еще одну ту же самую карту, много раз вызываем splice()

// cards.splice(3, 0, 'Карточка8', 'Карточка9')
// // // .splice(1, 0, 'Карточка8', 'Карточка9') 
// // //  --1 - выбор позиции, 
// // //  --0 - не удалять элементы (дословно-удалить 0 элементов)
// // //  --'Карточка8', 'Карточка9' - добавить эти элементы
// console.table(cards)

///////////////////

// // Обновление (по индексу)
// const cardToUpdate = 'Карточка - 4';
// const index = cards.indexOf(cardToUpdate)

// console.log(index)

// cards.splice(index, 1, 'новая обновленная Карточка - 4')
// // // .splice(3, 1, cardToUpdate) -- 'новая обновленная Карточка - 4'
// // //  --index - выбор позиции, 
// // //  --1 - удалить элемент (дословно-удалить 1 элемент)
// // //  -- вставить на это место 'новая обновленная Карточка - 4'

// console.table(cards)


