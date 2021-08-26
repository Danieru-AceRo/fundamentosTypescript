type SquereSize = '100x100' | '500x500' | '1000x1000';

// usamosTS definimos tipos de par5ametros
function createPicture(title?:string, date?:string, size?: SquereSize) {
    // se crea la fotografía
    console.log('create picture using:', title, date, size);
}

createPicture('My birthday', '2020-03-10', '100x100');
createPicture('My birthday', '2020-03-10');
createPicture('My birthday');
createPicture();

// Flat Array Function
let createPic = (title?:string, date?:string, size?: SquereSize):object => {
    return {title, date, size}
}

const pic = createPic('finde semana DDMD', '19-04-2021', '500x500');
console.log(pic)

// tipo de retorno con TypeScript

function handlError(code:number, message:string): never | string {
    // procesamiento del código, mensaje
    if (message === 'error') {
        throw new Error(`${message}. code Error ${code}`);
        
    } else {
        return 'An error has occurred'
    }
}

try {
    let result = handleError(200, 'OK'); //string
console.log(result);
result = handleError(404, 'error'); //never
console.log(result)
} catch (error) {
    
}