"use strict";
// Null
// Explicito
let nullVariable;
nullVariable = null;
// nullVariable = 0; // error
let otherVariable = null;
otherVariable = 'test';
console.log('nullVariable', nullVariable);
console.log('otherVariable', otherVariable);
// undefined
let undefinedVariable = undefined;
// undefinedVariable = 'test' // error 
let otherUndefined = undefined;
otherUndefined = 1;
console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefined', otherUndefined);
/*
 * tsc --watch src/type-null-undefined.ts --strictNullChecks
 * Podemos ver las lineas del flag --strictNullChecks: para ver el numero de linea del error
 * Archivo tsconfig.json "strictNullChecks": true
 */
let albumName;
// albumName = null;
// albumName = undefined;
