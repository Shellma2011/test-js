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
    getItems() { },
    add(products) { },
    removeEventListener(productName) { },
    clear() { },
    countTotalPrice() { },
    increaseQuantity(productName) { },
    decreaseQuantity(productName) { },
};

console.table(cart.getItems());

cart.add({ name: apple, price: 50 });
cart.add({ name:grape, price:70 });
cart.add({ name:lemon, price:60 });
cart.add({ name: strawberry, price: 110 });

console.table(cart.getItems());
