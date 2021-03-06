// const user = {
//     name: 'Sandra',
//     phone: '000 000 00 00',
//     email: 'sandra@gmail.com',
//     pass: '111',
//     configPass: '222'
// }

// console.log('user: ', user);
// console.log({});

// ///////////////////////////////////

// const student = { student: 'active', ...user }
// console.log('student: ', student);

///////////////////////////////////

// СВОЙСТВА И МЕТОДЫ

//// обращение к свойству 
// Через key (имя объекта и через точку название ключа)

// console.log(user.name)
// console.log(user.phone)

///// Через квадратные скобки [key] (имя объекта и в квадратных скобках в ковычках имя ключа])

// console.log(user['name']);
// console.log(user['phone'])

////// добавление свойства с параметром

// user.age = 30;
// // // user['age'] = 30;
// console.log('user: ', user);

////// замена параментра в свойстве

// user.age = 18;
// // user['age'] = 18;
// console.log('user: ', user);

////// удаление свойства 

// delete user.age
// console.log('user: ', user);


////////////////////////////////////////////////////////////
// function creatObject(name, phone, email, pass, confirmPass) {
//     const obj = {
//         name: name,
//         phone: phone,
//         email: email,
//         pass: pass,
//         confirmPass: confirmPass
//     }
//     return obj;
// }
// console.log(creatObject())

////////////////

// function creatObject(name, phone, email, pass, confirmPass) {
//     const obj = {
//         name,
//         phone,
//         email,
//         pass,
//         confirmPass
//     }
//     return obj;
// }
// console.log(creatObject())

////////////////////////////////////////////////////////////////

// вычисляемые свойства (когда имя ключа не известно)

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//     [inputValue]: inputName,
//     [inputName]: inputValue // пойди найди переменную с таким именем inputName и используй ее значение как ключ
// }

// console.log(colorPickerData)

////////////////////////////////////////////////////////////////

// const fn = function () {
//     console.log('hello');
// }

// fn.hello = '---'

// console.dir(fn.hello)

////////////////////////////////////////////////////////////////

// cлева от равно это ЛИТЕРАЛ ОБЬЕКТА

////////////////////////////////////////////////////////////////

// const playlist = {
//     name: 'мой супер плейлист',
//     rating: 5,
//     tracks: ['Трек-1', 'Трек-2', 'Трек-3'],
//     trackCount: 3,
//     getName(a) {
//         console.log("Ага есть getName", a)
//     },
// };

// console.log(playlist);

// playlist.getName(5)

////////////////////////////////////////////////////////////////

// const playlist = {
//     name: 'мой супер плейлист',
//     rating: 5,
//     tracks: ['Трек-1', 'Трек-2', 'Трек-3'],
//     // trackCount: 3,
//     changeName(newName) {
//         console.log('this внутри changeName: ', this);

//         this.name = newName;
//     },
//     addTrack(track) {
//         this.tracks.push(track);
        
//     },
//     updateRating(newRating) {
//         this.rating = newRating;
//     },
//     getTracksCount() {
//         return this.tracks.length;
//     }
// };

// playlist.changeName('новое имя');
// console.log(playlist.getTracksCount());

// playlist.addTrack('1 новый трек');
// playlist.addTrack('2 новый трек');
// console.log(playlist.getTracksCount());

// playlist.addTrack('3 новый трек');
// playlist.addTrack('4 новый трек');
// console.log(playlist.getTracksCount());

// playlist.updateRating(4);
// console.log(playlist);

////////////////////////////////////////////////////////////////

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// }

// const keys = Object.keys(feedback);
// // позволяет получить массив ключей и доступ к этим ключам
// console.log(keys)

// const values = Object.values(feedback);
// // позволяет получить массив значений массива
// console.log(values)

////////////////////////////////////////////////////////////////

// РАБОТА С КОЛЛЕКЦИЕЙ (МАССИВОМ ОБЪЕКТОВ)

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ]
// friends[1].newprop = 555; -- добавится только к элементу с 1м индексом

// console.table(friends);
// for (const friend of friends) {
//     console.log(friend)
//     console.log(friend.name)
//     console.log(friend.online)

//     friend.newprop = 555;
// }

// console.table(friends)

////// ищем друга по имени

// const findFriendsByName = function (allFriends, name) {

//     for (let friend of friends) {
//         // console.log(friend);
//         // console.log(friend.name);

//         if (friend.name === name) {
//             return "сходится!!!";
//         }
//     }

//     return "не таке!!!";
// }

// console.log(findFriendsByName(friends, 'Poly'));
// console.log(findFriendsByName(friends, 'Chelsy'));

////// получаем имена всех друзей

// const getAllNames = function (allFriends) {
//     const names = [];

//     for (let friend of allFriends) {
//         console.log(friend.name)

//         names.push(friend.name)
//     }
//     return names;
// }

// console.log(getAllNames(friends));

////// получаем имена всех друзей которые онлайн

// const getOnline = function (allFriends) {
//     const onlineFriends = []

//     for (let friend of allFriends) {
//         console.log(friend)
//         console.log(friend.online)

//         if (friend.online) {
//             onlineFriends.push(friend)
//         }
//     }
//     return onlineFriends
// }

// console.log(getOnline(friends));

////// получаем имена всех друзей которые онлайн и оффлайн

// const getfriendsByStatus = function (allFriends) {
//     const friendsByStatus = {
//         online: [],
//         offline: [],
//     }

//     for (let friend of allFriends) {
//         if (friend.online) {
//             friendsByStatus.online.push(friend)
//             continue
//         }
//             friendsByStatus.offline.push(friend)
//         }
        
//     return friendsByStatus;
// }
    
// console.log(getfriendsByStatus(friends));

////////////////////////////////////////////////////////////////

//// найти колличество свойств в объекте

// const x = {
//     a: 1,
//     b: 2,
//     c: 50,
//     d: 100
// }

// console.log(Object.keys(x).length)

////////////////////////////////////////////////////////////////

// SPRED (распыление) -- не деструктивный!!! создается копия

// const numbers = [
//     1000, ...[2,3,4], 5000, ...[12,13,14], 7000, 9000]

// console.table(numbers);

////////////////////////////////////////////////////////////////

// поиск самой маленькой и самой большой температури

