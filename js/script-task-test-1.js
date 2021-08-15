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

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

console.log(allScores);
console.log(bestScore);
console.log(worstScore);