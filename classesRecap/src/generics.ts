const input = document.querySelector<HTMLInputElement>("#username")!;
input.value="55"; 

const btn = document.querySelector<HTMLButtonElement>(".btn");

function identity<T>(item : T) : T {
    return item;
}
type Cat = {
    name :string;
}
console.log(identity(7));
console.log(identity("yee"));
console.log(identity(true));
console.log(identity({name:"kuch",last:"kuch"}));

const cat : Cat = {
    name : "lucy"
}
console.log(identity(cat));


function merge<T extends object,U extends object>(obj1 : T, obj2: U){
    return {
        ...obj1,
        ...obj2
    };
}
const mergedObj = merge({name:"cold"},{pets:["cat","dog"]});
console.log(mergedObj);

function makeEmptyArray<T = number>() : T[] {
    return [];
}
const num = makeEmptyArray();
const str = makeEmptyArray<string>(); 