// const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(temps);
// console.log(Math.max(...temps)); // чтоб сработало нужно распылить
// console.log(Math.min(...temps)); // распаковали отдельными независимыми значениями

// const a = [{ x: 1 }, { y: 2 }, { z: 3 },]; // со сложными объектами не происходит копирование, ставиться ссылка

// const b = [...a]; // в массиве а и в массиве b хранится ссылка на один и тот же объект
// // дословно: в b создался новый массив в который распылился a

// console.log('a: ', a);
// console.log('b: ', b);

// console.log(a[0] === b[0]); // true
// console.log(a === b); // false

// a[0].x = 1000;

// console.log('a: ', a);
// console.log('b: ', b);

////////////////////////////////////////////////////////////////

// сшиваем несколько массивов в один через concat() и spred

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];

// // const xx = lastWeekTemps.concat(currentTemps, nextWeekTemps);

// console.log(allTemps);
// // console.log(xx);

// console.log(lastWeekTemps[0] === allTemps[0]); // true
// console.log(currentTemps[0] === allTemps[3]); // true

////////////////////////////////////////////////////////////////

// распыление объектов
//--Object.prototype.assign() и spred

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// // const b = { x: 1, y: 2, x: 5 };
// // console.log(b); // {x: 5, y: 2}

// const c = Object.assign({}, a, b);
// // Object.assign({}, a, b) -- деструктивный!!! распыление обьекта
// console.log(c); // {x: 0, y: 2, z: 3}

// console.log(...'привет'); // строку тоже можно распылить!!! 
// console.log(...123); // числа НЕЛЬЗЯ распылить!!! 

////////////////////////////////////////////////////////////////

// const a = { x: 20, y: 30 };
// const b = { x: 100, z: 50 };

// const c = { ...a, x: 10, ...b, y: 20 };

// console.log(c);  // {x: 100, y: 20, z: 50}

// // x: 100, y: 20, z: 50

////////////////////////////////////////////////////////////////

// деструктуризация объекта
//-значения по умолчанию
//-имя переменной отличное от имени свойства

//  const playlist = {
//     name: 'мой супер плейлист',
//     rating: 5,
//     tracks: ['Трек-1', 'Трек-2', 'Трек-3'],
//     trackCount: 3,
// };

// const { rating, tracks } = playlist; // слева фигурные скобки - (распаковка) деструктуризация объекта
// !!! имя локальной переменной должно совпадать с именем свойства в объекте

// console.log(rating);
// console.log(tracks);

// если значения нет, но его необходимо указать, указіваем св-во присваеваем его
// если свойство есть но указано через равно, то значение через равно будет проигнорировано
// const { rating, tracks, author = 555 } = playlist;
// console.log(author);

// заменить имя значения
// const { rating, tracks: numberOfTracks, author = 555 } = playlist;
// console.log(numberOfTracks);

//
// const { rating, tracks: numberOfTracks = 3, author = 555 } = playlist;
// console.log(numberOfTracks);
// console.log(tracks); // переназвана, уже не найдет

////////////////////////////////////////////////////////////////

// глубокая деструктуризация 

// const profile = {
//     name: 'Jacjues Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://s3.amazonwars.com.jpg',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const {
//     name,
//     tag,
//     location,
//     avatar,
//     stats: { followers: myFollowers = 5, views, likes }
// } = profile;

// console.log(name, tag, location, avatar, myFollowers, views, likes)

////////////////////////////////////////////////////////////////

//деструктуризация массивов - происходит по порядку

// const rgb = [255, 100, 80];

// const [a, b, c] = rgb; // в значение а запишется 255, в b - 100, в с - 800

// console.log(a, b, c);

//если нужно промустить свойство

// const [red, , blue] = rgb;
// console.log(red, blue);

////////////////////////////////////////////////////////////////
//найти самое большое значение

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// }

// const ratings = Object.values(authors);
// console.log(Math.max(...ratings));

// // или

// const entries = Object.entries(authors); // возвращает массив массивов
// console.log(authors);

// for (const [name, rating] of entries) {
// // for (let entry of entries) {
//     // const [name, rating] = entry;

//     //// const name = entry[0];
//     //// const rating = entry[1];

//     console.log(name, rating);
// }

////////////////////////////////////////////////////////////////

//операция rest (сбор)

// const profile = {
//     name: 'Jacjues Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://s3.amazonwars.com.jpg',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const { name, tag, location, ...restProps } = profile;
// //все что не деструктуризировано явно уходит на restProps

// console.log(name, tag, location);
// console.log(restProps);

////////////////////////////////////////////////////////////////

// паттерн "Объект настроек" -применяется когда 3 и больше аргументов
//-деструктуризация параметра-объекта
//-rest при деструктуризации в подписи

// const showProfileInfo = function (userProfile) { // деструктуризация может біть проведена прямо в теле функции
//     const {
//         name,
//         tag,
//         location,
//         avatar,
//         stats: { followers, views, likes },
//     } = userProfile;

//     console.log(name, tag, location, avatar, followers, views,likes );
// };

//// - или деструктуризацию провести в подписи

// const showProfileInfo = function ({
//     name,
//     tag,
//     location,
//     avatar,
//     stats: { followers, views, likes },
// }) {
//     console.log(name, tag, location, avatar, followers, views,likes );
// }

/////////////////////////////////////////////////////////////////

// const profile = {
//     name: 'Jacjues Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://s3.amazonwars.com.jpg',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// showProfileInfo(profile);

////////////////////////////////////////////////////////////////

// РАБОТА С КОЛЛЕКЦИЕЙ товаров в корзине (МАССИВОМ ОБЪЕКТОВ)
// -getItems()
// -add(products)
// -removeEventListener(productName)
// -clear()
// -countTotalPrice
// -increaseQuantity(productName)
// -decreaseQuantity(productName)

// {name:apple, price:50}
// {name:grape, price:70}
// {name:lemon, price:60}
// {name:Strawberry, price:110}

// const cart = {
//     items: [],
//     getItems() {
//         return this.items;
//      },
//     add(product) { //добавить значение
//         this.items.push(product)
//      },
//     remove(productName) { // найти и удалить продукт
//         const { items } = this;

