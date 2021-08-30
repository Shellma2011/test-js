// Задачи на основы языка JavaScript //

// ================================================================
// ====== ЗАДАЧИ ====== // Работа с переменными
//1. Создайте переменную num и присвойте ей значение 3. 
//Выведите значение этой переменной на экран с помощью метода alert.

// const num = 3;
// alert(num)

////////////////////////////////////////////////////////////////

//  2. Создайте переменные a=10 и b=2. 
//Выведите на экран их сумму, разность, произведение и частное(результат деления).

// const a = 10;
// const b = 2;
// console.log(a + b, a - b, a * b, a / b);

////////////////////////////////////////////////////////////////

// 3.  Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. 
//Выведите на экран значение переменной result.

// const c = 15;
// const d = 2;

// const result = c + d;
// console.log(result);
// alert(result);

////////////////////////////////////////////////////////////////

// 4.  Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.

// const a = 10;
// const b = 2;
// const c = 5;

// console.log(a + b + c);
// alert(a + b + c);

////////////////////////////////////////////////////////////////

// 5.  Создайте переменные a=17 и b=10. Отнимите от a переменную b и 
//результат присвойте переменной c.Затем создайте переменную d, присвойте ей значение 7. 
//Сложите переменные c и d, а результат запишите в переменную result.
//Выведите на экран значение переменной result.

// const a = 17;
// const b = 10;
// const c = a - b;
// const d = 7;
// const result = c + d;

// console.log(result);
// alert(result);

// ==================================================================================
// ====== ЗАДАЧИ ====== // Работа со строками

// 6. Создайте переменную str и присвойте ей значение 'Привет, Мир!'. 
//Выведите значение этой переменной на экран.

// const str = 'Привет, Мир!';

// console.log(str);
// alert(str);

////////////////////////////////////////////////////////////////

// 7. Создайте переменные str1='Привет, ' и str2='Мир!'. 
//С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'.

// const str1 = 'Привет, ';
// const str2 = 'Мир!';

// console.log(str1 + str2);
// alert(str1+str2);

////////////////////////////////////////////////////////////////

// 8. Создайте переменную name и присвойте ей ваше имя. 
//Выведите на экран фразу 'Привет, %Имя%!'.

// const name = 'Maryna';

// console.log(`Привет, ${name}!`);
// alert(`Привет, ${name}!`);

////////////////////////////////////////////////////////////////

// 9. Создайте переменную age и присвойте ей ваш возраст. 
//Выведите на экран 'Мне %Возраст% лет!'.

// const age = '18';

// console.log(`Мне ${age} лет!`);
// alert(`Мне ${age} лет!`);

////////////////////////////////////////////////////////////////

// ==================================================================================
// ====== ЗАДАЧИ ====== // Функция prompt

// 10. Спросите имя пользователя с помощью методы prompt. 
//Выведите с помощью alert сообщение 'Ваше имя %имя%'.

// let getNameUser = prompt('Назовитесь!');
// alert(`Ваше имя ${getNameUser}`);

////////////////////////////////////////////////////////////////

// 11. Спросите у пользователя число.Выведите с помощью alert квадрат этого числа.

// let getNumber = prompt('Введите число');
// let getPow = prompt('Введите степень');
// let powNamber = Math.pow(getPow, getNumber);

// console.log(powNamber)

// alert(`Квадрат Вашего числа: ${powNamber}`);
 
////////////////////////////////////////////////////////////////

// ==================================================================================
// ====== ЗАДАЧИ ====== // Обращение к символам строки

//12. Создайте переменную str и присвойте ей значение 'abcde'.
//Обращаясь к отдельным символам этой строки выведите на экран символ 'a', 
//символ 'c', символ 'e'.

// const str = 'abcde';

// console.log(str[1], str[3], str[4]);

////////////////////////////////////////////////////////////////

// 13. Создайте переменную num и присвойте ей значение '12345'.
//Найдите произведение(умножение) цифр этого числа.

// const num = '12345';

// console.log(Number(1 * 2 * 3 * 4 * 5));

////////////////////////////////////////////////////////////////

// ==================================================================================
// ====== ЗАДАЧИ ====== // Обращение к символам строки

// 14. Напишите скрипт, который считает количество секунд в часе, 
//в сутках, в месяце.

// let hour = prompt('Введите количество часов');
// let day = prompt('Введите количество дней');
// let month = prompt('Введите количество месяцев');

// alert(`В этом количестве часов: ${hour} - ${hour * 60 * 60} секунд`);
// alert(`В этом количестве дней: ${day} - ${day * 24 * 60 * 60} секунд`);
// alert(`В этом количестве месяцев: ${month} - ${month * 30 * 24 * 60 * 60} секунд`);

////////////////////////////////////////////////////////////////

// 15. Создайте три переменные - час, минута, секунда. 
//С их помощью выведите текущее время в формате 'час:минута:секунда'.

// let hour = prompt('Введите количество часов');
// let minute = prompt('Введите количество минут');
// let second = prompt('Введите количество секунд');

// alert(`Текущее время: ${hour}:${minute}:${second}`);

////////////////////////////////////////////////////////////////

// 16. Создайте переменную, присвойте ей число. Возведите это число в квадрат. 
//Выведите его на экран.

// const num = 2;
// const numPow = Math.pow(2, num);

// console.log(numPow);
// alert(numPow);

////////////////////////////////////////////////////////////////

// ==================================================================================
// ====== ЗАДАЧИ ====== // Работа с присваиванием и декрементами

// 17. Переделайте этот код так, чтобы в нем использовались 
//операции +=, -=, *=, /=. 
//Количество строк кода при этом не должно измениться.

// var num1 = 47;
// num1 = num1 + 7;
// num1 = num1 - 18;
// num1 = num1 * 10;
// num1 = num1 / 15;

// console.log(num1);

//////

// var num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;

// console.log(num);

////////////////////////////////////////////////////////////////

// 18. Переделайте этот код так, чтобы в нем использовались 
//операции++ и--.Количество строк кода при этом не должно измениться.

// var num = 10;
// num = num + 1;
// num = num - 1;
// console.log(num);

//////

// var num1 = 10;
// num1++;
// num1--;
// console.log(num1);

////////////////////////////////////////////////////////////////

