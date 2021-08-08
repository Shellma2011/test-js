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

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
      number = i;
      break;
    }
    
}








