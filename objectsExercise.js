var dune = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789,
    },
};
var cats = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348,
    },
};
// Write a function called getProfit that accepts a single Movie object
// It should return the movie's worldwide gross minus its budget
// For example...
// getProfit(cats) => -21166652
function getProfit(movie) {
    return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
}
console.log(dune);
console.log(getProfit(dune));
console.log(cats);
console.log(getProfit(cats));
var sum = function (n) { return n + 10; };
var double = function (n) { return n * 2; };
var divide = function (n) { return n / 2; };
var result = sum(double(divide(20)));
var combine = function (result, nextFun) { return nextFun(result); };
var pipe = function () {
    var funs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funs[_i] = arguments[_i];
    }
    return function (x) { return funs.reduce(combine, x); };
};
var result2 = pipe(sum, double, divide)(20);
console.log(result);
console.log(result2);
var nums = [];
nums.push(1, 2, 3);
console.log(nums);
nums.pop();
console.log(nums);
console.log(nums.length);
var movies = [];
movies.push(dune, cats);
console.log(movies);
