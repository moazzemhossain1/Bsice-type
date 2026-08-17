"use strict";
function getIdentity(value) {
    return value;
}
let Input = getIdentity("Hello");
let Input1 = getIdentity(100);
// console.log(Input);
// console.log(Input1)
function getFirstElement(vale) {
    let first = vale[0];
    return first;
}
let inpu = getFirstElement([10, 20.30]);
let inpu1 = getFirstElement(["A", "B", "C"]);
// console.log(inpu)
// console.log(inpu1)
function getLastElement(vla) {
    let listIndex = vla.length - 1;
    let list = vla[listIndex];
    return list;
}
let inpt = getLastElement([1, 2, 3]);
let inpt1 = getLastElement([1, 2, 3, 4, 5, 6]);
// console.log(inpt);
// console.log(inpt1)
function wrapInArray(valen) {
    return valen;
}
let words = wrapInArray("Hello");
let num = wrapInArray(100);
// console.log(words);
// console.log(num)
function mergeObject(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const result = mergeObject({ naem: "Laptop" }, { price: 500 });
console.log(result);
