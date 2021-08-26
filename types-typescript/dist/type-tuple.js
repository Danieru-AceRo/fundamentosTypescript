"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// [1, 'user']
let user;
user = [1, 'Danieru'];
console.log(user);
console.log(user[1]);
console.log(user[1].length);
console.log(user[0]);
// Tuplas con varios valores
// id, userName, isPro
let userInfo;
userInfo = [2, 'paparazzi', true];
console.log(userInfo);
// Arreglo de Tuplas
let array = [];
array.push([1, 'Daniel']);
array.push([2, 'D']);
array.push([1, 'lensQueen']);
console.log(array);
// Uso de funciones Array
// lensQueen -> lensQueen001
array[2][1] = array[2][1].concat('001');
console.log(array);