//         for (let i = 0; i < items.length; i += 1) {
//             const { name } = items[i];
//             // const item = this.items[i];
//             //// console.log(item);

//             if (productName === name) {
//                 console.log('нашли такой товар: ', productName);
//                 console.log('индекс i: ', i);


//                 items.splice(i, 1); //удаляем
//                 console.log(items);
//             }
//         }
//     },
//     clear() {
//         this.items = []; // Очистить массив

//     },
//     countTotalPrice() {
//         // console.log(this.items)
//         const { item } = this;
//         let total = 0;

//         for (const { price } of items) {
//             // console.log(item);
//             total += price;
//         }
//         return total;
//     },
//     increaseQuantity(productName) { },
//     decreaseQuantity(productName) { },
// };

// console.log(cart.getItems());

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'grape', price:70 });
// cart.add({ name: 'lemon', price:60 });
// cart.add({ name: 'strawberry', price: 110 });

// console.table(cart.getItems());

// cart.remove('apple');
// console.log(cart.getItems())

// cart.clear('apple');
// console.log(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

////////////////////////////////////////////////////////////////

// const printMessage = function (message) {
//   console.log(message);
// };

// const higherOrderFunction = function (callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };

// higherOrderFunction(printMessage);

// ////////////////////////////////////////////////////////////////

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

////////////////////////////////////////////////////////////////

// const repeatLog = function (n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// };

// repeatLog(5);

////////////////////////////////////////////////////////////////

// const printValue = function (value) {
//   console.log(value);
// };

// const prettyPrint = function (value) {
//   console.log('Logging value: ', value);
// };

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// // Передаем printValue как callback-функцию
// repeat(5, printValue);
// // 0
// // 1
// // 2

// // Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

////////////////////////////////////////////////////////////////

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// const labels = [];

// repeat(5, value => {
//   labels.push(`Label ${value + 1}`);
// });

// console.log(labels); // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]

////////////////////////////////////////////////////////////////

// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithQuantity); // массив с объектами apples и grapes

////////////////////////////////////////////////////////////////

// const bar = function () {
//   console.log('bar');
// };

// const baz = function () {
//   console.log('baz');
// };

// const foo = function () {
//   console.log('foo');
//   bar();
//   baz();
// };

// foo();

////////////////////////////////////////////////////////////////

// const createCounter = function () {
//   /*
//    * Локальная переменная privateValue доступна только в замыкании.
//    * Получить к ней доступ во внешнем коде невозможно.
//    */
//   let privateValue = 0;

//   const increment = function () {
//     privateValue += 1;
//     console.log(privateValue);
//   };

//   return {
//     increment,
//   };
// };

// const counterA = createCounter();
// counterA.increment(); // 1
// counterA.increment(); // 2

// const counterB = createCounter();
// counterB.increment(); // 1
// counterB.increment(); // 2
// counterB.increment(); // 3

////////////////////////////////////////////////////////////////

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish('Mango', 'apple pie'); // Mango is cooking apple pie
// makeDish('Mango', 'fish'); // Mango is cooking fish
// makeDish('Mango', 'beef stew'); // Mango is cooking beef stew

// makeDish('Poly', 'muffins'); // Poly is cooking muffins
// makeDish('Poly', 'pork chops'); // Poly is cooking pork chops
// makeDish('Poly', 'roast beef'); // Poly is cooking roast beef

////////////////////////////////////////////////////////////////

// const makeShef = function (name) {
//   /*
//    * Параметр name это локальная переменная для функции makeShef.
//    * Это значит что она будет доступна функции makeDish через замыкание.
//    */
//   return function makeDish(dish) {
//     console.log(`${name} is cooking ${dish}`);
//   };
// };

// const mango = makeShef('Mango');
// mango('apple pie'); // Mango is cooking apple pie
// mango('beef stew'); // Mango is cooking beef stew

// const poly = makeShef('Poly');
// poly('pancakes'); // Poly is cooking pancakes
// poly('eggs and bacon'); // Poly is cooking eggs and bacon

////////////////////////////////////////////////////////////////

// const greet = function () {
//   return `Wellcome to ${this.name} hotel!`;
// };

// const hotel = { name: 'Resort Hotel' };

// console.log(greet.call(hotel)); // "Wellcome to Resort Hotel!"
// console.log(greet.apply(hotel)); // "Wellcome to Resort Hotel!"


////////////////////////////////////////////////////////////////

// метод call - требует аргумент

// const greet = function (guest, stars) {
//   return `${guest}, welcome to ${stars}-star ${this.name}!`;
// };

// const hotel = { name: 'Resort Hotel' };
// const motel = { name: 'Sunlight Motel' };

// console.log(greet.call(hotel, 'Mango', 5));
// // "Mango, welcome to 5-star Resort Hotel!"

// console.log(greet.call(motel, 'Poly', 4));
// // "Poly, welcome to 4-star Sunlight Motel!"


////////////////////////////////////////////////////////////////

// метод apply - требует массив

// const greet = function (guest, stars) {
//   return `${guest}, welcome to ${stars}-star ${this.name}!`;
// };

// const hotel = { name: 'Resort Hotel' };
// const motel = { name: 'Sunlight Motel' };

// console.log(greet.apply(hotel, ['Mango', 5]));
// // "Mango, welcome to 5-star Resort Hotel!"

// console.log(greet.apply(motel, ['Poly', 4]));
// // "Poly, welcome to 4-star Sunlight Motel!"


////////////////////////////////////////////////////////////////

// метод bind -  создает копию функции с привязанным контекстом obj и аргументами arg1,

// const hotel = {
//   name: 'Resort Hotel',
//   showThis() {
//     console.log(this);
//   },
// };

// const fn = function (callback) {
//   callback();
// };

// // Передаем копию метода showThis с контекстом привязанным к hotel
// fn(hotel.showThis.bind(hotel)); // {name: "Resort Hotel", showThis: ƒ}

////////////////////////////////////////////////////////////////

// const fnA = function (message, callback) { // передалась в const fnA = function (message, СALLBACK) {
//     console.log(message);

//     console.log(callback); // происходит вызов функции fnB
//     callback(200);
// };

// const fnB = function (number) { // обьявили функцию и кинули как аргумент ссылкой записалась в fnA('qwert', fnB);
//     console.log('Этот лог при вызове fnB', number);
// };

