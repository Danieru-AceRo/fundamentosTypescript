"use strict";
// Corchetes
// Tipo Explixito
let users;
users = ['Daniel', 'Acevedo', 'Rodríguez'];
// users = [1, true, 'test']; Error
// Tipo Inferido
let othersUsers = ['Daniel', 'Acevedo', 'Rodríguez'];
// users = [1, true, 'test']; Error
// Array<TIPO>
let pictureTitle;
pictureTitle = ['Favorite Sunset', 'Vacation Time', 'Landscape'];
// accediendo a los valores de un Array
console.log(users[0]);
console.log(pictureTitle[0]);
// Propiedades del array
console.log(users.length);
// Uso de funciones en Arrays
users.push('aPlatziUser');
users.sort();
console.log('users', users);
