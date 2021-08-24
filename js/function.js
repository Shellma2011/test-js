// const add = function (a,b) { -- обьявление функции (не работает)
//     ///////
// return --- результат возврата из функции
// }

// add(a,b); -- вызов функции (чтоб заработала), здесь передаем параметры для работы функции
// const r1 = add(a,b) - -- при такой записи результат отработки функции,т.е. return запишется в єту переменную

//////////////////////////////////////////////////

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   } if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   } 
//     return "The order is accepted, our manager will contact you";
//   }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 100));

//////////////////////////////////////////////

// const a = 1;
// console.log(typeof a)

//////////////////////////////////////////////

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length -1];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

//////////////////////////////////////////////

// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits);

// fruits[1] = "peach";
// fruits[fruits.length -1] = "banana";

// ["apple", "peach", "pear", "banana"]

// ////////////////////////////////////////////

// const fruits = ["apple", "peach", "pear", "banana"];
// console.log(fruits)

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex)
// console.log(lastElement)

//////////////////////////////////////////////

// function getExtremeElements(array) {
//   // Change code below this line
//     // const firstElement = array[0];
//     // const lastElement = array[array.length - 1];
//     // console.log(firstElement)
//     // console.log(lastElement)

// const newArray = [array[0], array[array.length -1]];
// console.log(newArray)    
//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]))

//////////////////////////////////////////////

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//     words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }

// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("Mango hurries to the train", " "))

//////////////////////////////////////////////

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     let numberWord;
//     let lengthWord;
//     let total;

//     numberWord = message.split(" ");
//     total = numberWord.length * pricePerWord;

//     return total;
//    // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

//////////////////////////////////////////////

function slugify(title) {

    // // const normolize = slugify.toLoverCase();
    // const normolizeTitle = title.toLowerCase();
    
    // // const words = normolize.split(' ');
    // const words = normolizeTitle.split(' ');

    // const slug = words.join('-')


    const slug = title.toLowerCase().split(' ').join('-');

    return slug;
    }

console.log(slugify("English for developer"));