// fnA('qwert', fnB); // передалась в const fnA = function (message, СALLBACK) {

////////////////////////////////////////////////////////////////


// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// }
// const add = function (x, y) {
//     return x + y;
// }

// const sub = function (x, y) {
//     return x - y;
// }

// doMath(5, 3, add);
// doMath(8, 4, sub);
// 1. обьявили const add = function (x, y) { и передали в doMath(2, 3, add); ADD
// 2. ADD передалось и записалось в const doMath = function (a, b, callback) { СALLBACK
// 3. вызвали СALLBACK в const result = callback(a, b);
// 4. doMath(2, 3, add); 2 и 3 записалось в a и b const doMath = function (a, b, callback) {
// 5. после чего они передались  соответственно в x и y в const add = function (x, y) {
// 6. когда срабатывает return x + y; значение отображается в console.log(result);


////////////////////////////////////////////////////////////////


// литерал функции - короткая запись - ананимная функция - инлайн
// если во внешнем коде не нужна, не нужно переиспользование (одноразовая)
// не нужно вводить функцию, как переиспользуемую переменную

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// }

// doMath(5, 3, function (x, y) {
//     return x + y;
// });
// doMath(8, 4, function (x, y) {
//     return x - y;
// });


////////////////////////////////////////////////////////////////

// const buttonRef = document.querySelector('.js-button');

// const handleBtnClick = function () {
//     console.log('клик по кнопке');
// };

// buttonRef.addEventListener('click', handleBtnClick);

// 1. этот кусок кода
// const handleBtnClick = function () {
//     console.log('клик по кнопке');
// };
// выполнить тогда, когда произойдет клик по кнопке

//////// сделать регистрацию отложенного события можно только если завернуть его в функцию и зарегистрировать его как коллбэк


////////////////////////////////////////////////////////////////

// фильтр

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

// ////////////////////////////////////////////////////////////////

//     const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const getFruitsWithQuantity = function (fruit) {
//     return fruit.quantity >= 120;
// }

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);

////////////////////////////////////////////////////////////////

// замыкание

// const fnA = function (parameter) {
//     const innerVariable = 'значение внутренней переменной функции fnA';

//     const innerFunction = function () {
//         console.log(parameter);
//         console.log(innerVariable);
//         console.log("это вызов innerFunction");
//     };
//     return innerFunction;
// };

// const fnB = fnA(555);

// fnB();

// console.log(fnB);

////////////////////////////////////////////////////////////////

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish('Mango', 'пирожок'); 
// makeDish('Mango', 'омлет'); 
// makeDish('Mango', 'чай'); 

// makeDish('Poly', 'котлеты'); 
// makeDish('Poly', 'супик'); 
// makeDish('Poly', 'кофе'); 

// const makeShef = function (name) {
//     const makeDish = function (dish) {
//         console.log(`${name} готовит ${dish}`);
//     }
//     return makeDish;
// };

// const mango = makeShef('Mango');
// // console.log('mango')
// mango('котлеты'); 
// mango('пирожок'); 

// const poly = makeShef('Poly');
// poly('омлет'); 
// poly('чай'); 

////////////////////////////////////////////////////////////////

//округлятор

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint); //без точек
// const withDecimals = Number(floatingPoint.toFixed(2)); //до двух после запятой
// // console.log(Number(floatingPoint.toFixed(3)));
// // console.log(Number(floatingPoint.toFixed(4)));

// // const number1 = 3.6678;
// // const number2 = 4.1234;

// // console.log(Number(number1.toFixed(3)));
// // console.log(Number(number2.toFixed(4)));

// // const rounder = function (number, places) {
// //   return Number(number.toFixed(places));
// // }

// // console.log(rounder(3.4567, 2));
// // console.log(rounder(3.4567, 4));
// // console.log(rounder(5.1234, 1));
// // console.log(rounder(5.1234, 3));

// const rounder = function (places) {
//   return function (number) {
//     return Number(number.toFixed(places));
//   };
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(3.4567));
// console.log(rounder3(3.456789789654));
// console.log(rounder2(5.123));
// console.log(rounder3(5.1234));

////////////////////////////////////////////////////////////////

// стрелочные функции

// const add = function (a, b, c) {
//   console.log(a, b, c);
//   return a + b + c;
// };

// console.log(add(5, 10, 15));

// //

// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// }

// console.log(add(5, 10, 15));

//1.если два и больше параметров () обязательно
//2.если параметр один - () не обязательно
//3.если параметра нет - обязательно пустые ()
//4.если после условия будет только возврат одного выражения - 
    //можно сократить и записать(не явный возврат) не указывая тело(упустить {})
//5.у стрелочной функции нет локальной переменной arguments, решение - расылить 
//const addArrow=(...args)=>{
//   console.log(args)
// };

////////////////////////////////////////////////////////////////

// const fnA = function (){
//   return { a: 5, };
// }

// console.log(fnA());

////
// const arrowFnA=()=>{
// return { arrowA: 5, };
// }
// console.log(arrowFnA());

//// 
// const arrowFnA = () => ({ arrowA: 5, });
// console.log(arrowFnA());




// let arr = [23, 100, -34, 5, 50, 34, -200, -600, -5];
// let min = arr[0];

// for (let item of arr) {
//     if (item < min) {
//       min = item;
//       continue;
//     }
// }
// console.log(min);

////////////////////////////////////////////////////////////////

// const fn = function () {
//     console.log('fn->this', this);
// }

// fn(); // undefined

////////////////////////////////////////////////////////////////

// const book = {
//     title: 'React for beginners',
//     showThis() {
//         console.log('showThis->this', this);
//     },
//     showTitle() {
//         console.log('showTitle->this.title', this.title);
//     },
// }

// book.showThis();

////////////////////////////////////////////////////////////////

// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
// };

// const hotel = new Hotel('Resort Hotel', 5, 100);
// console.log(hotel);
// // Hotel {name: "Resort Hotel", stars: 5, capacity: 100}

// const motel = new Hotel('Sunlight Motel', 4, 300);
// console.log(motel);
// // Hotel {name: "Sunlight Motel", stars: 4, capacity: 300}

////////////////////////////////////////////////////////////////

// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
//   this.guestCount = 0;

