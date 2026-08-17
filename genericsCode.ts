

function getIdentity<T>(value:T):T{
    return value;

}

let Input=getIdentity<string>("Hello");
let Input1=getIdentity<number>(100);
// console.log(Input);
// console.log(Input1)




function getFirstElement<T>(vale:T[]):T |undefined{
    let first=vale[0];
    return first 


}
let inpu=getFirstElement<number>([10,20.30]);
let inpu1=getFirstElement<string>(["A","B","C"])

// console.log(inpu)
// console.log(inpu1)






function getLastElement<T>(vla:T[]):T | undefined{

    let listIndex=vla.length -1;
    let list=vla[listIndex];
    return list;
}

let inpt=getLastElement<number>([1,2,3]);
let inpt1=getLastElement<number>([1,2,3,4,5,6]);
// console.log(inpt);
// console.log(inpt1)









function wrapInArray<T>(valen:T):T{
    return valen;
}

let words=wrapInArray<string>("Hello");
let num=wrapInArray<number>(100);
// console.log(words);
// console.log(num)




function mergeObject<T,U>(obj1:T,obj2:U):T & U{
    return{...obj1,...obj2}
}

const result=mergeObject(
    {naem:"Laptop"},
    {price:500}
)
console.log(result)