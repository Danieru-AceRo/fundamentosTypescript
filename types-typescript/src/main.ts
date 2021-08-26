console.log('Hello world main');

// Number
// Explicito
let phone: number;
phone = 1;
phone = 7225686958;
// phone = 'hola'; // Error

// Inferido
let phoneNumber = 7225886978;
phoneNumber = 123;
// phoneNumber = true; // Error

let hex: number = 0x00ffff;
let binary: number = 0b1001;
let octal: number = 0o2653261;

// Tipo Boolean
// Explicito
let isPro: boolean;
isPro = true;
// isPro = 5758 // Error

// inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 3434; //Error


// String
// Explicito
let userName: string = 'El Dany'
userName = "Daniel Acevedo";
// userName = false; // Error

// Template String
// Uso de cack-tick `
let userInfo: string;
userInfo = `
    User info:
    userName: ${userName}
    firstName: ${userName + 'Acevedo'}
    phone: ${phoneNumber}
    isPro: ${isPro}
`;

console.log('userInfo', userInfo)