//   this.greet = function (guestName) {
//     console.log(`Hello ${guestName}, wellcome to ${this.name}`);
//   };

//   this.addGuests = function (amount) {
//     this.guestCount += amount;
//   };

//   this.removeGuests = function (amount) {
//     this.guestCount -= amount;
//   };
// };

// const hotel = new Hotel('Sunrise Hotel', 5, 100);

// console.log(hotel);
// // Hotel {name: "Sunrise Hotel", greet: ƒ, addGuests: f, removeGuests: f}
// hotel.greet('Mango'); // Hello Mango, wellcome to Sunrise Hotel
// hotel.addGuests(50);
// hotel.removeGuests(50);

////////////////////////////////////////////////////////////////

// const mango = {
//   name: 'Mango',
//   sales: 5,
//   sell(product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   },
// };

// console.log(mango.sales); // 5
// console.log(mango.sell('TV')); // Manager Mango sold TV
// console.log(mango.sell('Microwave')); // Manager Mango sold Microwave
// console.log(mango.sales); // 7

// const poly = {
//   name: 'Poly',
//   sales: 10,
//   sell(product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   },
// };

// console.log(poly.sales); // 10
// console.log(poly.sell('TV')); // Manager Poly sold TV
// console.log(poly.sell('Microwave')); // Manager Poly sold Microwave
// console.log(poly.sales); // 12

////////////////////////////////////////////////////////////////

// const Manager = function (name = 'manager', sales = 0) {
//   this.name = name;
//   this.sales = sales;

//   this.sell = function (product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   };
// };

// const mango = new Manager('Mango', 5);
// console.log(mango.sales); // 5
// console.log(mango.sell('TV')); // Manager Mango sold TV
// console.log(mango.sell('Microwave')); // Manager Mango sold Microwave
// console.log(mango.sales); // 7

// const poly = new Manager('Poly', 10);
// console.log(poly.sales); // 10
// console.log(poly.sell('TV')); // Manager Poly sold TV
// console.log(poly.sell('Microwave')); // Manager Poly sold Microwave
// console.log(poly.sales); // 12

////////////////////////////////////////////////////////////////

// const objC = {
//     z: 5,
// };
// console.log('objC', objC);

// const objB = Object.create(objC);
// objB.y = 2;
// console.log('objB', objB);
// // console.log(objB.y);
// // console.log(objB.z);

// const objA = Object.create(objB);
// objA.x = 1;
// console.log('objA', objA);

// objA.z = 1000;
// console.log(objA.z);


// console.log(objA.hasOwnProperty('y')); // false/true - проверить собственное св-во или св-во прототипа 

// console.log(objA.erytewtywse); // undefined - т.к. нет такого св-ва во всей цепочке

// console.log(objC.hasOwnProperty('z'));

////////////////////////////////////////////////////////////////

// const Car = function (value) {
//     console.log(this);

//     this.a = value;
// };

// const myCar = new Car(5);
// console.log(myCar);

// const myCar2 = new Car(10);
// console.log(myCar2);

////////////////////////////////////////////////////////////////

// const Car = function ({ brand, model, price } = {}) {
//     // console.log(config);
//     // const { brand, model, price } = config;

//     // this.brand = config.brand;
//     // this.model = config.model;
//     // this.price = config.price;

//     this.brand = brand;
//     this.model = model;
//     this.price = price;

//     this.changePrice = function (newPrice) {
//         this.price = newPrice;
//     };
// };

// const myCar = new Car({
//     brand: 'Audi',
//     model: 'Q3',
//     price: '35000',
// });
// console.log(myCar);

// myCar.changePrice(30000);

// const myCar2 = new Car({
//     brand: 'BMW',
//     model: 'X6',
//     price: '50000',
// });
// console.log(myCar2);

////////////////////////////////////////////////////////////////

// const User = function ({ email, password } = {}) {
//     this.email = email;
//     this.password = password;
// };

// User.prototype.changeEmail = function (newMail) {
//     this.email = newMail;
// };

// const mango = new User({ email: 'mango@gmail.com', password: 111111 });

// mango.changeEmail('qwerty@gmail.com');
// console.log(mango);

////////////////////////////////////////////////////////////////

//==============================================================//

// 1. У каждого объекта есть св-во __proto__
// 2. В этом  св-ве лежит ссылка на его ПРОТОТИП, т.е. другой объект
// 3. При создании литерала объекта, в св-ве __proto__ записывается ссылка 
//на Функцияю.prototype

// const objA = {
//     x: 5,
// };

// console.log(objA.__proto__ === Object.prototype);

// 4. Функция-конструктор это просто функция
// 5. Всю магию делает new
// 6. Если функция вызывается через new, создается пустой объект где-то в памяти
// 7. Функция вызывается в контексте созданного нового объекта
// 8. В св-во this.__proto__ записывается ссылка на объект Функцияю.prototype
        // this = Object.create(User.prototype)
// 9. Ссылка на объект возвращается в место вызова new Функция()

//==============================================================//

/////////////////////////// ПЕРЕСМОТРЕТЬ!!! /////////////////////////////////////

// const CounterPlugin = function ({
//     rootSelector,
//     initialValue = 0,
//     step = 1,
// } = {}) {
//     // this.rootSelector = rootSelector;
//     this.value = initialValue;
//     this.step = step;

//     this.refs = this._getRefs(rootSelector);

//     this._bindEvents();
// };

// CounterPlugin.prototype._getRefs = function (rootSelector) {
//     // console.log(rootSelector);

//     const refs = {};
//     refs.container = document.querySelector(rootSelector);
//     refs.incrementBtn = refs.container.querySelector(['data-increment']);
//     refs.decrementBtn = refs.container.querySelector(['data-decrement']);
//     refs.value = refs.container.querySelector(['data-value']);

//     return refs;
// };

// CounterPlugin.prototype._bindEvents = function () {
//     console.log('CounterPlugin.prototype._bindEvents->this', this);
//     this._getRefs.incrementBtn.addEventListener('click', () => {
//         this.increment();
//         this.updateValueUI();
//     });

//     this._getRefs.decrementBtn.addEventListener('click', () => {
//         console.log('CounterPlugin.prototype._bindEvents->this', this);
//         this.decrement();
//         this.updateValueUI();
//     });
// };

