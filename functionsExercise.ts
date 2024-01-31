// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"

// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"

function twoFer(name:string="you"){
    return `One for ${name}, one for me`;
}

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false

// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo

function isLeapyear(year:number) : boolean {
    if(year%400===0 || (year%4===0 && year%100 !=0))
        return true;
    return false;
}
console.log(twoFer());
console.log(twoFer("ak"));
console.log(isLeapyear(2012));
console.log(isLeapyear(2013));

type Stock = {
    readonly name : string;
    price : number;
    ckt? : {
        up : number;
        lo : number;
    }
}

function findCkt(stock:Stock){
    let up= stock.price+stock.price*0.05;
    let lo= stock.price-stock.price*0.05;
    stock.ckt={up,lo};
}
const stock:Stock = {name:"Apple",price:10}
console.log(stock);
findCkt(stock);
console.log(stock);
const stock2:Stock = {name:"GS",price:15,ckt:{up:9,lo:2}}
console.log(stock2);
findCkt(stock2);
console.log(stock2);