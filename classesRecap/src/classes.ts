// class Player {
//     readonly first : string;
//     readonly last : string;
//     private score : number = 0;
//     constructor(first: string,last: string){
//         this.first=first;
//         this.last=last;
//     }
//     private secretMethod(){
//         console.log("Hush");
//     }
// }

class Player {
    constructor(
        public first: string,
        public last: string,
        private _score : number = 0
        ){}
    private secretMethod(){
        console.log("Hush");
    }
    get fullName(){
        return `${this.first} ${this.last}`;
    }
    get score(){
        return this._score;
    }
    set score(score:number){
        if(score<0){
            throw new Error("Not allowed")
        }
        this._score=score;
    }
}

class SuperPlayer extends Player{
    isSuper : boolean = true;
}
const p1 = new Player("Freddie","Mercury");
console.log(p1.fullName);
console.log(p1.score);
p1.score=99;
console.log(p1.score);
//p1.score=-9;


interface Colorful {
    color : string;
}
interface Printable {
    print(): void;
}
class Bike implements Colorful {
    constructor(public color : string){}
}
class Jacket implements Colorful,Printable {
    constructor(
        public brand : string, 
        public color : string
         ){}
    print() {

    }
}

//Employee - FTE / PTE
abstract class Employee {
    constructor(
        public first : string,
        public last : string
    ){}
    abstract getPay() : number;
}
class FTE extends Employee {
    constructor(
        first : string,
        last : string,
        public salary : number
    ){
        super(first,last);
    }
    getPay(): number {
        return this.salary;
    }    
}
class PTE extends Employee {
    constructor(
        first : string,
        last : string,
        public rate : number,
        public hours : number
    ){
        super(first,last);
    }
    getPay(): number {
        return this.hours * this.rate;
    }
}
//const emp = new Employee() Not allowed
const e1 = new FTE("David","Soloman",1000000);
console.log(`${e1.first} earns ${e1.getPay()}`);
const e2 = new PTE("Amit","Kumar",50,1100);
console.log(`${e2.first} earns ${e2.getPay()}`);