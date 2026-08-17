


// Basis Generic Syntax


// function getVale<T>(value:T):T{
//     return value;

// }
// let namre=getVale<string>("Moazzem");

// let age=getVale<number>(21);
// console.log(namre)
// console.log(age)





function getValue<T>(value:T):T{
    return value;

}

let namem=getValue<string>("Moazzem");
let age=getValue<number>(19);
let ispase=getValue<boolean>(true);
console.log(namem);
console.log(age);
console.log(ispase)










// function getArray<T>(items:T[]):T[]{
//     return items;
// }

// let numbers=getArray<number>([1,2,3,4,4]);
// let frinds=getArray<string>(["Ali","Rahime","Karime"]);
// console.log(numbers);
// console.log(frinds)





// function getArray<T>( items:T[]):T[]{
//     return items;


// }

// let nameel=getArray<number>([1,2,3,4]);
// console.log(nameel)




function getArray<T>(items:T[]):T[]{
    return items;

}

let frinds=getArray<string>(["Anuml","Ali"]);

console.log(frinds)