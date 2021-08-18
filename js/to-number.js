////// любое строчное значение К ЧИСЛУ

// 1й способ - через конструктор Number
let value = "bla bla bla";

let toNumber = Number(value);
console.log(toNumber, typeof toNumber)

// 2й способ - через унарный +

let value1 = "bla bla bla";

let newValue1 = +value1;
console.log(newValue1, typeof newValue1)

////// строчное число К ЧИСЛУ

let value2 = "123";

let toNumber2 = Number(value2);
console.log(toNumber2, typeof toNumber2)

////// пустая строка К ЧИСЛУ (приводится к числовому 0)

let value3 = "";

let toNumber3 = Number(value3);
console.log(toNumber3, typeof toNumber3)

////// строка с побелом () не пустая К ЧИСЛУ (приводится к числовому 0)

let value4 = " ";

let toNumber4 = Number(value4);
console.log(toNumber4, typeof toNumber4)

///////////////////////////////////////////////////////////////

// значение undefined К ЧИСЛУ
let apple5 = undefined;

let newApple5 = Number(apple5);
console.log(newApple5, typeof newApple5)

// значение null К ЧИСЛУ
let value5 = null;

let toNumber5 = Number(value5);
console.log(`${value5}, через конструктор Number():`, toNumber5);
console.log(`тип данных ${value5}, через конструктор Number():`, typeof toNumber5);

// БУЛЕВОЕ (логическое) true K ЧИСЛУ

// 1й способ
let apple = true;

let newApple = Number(apple);
console.log(newApple, typeof newApple)

// 2й способ

let apple1 = true;

let newApple1 = apple1 + "";
console.log(newApple1, typeof newApple1)

// БУЛЕВОЕ (логическое) false K ЧИСЛУ

let house = false;

let newHouse = Number(house);
console.log(newHouse, typeof newHouse)