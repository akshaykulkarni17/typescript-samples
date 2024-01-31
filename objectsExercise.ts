// Write the Movie type alias to make the following two variables properly typed
// Make sure that "originalTitle" is optional and "title" is readonly
type Movie = {
  readonly title : string;
  originalTitle? : string;
  director: string;
  releaseYear: number;
  boxOffice : {
    budget : number;
    grossUS: number;
    grossWorldwide: number;
  }
}

const dune: Movie = {
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

const cats: Movie = {
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
function getProfit(movie:Movie){
  return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
}

console.log(dune);
console.log(getProfit(dune));
console.log(cats);
console.log(getProfit(cats));

const sum = (n: number) => n + 10;
const double = (n: number) => n * 2;
const divide = (n: number) => n / 2;

const result = sum(double(divide(20)));

const combine = (result , nextFun) => nextFun(result);
const pipe = (...funs) => x => funs.reduce(combine,x);
const result2 = pipe(sum,double,divide)(20);

console.log(result);
console.log(result2);

const nums : number[] = [];
nums.push(1,2,3)
console.log(nums)
nums.pop()
console.log(nums)
console.log(nums.length)

const movies : Movie[] = [];
movies.push(dune,cats);
console.log(movies);