// CounterPlugin.prototype.updateValueUI = function () {
//     this._refs.value.textContent = this._value;
// }

// CounterPlugin.prototype.increment = function () {
//     this.value += this.step;
// };

// CounterPlugin.prototype.decrement = function () {
//     this.value -= this.step;
// }

// const counter1 = new CounterPlugin({rootSelector: '#counter-1', step: 10 });
// // console.log("counter1: ", counter1);


// const counter2 = new CounterPlugin({rootSelector: '#counter-2', step: 2 });
// // console.log("counter2: ", counter2);

/////////////////////////class///////////////////////////////////////

// class Car1 {
//     static description = 'Класс описывающий автомобиль';

//     static logInfo(carObj) {
//         console.log('Car.logInfo -> carObj', carObj);
//     }

//     constructor({brand, model, price }) {
//         console.log('Выполняется конструктор');
//         console.log(this);

//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }

//     changePrice(newPrice) {
//         this.price = newPrice;
//     }

//     updateModal(newModal) {
//         this.model = newModal;
//     }
// }

// console.dir(Car1);

// console.dir(Car1.description);

// const carInstance = new Car1({
//     brand: 'Audi',
//     model: 'Q3',
//     price: '35000',
// });

// console.log(Object.getPrototypeOf(carInstance) === Car1.prototype);
// console.log(carInstance);

// Car1.logInfo(carInstance)

//=======================================================================//

////////////////////////////////////////////////////////////////

/////// Array.prototype.forEach()

//array.forEach(callback[currentValue, index, array])
// -Перебирает
// -Может изменять
// -Не возвращает

//-----------

// const numbers = [1, 2, 3];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// // }

// // Функциональный forEach
// numbers.forEach(num => console.log(num));

// // // Указываем параметр idx если нужен доступ к счетчику
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

//-----------

// const numbers = [5, 10, 15, 20, 25];
// numbers.forEach(function (number, index, array) {
//     console.log('number', number);
// });

////////////////////////////////////////////////////////////////

/////// Array.prototype.map()

//array.map(callback[currentValue, index, array])
// -Используется для трансформации массива
// -Перебирает
// -Не изменяет
// -Возвращает коллекцию

//-----------

// const numbers = [1, 2, 3];

// const doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers); // [2, 4, 6]

//--Используем map чтобы пройти по базе данных users и 
//получить массив всех имен пользователей.

// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
// ];

// // Для каждого элемента коллекции (user) вернем значение поля name
// const names = users.map(user => user.name);

// console.log(names); // ["Mango", "Poly", "Ajax"]

//-----------

// const users = [
//   { id: '000', name: 'Mango', points: 54, isActive: true },
//   { id: '001', name: 'Poly', points: 30, isActive: false },
//   { id: '002', name: 'Ajax', points: 24, isActive: true },
//   { id: '003', name: 'Chelsey', points: 84, isActive: false },
// ];
// console.table(users)

// const userNames = users.map(user => user.name);
// console.log('userNames', userNames);

// const userId = users.map(user => user.id);
// console.log('userId', userId);

// const upatedUsers = users.map(user => ({
//     ...user,
//     points: user.points * 1.1,
// }));
// console.log('upatedUsers', upatedUsers);

// const userIdUpdate = '002';

// const updatedUsers = users.map(user => {
//     console.log(user.id);
//     if (userIdUpdate === user.id) {
//         console.log('Нашли того кого надо');

//         return 'это будет обновленный объект!!!!!!!!!'
//     }
//     return user;
// });

////// или ///через тарнарник//

// const updatedUsers = users.map(user => 
//     userIdUpdate === user.id
//     ? {
//         ...user,
//         points: user.points +100,
//     }
//     : user,
//     );

// console.table(updatedUsers);

////////////////////////////////////////////////////////////////

/////// Array.prototype.filter()

//array.filter(callback[currentValue, index, array])
// -Используется для фильтрации массива
// -Перебирает
// -Не изменяет
// -Возвращает коллекцию

//----------- Используем filter, чтобы пройти по базе данных users 
//и выбрать активных и неактивных пользователей по значению свойства isActive.

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(numbers.filter(num => num > 5)); // [6, 7, 8, 9]

// console.log(numbers.filter(num => num < 5)); // [0, 1, 2, 3, 4]

// console.log(numbers.filter(num => num === 5)); // [5]

//-----------

// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
//   { name: 'Chelsey', isActive: false },
// ];

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно true, то текущий элемент (user) будет записан в результирующий массив.
// const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно false, то текущий элемент (user) будет записан в результирующий массив.
// const inactiveUsers = users.filter(user => !user.isActive);
// console.log(inactiveUsers);

////////////////////////////////////////////////////////////////

/////// Array.prototype.find()

//array.find(callback[currentValue, index, array])
// -Используется для поиска уникального элемента массива
// -Перебирает
// -Не изменяет
// -Возвращает элемент

//-----------

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(numbers.find(num => num > 5)); // 6

// console.log(numbers.find(num => num < 5)); // 0

// console.log(numbers.find(num => num === 5)); // 5

//------- Используем find, чтобы пройти по базе данных users 
//и найти пользователя по идентификатору id.Идентификаторы всегда уникальны.

// const users = [
//   { id: '000', name: 'Mango', isActive: true },
//   { id: '001', name: 'Poly', isActive: false },
//   { id: '002', name: 'Ajax', isActive: true },
//   { id: '003', name: 'Chelsey', isActive: false },
// ];

// Для каждого элемента коллекции (user) проверим поле id.
// Если оно совпадает с искомым идентификатором, то find прекратит
// выполнение и вернет текущий элемент (user) как результат выполнения
// const user = users.find(user => user.id === '002');
// console.log(user);

// // Создадим функцию которая будет возвращать нам пользователя по id
// const getUserById = (arr, id) => arr.find(x => x.id === id);

// console.log(getUserById(users, '001'));
// console.log(getUserById(users, '003'));

////////////////////////////////////////////////////////////////

/////// Array.prototype.every() и Array.prototype.some()

//array.some(callback[(currentValue, index, array)]);
// -Перебирает
// -Не изменяет
// -Возвращает true или false

