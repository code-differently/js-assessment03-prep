const productEvens = require("../../productEvens");
let numbers = process.argv.slice(2).map(Number);
console.log(productEvens(numbers));