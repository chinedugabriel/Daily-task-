let fruits = ["Banana", "Orange", "Apple", "Mango", "Melon"];

let word1 = " Freelance with the best of the best Silicon Valley companies in a number of software jobs  ";
let word2 = "i am more than able";

let Num = 12345678910;
// let Num2 = "1,2,3,4,5,6,7,8,9,10";

let letters = "abcdefghijklmnopqrstuvwxyz";

let newResult = 70;
// Number
// converting a number to a string, we use toString() method
// console.log(newResult.toString());

// toExponential() returns a string, with a number rounded and written using exponential notation.
// console.log(newResult.toExponential(2));

// toFixed() 
// it returns a string with the number written with a specified number of decimals. it has more to do with float numbers.

let ux = 97.4536;
// let result = ux.toFixed(6);
// console.log(result);

// toPrecision() returns a string, with a number written with a specified length:
// let result = ux.toPrecision(3);
// console.log(result);

// Note: toExponential(), toFixed(), toPrecision() methods returns a string



// valueOf() returns a number as a number.
// this method is used internally in JavaScript to convert Number objects to primitive values.

// let result = ux.valueOf();
// console.log(result);

// Converting Variables to Numbers:
// Number()
// paseInt()
// paseFloat()

// Method	        Description
// Number()	        Returns a number, converted from its argument.
// parseFloat()	    Parses its argument and returns a floating point number
// parseInt()	    Parses its argument and returns an integer

// result = Number("2.98");
// console.log(result);

// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

// result = parseInt("3 9");  // 3
// result = parseInt("3.9"); // 3
// result = parseInt("39lkj"); // 39
// result = parseInt("XC39"); // NaN
// console.log(result);

// parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:

result = parseFloat("3.35");
console.log(result);
console.log(Number.parseInt());



