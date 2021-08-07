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

function findLongestWord(string) {
    const wordsMass = string.split(' ');
    let longestWord = wordsMass[0];

    for (let word of wordsMass) {
        if (word.length > longestWord.length)
            longestWord = word;
    }

    return longestWord;
}

// function findLongestWord(string) {
//   // Change code below this line
// let word = 0;
// for (i = 0; i < string.maxLength; i += 1 ){
//   const word = string.maxLength[i];

//   // Change code above this line
// }
// return word;
// }

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));
console.log(findLongestWord());

