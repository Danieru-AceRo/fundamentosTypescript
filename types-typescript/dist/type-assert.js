"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <tipo> // angle bracket syntax
let userName;
userName = 'Dani';
// tenemos una cadena, TS confia en mí
let message = userName.length > 5 ?
    `Welcome ${userName}` :
    `${userName} is too short. try again`;
console.log(message);
let userNameWithId = 'danieru 1';
// cómo obtener el user name
userName = userNameWithId.substring(0, 7);
console.log(userName);
// Sintaxis "as"
message = userName.length > 5 ?
    `Welcome ${userName}` :
    `${userName} is too short. try again`;
let helloUser;
helloUser = 'hello world';
userName = helloUser.substring(6);
console.log(userName);
