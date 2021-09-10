// model 2 #20

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//  for ( let i of order) {
//   total += i;
//  }
//   // Change code above this line
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]); 
// calculateTotalPrice([164, 48, 291]); 
// calculateTotalPrice([412, 371, 94, 63, 176]); 
// calculateTotalPrice()


// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//     for (let i = 0; i < order.length; i += 1){
//   total += order[i];
//   // Change code above this line
// }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice());

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// // for (const iterator of order) {
// //   total+=iterator;
// //   }
//   for (let i = 0; i < order.length; i += 1){ 
//     total += order[i];
// }
//   // Change code above this line
//  return total;
 
// }

// model 2 #21

// function findLongestWord(string) {
//     const wordsMass = string.split(' ');
//     let longestWord = wordsMass[0];

//     for (let word of wordsMass) {
//         if (word.length > longestWord.length)
//             longestWord = word;
//     }

//     return longestWord;
// }

// // function findLongestWord(string) {
// //   // Change code below this line
// // let word = 0;
// // for (i = 0; i < string.maxLength; i += 1 ){
// //   const word = string.maxLength[i];

// //   // Change code above this line
// // }
// // return word;
// // }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));
// console.log(findLongestWord());


// model 2 #22

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//     for (i = min; i <= max; i += 1 )
//    numbers.push(i);
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

// model 2 #23

// function filterArray(numbers, value) {
//  let newArray = [];
//    // Change code below this line
//     for (const number of numbers) {
//     if (number > value){
//         newArray.push(number);
//         }
// }
// return newArray;

//   // Change code above this line
// }


// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// model 2 #24

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//     return fruits.includes(fruit); 
// }
// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));

// model 2 #25

// function getCommonElements(array1, array2) {
//     const newCommonElements = [];
//     for (const element of array1) {
//         if (array2.includes(element)) {
//             newCommonElements.push(element);
//         }
//      }

//     return newCommonElements;

// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// model 2 #26

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i of order) {
//     total += i;
//   }

//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));

// model 2 #27

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let i of numbers) {
//     let number = i;

//     if (number > value) {
//       filteredNumbers.push(number);
//       }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));

// model 2 #29

// function getEvenNumbers(start, end) {
//     const evenNumbers = [];

//     for (let i = start; i <= end; i += 1) {

//         if (i % 2 === 0) {
//             evenNumbers.push(i);
//         }
//     }
//       return evenNumbers;
//     }

  
    
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
    
// model 2 #30

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//       number = i;
//       break;
//     }
    
// }

// model 3 #6

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};

// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// console.log (apartment.location)

// model 3 #9

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam'
// }



// console.log(credentials)


////////////////////ДОП/////////////////////////////////////

// let vakcines = ['Phizer', 'AstraZeneca', 'Coronvac', 'Sputnic'];
// let countries = ['Usa', 'Britain', 'China', 'Russia'];

// function vakcinesBank(vakcines, countries) {
//     let obj = {};

//     for (let vac of vakcines) {
//         obj[vac] = vakcines;
//         for (let country of countries) {
//             obj[country] = countries;
//         }
//     }

//     return obj;
// }

// console.log(vakcinesBank(vakcines, countries));

///////////////////////////////////////////////////////////

// model 3 #11

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Если это собственное свойство - выполняем тело if
//   if (apartment.hasOwnProperty(key)) {

//     console.log([key]);
//   }

  
// }

// model 3 #13

// const book = {
//   title: "Последнее королевство",
//   author: "Бернард Корнуэлл",
//   genres: ["историческая проза", "приключения"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   console.log(book[key]);
// }

