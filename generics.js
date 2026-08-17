"use strict";
// Basis Generic Syntax
// function getVale<T>(value:T):T{
//     return value;
// }
// let namre=getVale<string>("Moazzem");
// let age=getVale<number>(21);
// console.log(namre)
// console.log(age)
function getValue(value) {
    return value;
}
let namem = getValue("Moazzem");
let age = getValue(19);
let ispase = getValue(true);
console.log(namem);
console.log(age);
console.log(ispase);
function getArray(items) {
    return items;
}
let numbers = getArray([1, 2, 3, 4, 4]);
let frinds = getArray(["Ali", "Rahime", "Karime"]);
console.log(numbers);
console.log(frinds);