// Функция которая проверяет величину значения, возвращает true или false.
// const isBigEnough = val => val >= 10;

// // Допустим нам нужно узнать достаточно ли большие ВСЕ числа в коллекции.
// // Все что нам нужно это буль true/false. Метод every вернет true только тогда,
// // когда все элементы коллекции будут удовлетворять условию в callback-функции.

// console.log([12, 5, 8, 130, 44].every(isBigEnough)); // false
// console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true

// // Допустим нам нужно узнать ЕСТЬ ЛИ в коллекции числа больше 10, хотя бы одно
// // или больше. Все что нам нужно это буль true/false. Метод some вернет true
// // только тогда, когда хотябы 1 или более элементов коллекции будут
// // удовлетворять условию в callback-функции.

// console.log([2, 5, 8, 1, 4].some(isBigEnough)); // false
// console.log([12, 5, 8, 1, 4].some(isBigEnough)); // true

//--------

//--Давайте еще пример. Есть массив объектов фруктов, 
//необходимо узнать все ли фрукты есть в наличии и есть ли в наличии хоть какие - 
//то фрукты более 0 штук.

// const fruits = [
//   { name: 'apples', amount: 100 },
//   { name: 'bananas', amount: 0 },
//   { name: 'grapes', amount: 50 },
// ];

// // every вернет true только если всех фруктов будет больше чем 0 штук
// const allAvailable = fruits.every(fruit => fruit.amount > 0); // false

// // some вернет true если хотябы одного фрукта будет больше чем 0 штук
// const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true

/////// Array.prototype.reduce()

// -Перебирает
// -Не изменяет
// -Возвращает что угодно

//array.reduce(сallback[(previousValue, currentItem, index, array)], initialValue)
//-previousValue — промежуточный результат (аккумулятор)
//-currentItem — текущий элемент массива
//-index — индекс текущего элемента массива
//-array — оригинальный массив

// Работает это так:

// Функция reduce создаст новую переменную, называемую аккумулятор. Затем присвоит аккумулятору значение текущего (первого) элемента массива currentItem.
// Функция проверит, есть ли у массива следующий элемент и если он есть, то добавит значение к аккумулятору. Когда следующего элемента не окажется (конец массива), функция вернет значения аккумулятора.
// Вторым аргументом reduce может быть начальное значение initialValue. Это значение будет присвоено аккумулятору до применения callback-функции к первому элементу массива.
// const numbers = [1, 2, 3, 4, 5];

// const summ = numbers.reduce((acc, value) => acc + value, 0);

// console.log(summ); // 15

//----//Допустим у нас есть следующая задача: 
//из массива постов твиттера отдельного пользователя необходимо 
//посчитать сумму всех лайков.Можно перебрать циклом for или forEach, 
//каждое из этих решений потребует дополнительного кода.А можно использовать reduce.

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// // Пройдем по всем элементам коллекции и прибавим значения свойства likes
// // к аккумулятору, начальное значение которого укажем 0.
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(likes); // 32

// Наверное подсчет лайков не одиночная операция, поэтому напишем функцию
// для подсчета лайков из коллекции
// const countLikes = tweets =>
//   tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(countLikes(tweets)); // 32

//----

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// // Пройдем по всем элементам коллекции и добавим значения свойства tags
// // к аккумулятору, начальное значение которого укажем пустым массивом [].
// // На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// // Наверное сбор тегов не одиночная операция, поэтому напишем функцию
// // для сбора тегов из коллекции
// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));

//----

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// // Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// // Это стандартная практика если callback-функция довольно большая.

// // Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// // то создаем его и записывает ему значение 0.
// // В противном случае увеличиваем значение на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Начальное значение аккумулятора это пустой объект {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

/////// Array.prototype.sort() ДЕСТРУКТИВНЫЙ!!!!!!!!!!

// -Перебирает
// -Изменяет
// -Возвращает коллекцию

// const numbers = [2, 1, 4, 3, 5];
// // Отсортирует по возрастанию
// console.log('Before sort: ', numbers); // [2, 1, 4, 3, 5]
// console.log('After sort: ', numbers.sort()); // [1, 2, 3, 4, 5]

// const clients = ['Mango', 'Ajax', 'Poly', 'Chelsey'];

// // Отсортирует по алфавиту
// console.log('Before sort: ', clients); // ["Mango", "Ajax", "Poly", "Chelsey"]
// console.log('After sort: ', clients.sort()); // ["Ajax", "Chelsey", "Mango", "Poly"]

///////------Свой порядок сортировки-----------------------------------------------------------------

// const users = [
//   { name: 'Mango', daysActive: 15 },
//   { name: 'Poly', daysActive: 4 },
//   { name: 'Ajax', daysActive: 27 },
//   { name: 'Chelsey', daysActive: 2 },
// ];

// const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;

// console.log(users.sort(sortByActiveDays));

///////------Цепочки методов массива-----------------------------------------------------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const even = numbers.filter(x => x % 2 === 0);

// const doubled = even.map(x => x * 2);

// const reversed = doubled.reverse();

// console.log(reversed);

//-----------

//---Функциональные методы массива можно группировать в
//цепочки.Каждый следующий метод будет выполняться на результате работы предыдущего.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// /*
//  * Фильтруем четные числа. Далее, на результате метода filter,
//  * вызываем map и множим на 2. После чего на результате
//  * метода map вызываем reverse.
//  */

// const result = numbers
//   .filter(x => x % 2 === 0)
//   .map(y => y * 2)
//   .reverse();

// console.log(result);

///////////////////-------------

// const numbers = [1, 9, 6, 2, 3];
// console.log('numbers', numbers);

// const letters = ['b', 'B', 'a', 'A'];

// numbers.sort((curEl, nexEl) => {
//     // return curEl - nexEl;
//     return nexEl - curEl;
// });
// console.log(numbers);

// /// делаем копию массива, т.к. оригинал трогать плохой тон
// // const copy = [...numbers];
// const ascSortNumbers = [...numbers].sort();
// const descscSortNumbers = [...numbers].sort((a, b) => b - a);
// console.log(ascSortNumbers);
// console.log(descscSortNumbers);

///////////////////////////////////////////////////////////////////////////////////////////

