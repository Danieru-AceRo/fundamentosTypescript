export {};
// <tipo> // angle bracket syntax
let userName:any;
userName = 'Dani';

// tenemos una cadena, TS confia en mí
let message: string = (<string>userName).length > 5 ?
        `Welcome ${userName}` :
        `${userName} is too short. try again`;

console.log(message)

let userNameWithId:any = 'danieru 1'
// cómo obtener el user name
userName = (<string>userNameWithId).substring(0,7)
console.log(userName);

// Sintaxis "as"
message = (userName as string).length > 5 ?
        `Welcome ${userName}` :
        `${userName} is too short. try again`;

let helloUser: any;
helloUser = 'hello world';
userName = (helloUser as string).substring(6);
console.log(userName);