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

const cart = {
    items: [],
    getItems() {
        return this.items;
     },
    add(product) { //добавить значение
        this.items.push(product)
     },
    remove(productName) { // найти и удалить продукт
        const { items } = this;

        for (let i = 0; i < items.length; i += 1) {
            const { name } = items[i];
            // const item = this.items[i];
            //// console.log(item);

            if (productName === name) {
                console.log('нашли такой товар: ', productName);
                console.log('индекс i: ', i);


                items.splice(i, 1); //удаляем
                console.log(items);
            }
        }
    },
    clear() {
        this.items = []; // Очистить массив

    },
    countTotalPrice() {
        // console.log(this.items)
        const { item } = this;
        let total = 0;

        for (const { price } of items) {
            // console.log(item);
            total += price;
        }
        return total;
    },
    increaseQuantity(productName) { },
    decreaseQuantity(productName) { },
};

console.log(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'grape', price:70 });
cart.add({ name: 'lemon', price:60 });
cart.add({ name: 'strawberry', price: 110 });

console.table(cart.getItems());

cart.remove('apple');
console.log(cart.getItems())

cart.clear('apple');
console.log(cart.getItems());

console.log('Total: ', cart.countTotalPrice());