// model 3 #16

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   for (let salary of Object.values(salaries)) {
//     totalSalary += salary;
//   }
//   // Change code above this line
//   return totalSalary;
// }


// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))


// model 3 #17

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (let color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// };

// model 3 #18

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (let product of products) {
     
//     if (productName === product.name) {
//       return product.price;
//       continue;
//     }
      
//     };
// return null;
//   }


//   console.log(getProductPrice("Scanner"))

// model 3 #20

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   totalPrice = 0;

//   for (const product of products) {
//     if (product.name === productName) {
//         totalPrice += product.price * product.quantity;
//         console.log('totalPrice', totalPrice);
//       }
//     }

//           return totalPrice;
//  // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice("Radar"));


// model 3 #24

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);


// model 3 #25

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const 
// {
//   today: {high: highToday, low: lowToday, icon: 
// todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
//   tomorrow: {high: highTomorrow, low: 
//   lowTomorrow, icon: 
//   tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
//   } = forecast;

// model 3 #26

// Change code below this line
// function calculateMeanTemperature(forecast) {
  
//   const
//     { today: { low: todayLow, high: todayHigh },
//       tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast
  
   
  
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }))

// model 3 #28

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);


// model 3 #33

// Change code below this line
// function findMatches(firstArray, ...secondArray) {
//   const matches = []; // Don't change this line

//   for (const elementSecondArray of secondArray) {
//   if (firstArray.includes(elementSecondArray))
//     matches.push(elementSecondArray);
//   }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));


// ================================================================ //

//modul#4 1

// function makePizza() {
//   return 'Ваша пицца готовится, ожидайте.';
// }
// // Пиши код ниже этой строки

// const result = makePizza;
// const pointer = makePizza();

// console.log(result);
// console.log(pointer);

////////////////////////////////////////////////////////////////

//modul#4 4

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)){
//       return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
//     }
//     return onSuccess(pizzaName);
//   },
// };


// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
// console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError));
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
// console.log(pizzaPalace.order('Венская', makePizza, onOrderError));

////////////////////////////////////////////////////////////////

// const filter = function (array, test) {
//     const filteredArray = [];
//     for (const el of array) {
//         console.log(el);
//         const passed = test(el);

//         if (passed) {
//             filteredArray.push(el);
//         }
//     }

//     return filteredArray;
// }

// 1. Надо передать функцию
// 2. функция получает элемент массива
// 3. если элемент массива удовлетворяет условия, то функция вернет true
// 4. если не удовлетворяет, то вернет false

// const callback1 = function (value) { // операторы сравнения сами по себе возвращают true/false
//     return value >= 3;
// }

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const callback2 = function (value) {
//     return value <= 4;
// }

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);


////////////////////////////////////////////////////////////////

//model4 #7

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];
// // console.log(orders)

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. 
//   Ваш заказ ${position + 1}-й в очереди.`
// }

// const messages = [];

// for (let i = 0; i < orders.length; i += 1) {
//   messages.push(composeMessage.call(orders[i], i))

// }
  
// console.log(messages);

////////////////////////////////////////////////////////////////

// let name = "Vova";
// let age = 30;

// function sayHello() {
//     console.log("Hello");
// }

// let user = {
//     name: "Vova",
//     age: 30,

//     sayHello() {
//         console.log(this.name, this.age);
//     },
// };

// user.sayHello();

// let sara = {
//     name: "Sara",
//     age: 50,

//     setName(newName) {
//         this.name = newName;
//     },
// };

// sara.setName("Sara +++++");
// console.log(sara);
// sara.setName.call(user, "Vova++++++");
// console.log(user);

// sara.setName("Aunt Sara");
// user.sayHello();
// user.sayHello.call(sara);

// // sara.sayHello();
// // console.log(sara);

// // console.dir(user);
// // console.log(user);


////////////////////////////////////////////////////////////////

// modul4 #9

// const pizzaPalace = {
//   company: 'Pizza Palace',
// };

// const burgerShack = {
//   company: 'Burger Shack',
// };


// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// // Пиши код ниже этой строки

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');
// console.log(composeMessage);

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer('Поли');
// console.log(composeMessage);

////////////////////////////////////////////////////////////////

// modul4 #10

// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// }

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }
// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.
// console.log(service.mailingList);
// /* ['mango@mail.com',
//     'poly@hotmail.de',
//     'ajax@jmail.net',
//     'kiwi@mail.uk']*/

// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.
// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']

////////////////////////////////////////////////////////////////

// ============================================================= //

// modul5 #12





