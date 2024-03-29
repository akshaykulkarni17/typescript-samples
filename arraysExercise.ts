// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
const ages : number[] = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard : string[][] = [];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type Product = {
    name : string;
    price : number;
}
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(products:Product[]){
    let sum = 0;
    products.forEach(product => {sum+=product.price;});
    return sum;
}
let phone : Product = {name:"nokia",price:100};
let chair : Product = {name:"ergo",price:500};
let table : Product = {name:"black",price:200};
let products : Product[] = [];
products.push(phone,chair,table);
console.log(getTotal(products));

let stuff : number | string = 1;
stuff = "23";
let arr : (number| string)[] = [1,2,"one","two"];