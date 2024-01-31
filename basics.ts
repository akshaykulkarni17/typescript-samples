console.log("Hello");
console.log(Math.random());
console.log(Math.round(7.8654865486));
let stringVariable : string = "test";
stringVariable = "9";
const constantString : string = "change";
let num : number = 99;
let boo : boolean = false;
boo = true;
let movie = "";
//  movie =1;
function hello (name:string="stranger"){
return `hello ${name}`;
};
hello("7");
const doSomething = (person: string,age: number,isChu: boolean): string => {return "hi";}
doSomething("vinod",4,true);
const colors = ["red","green","blue"];
colors.map(colors => {
    return colors.includes('e');
})