// const players = [
//   { id: 'Player-1', name: 'Mango', timePlayed: 310, isActive: false },
//   { id: 'Player-2', name: 'Poly',  timePlayed: 470, isActive: true },
//   { id: 'Player-3', name: 'Kiwi',  timePlayed: 230, isActive: true },
//   { id: 'Player-4', name: 'Ajax', timePlayed: 80, isActive: false },
//   { id: 'Player-5', name: 'Chelsey', timePlayed: 150, isActive: true },
// ];

// const sortedByBestPlayers = [...players].sort((prevPlayer, nextPlayer) => {
//     return prevPlayer.timePlayed - nextPlayer.timePlayed;
// });
// console.table(sortedByBestPlayers);

// const byName = [...players].sort((a, b) => {
//     return a.name[0] > b.name[0];
// });
// console.table(byName);

////// array.flat() ////////////////////////////////////////////////////////////////////

// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array.flat()); // по умолчанию глубина разглаживания 1
// console.log(array.flat(3)); // разгладило все

///////tweets.flatMap(t => t.tags)///----------
// вместо распыления можно разгладить (если вложенность массива максимум 1)

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const tags = tweets.flatMap(t => t.tags);
// console.log(tags);

/////////// цепочки - cheining /////////////////////////////////////////////////////////////////////

// const numbers = [1, 9, 6, 2, 3];

// // const greaterThenTwo = numbers.filter(num => num > 2);
// // console.log(greaterThenTwo);

// // const multByThree = greaterThenTwo.map(function (num) {
// //     return num * 3;
// // });
// // console.log(multByThree)

// // const sorted = multByThree.sort(function (a, b) {
// //     return a - b;
// // });
// // console.log(sorted)

// //--

// const sorted = numbers
//     .filter(num => num > 2)
//     .map(num => num * 3)
//     .sort((a, b) => a - b);
// console.log(sorted) // коротко записать цепочкой, аналог того что выше

///////////LODASH--библиотека методов//////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
// ];

// const inAscendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = [...students].sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

// console.table(inAscendingScoreOrder)
// console.table(inDescendingScoreOrder)
// console.table(inAlphabeticalOrder)

///////////////////////////////////////////////////////////////////////////////////////////

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//     firstBook.author.localeCompare(secondBook.author))
  
// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
//     secondBook.author.localeCompare(firstBook.author))

// const sortedByAscendingRating = [...books].sort(
//     (firstBook, secondBook) => firstBook.rating - secondBook.rating);

// const sortedByDescentingRating = [...books].sort(
//     (firstBook, secondBook) => secondBook.rating - firstBook.rating);

// console.table(sortedByAuthorName);
// console.table(sortedByReversedAuthorName);
// console.table(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

///////////////////////////////////////////////////////////////////////////////////////////

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]

// const sortByDescendingFriendCount = [...users].sort((firstUser, secondUser) => {
//   return secondUser.friends.length - firstUser.friends.length
// });

// console.table(sortByDescendingFriendCount)


///////////////////////////////////////////////////////////////////////////////////////////

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]

// const sortByName = [...users].sort((firstName, secondName) => {
//   return firstName.name.localeCompare(secondName.name)
// });

// console.table(sortByName)

///////////////////////////////////////////////////////////////////////////////////////////

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = books
//     .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
// .sort((a, b) => a.localeCompare(b));
  
//     console.table(names)

///////////////////////////////////////////////////////////////////////////////////////////

// const users = [
//    {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]

// const getNamesSortedByFriendCount = users => {[...users].sort((firstUser, secondUser) => {
//   return secondUser.friends.length - firstUser.friends.length
// });
   
// };

// const sortByDescendingFriendCount = [...users].sort((firstUser, secondUser) => {
//   return secondUser.friends.length - firstUser.friends.length
// });

// console.log(sortByDescendingFriendCount)

///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]

// console.table(users)

// //---

// const getSortedFriends = users => {
//     return [...users], 
          
//     	users.flatMap(user => user.friends)
  
//     	.filter((friends, idx, a) => 
//             a.indexOf(friends) === idx
//         )
        
//       	.sort((a, b) => a.localeCompare(b))
   
// };

// console.log(getSortedFriends)

///////////////////////////////////////////////////////////////////////////////////////////
//Дополни функцию getSortedFriends(users) так, 
//чтобы она возвращала массив уникальных имён друзей(свойство friends) 
//отсортированный по алфавиту.
///////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////
// const newUsers = [...users];
// console.table(newUsers);

// const flatMapArray = newUsers.flatMap(user => user.friends);
// console.log(flatMapArray);

// const filterArray = flatMapArray.filter((friends, idx, a) => {
//     return a.indexOf(friends) === idx
// });
// console.log(filterArray);

// const sortArray = filterArray.sort((a, b) => a.localeCompare(b))
// console.log(sortArray);

//------

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]

// console.table(users)

///////////////////////////////////////////////////////////////////////////////////////////
// Дополни функцию getTotalBalanceByGender(users, gender) так, 
//чтобы она возвращала общий баланс пользователей(свойство balance), 
//пол которых(свойство gender) совпадает со значением параметра gender.
///////////////////////////////////////////////////////////////////////////////////////////
// const newUsers = [...users];
// console.table(newUsers);

// const flatMapArray = newUsers.flatMap(user => user.friends);
// console.log(flatMapArray);

// const filterArray = flatMapArray.filter((friends, idx, a) => {
//     return a.indexOf(friends) === idx
// });
// console.log(filterArray);

// const sortArray = filterArray.sort((a, b) => a.localeCompare(b))
// console.log(sortArray);

// const getTotalBalanceByGender = (users, gender) => {
   
// };

// return [...users], users
//     .filter(user => user.gender === gender)
//     .reduce((totalBalance, user) => totalBalance + user.balance, 0);
// console.log(users)


//--------------------------------------------
// const newUsers = [...users]

// const filterMaleArray = newUsers
//     .filter(user => user.gender === 'male')
//     .reduce((totalBalance, mailGen) => totalBalance + mailGen.balance, 0);
// console.log(filterMaleArray);
// //--
// const filterFemaleArray = newUsers
//     .filter(user => user.gender === 'female')
//     .reduce((totalBalance, femalGen) => totalBalance + femalGen.balance, 0);
// console.log(filterFemaleArray);
// //--
