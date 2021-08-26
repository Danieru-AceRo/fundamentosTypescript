"use strict";
// Object
let user;
user = {}; // Object
user = {
    id: 1,
    userName: 'Paparatzi',
    firstName: 'Daniel',
    isPro: true
};
console.log('user', user);
//  Object vs object (Clase JS vs tipo TS)
const myObj = {
    id: 1,
    userName: 'Paparatzi',
    firstName: 'Daniel',
    isPro: true
};
const isInstance = myObj instanceof Object; // clase Object JavaScript
console.log(isInstance);
console.log('user.username', myObj.userName);
