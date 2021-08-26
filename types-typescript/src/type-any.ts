// Tipo explicito
let idUser: any;
idUser = 1; // Number
idUser = '1'; // String
console.log('idUser', idUser);

// Tipo inferido
let otherId;
otherId = 1;
otherId = '1';
console.log('otherId', otherId)

let surprise: any = 'hello typescript';
// surprise.sayHello();
const res = surprise.substring(6); // Error
console.log('res', res) 