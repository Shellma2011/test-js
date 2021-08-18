// ЧИСЛО K СТРОКЕ
let value = 0;

// 1й способ
let toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

// 2й способ
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию:`, typeof toString);

////////////////////////////////////////////////////////////////

// 1й способ
let age = 18;

let toStringNew = String(age);
console.log(toStringNew, typeof toStringNew)

// 1й способ

let userAge = 21;

let newUserAge = String(userAge);
console.log(newUserAge, typeof newUserAge)

// 2й способ

let cats = 5;

let moreCats = cats + "";
console.log(moreCats, typeof moreCats)

// 2й способ

let dogs = 7;

let moreDogs = dogs + "";
console.log(moreDogs, typeof moreDogs)

///////////////////////////////////////////////////////////////

// значение бесконечности К СТРОКЕ
let value1 = Infinity;

let toString1 = String(value1);
console.log(`${value1}, через конструктор String():`, toString1);
console.log(`тип данных ${value1}, через конструктор String():`, typeof toString1);

///////////////////////////////////////////////////////////////

// значение NaN К СТРОКЕ
let value2 = NaN;

let toString2 = String(value2);
console.log(`${value2}, через конструктор String():`, toString2);
console.log(`тип данных ${value2}, через конструктор String():`, typeof toString2);

///////////////////////////////////////////////////////////////

// значение null К СТРОКЕ
let value3 = null;

let toString3 = String(value3);
console.log(`${value3}, через конструктор String():`, toString3);
console.log(`тип данных ${value3}, через конструктор String():`, typeof toString3);

// БУЛЕВОЕ (логическое) true K СТРОКЕ

// 1й способ
let apple = true;

let newApple = String(apple);
console.log(newApple, typeof newApple)

// 2й способ

let apple1 = true;

let newApple1 = apple1 + "";
console.log(newApple1, typeof newApple1)

// БУЛЕВОЕ (логическое) false K СТРОКЕ

let house = false;

let newHouse = String(house);
console.log(newHouse, typeof newHouse)


