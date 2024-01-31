// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(products) {
    var sum = 0;
    products.forEach(function (product) { sum += product.price; });
    return sum;
}
var phone = { name: "nokia", price: 100 };
var chair = { name: "ergo", price: 500 };
var table = { name: "black", price: 200 };
var products = [];
products.push(phone, chair, table);
console.log(getTotal(products));
