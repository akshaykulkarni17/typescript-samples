"use strict";
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
    constructor(first, last, _score = 0) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log("Hush");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(score) {
        if (score < 0) {
            throw new Error("Not allowed");
        }
        this._score = score;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isSuper = true;
    }
}
const p1 = new Player("Freddie", "Mercury");
console.log(p1.fullName);
console.log(p1.score);
p1.score = 99;
console.log(p1.score);
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
    }
}
//Employee - FTE / PTE
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}
class FTE extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PTE extends Employee {
    constructor(first, last, rate, hours) {
        super(first, last);
        this.rate = rate;
        this.hours = hours;
    }
    getPay() {
        return this.hours * this.rate;
    }
}
//const emp = new Employee() Not allowed
const e1 = new FTE("David", "Soloman", 1000000);
console.log(`${e1.first} earns ${e1.getPay()}`);
const e2 = new PTE("Amit", "Kumar", 50, 1100);
console.log(`${e2.first} earns ${e2.getPay()}`);
