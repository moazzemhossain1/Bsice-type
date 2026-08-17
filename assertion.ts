


let value:unknown="hello"

let messmage=value as string;
console.log(messmage.length)
console.log(messmage.toLocaleLowerCase())
console.log(messmage.toUpperCase())



let data:unknown=["React","Next.js"];
let skiless=data as string;
console.log(skiless)
console.log(skiless)





type Userse={
    id:number;
    naeme:string;

}

let datae:unknown={
    id:1,
    naeme:"Moazzem"

}

let use = datae as Userse;
console.log(use.naeme)