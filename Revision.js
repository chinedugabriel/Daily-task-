// :::::::::::::::::::::::::::::::::
// function wordCounter(str,wrd){
//   word = new RegExp(wrd,"gi")
//    let result = str.match(word);
//    return result.length;
//   }
// console.log(wordCounter("bananana","na"));


// Start Here
/*
Var +

let +

Const  +

function +

hoisting +

Scope +

data Types: string, number, boolean, null, undefine, Array, object; +


Primitive data type & complex data type +
string, number, boolean, undefine +

complex data types :   +
Null
Array,
Object
***************************************************
function(); +
Object

***string method***
length +

indexOf() +
lastIndexOf() +
search() +

//Array {
  find() +
findIndex() +
} 

slice() +
substring()+
substr() +
replace() +

toUpperCase() +
toLowerCase() +

trim() +
charAt() +
charCodeAt() +

padding
padStart() +
padEnd() +

split("") +
join("")

Number method
writing numbers in an exponential format (e)+
toString()+
toExponential()+
toFixed()+
toPrecision()+
valueOf()+
Number.MAX_VALUE+
Number_MIN_VALUE+
Number_POSITIVE_INFINITY+
NumbEr_NEGATIVE_INFINITY+
=============================
ARRAYS AND ARRAY METHODS
Creating an Array+
Accessing an Array +
checking If an Array.IsArray() using the following:
  1) creating your own isArray() function +
  2) Using Array.isArray() method +
  3) Using ..... intstanceof Array; +

Adding values into an array (pop(), shift()); +
Removing values from an array (push(), unshift()); +
Extracting values from an array (slice(), splice());+

ForEach(); +
map();+
filter();+
reduce();+
reduceRight();+
every();+
some();+
indexOf();+
lastIndexOf();+
find();+
findIndex();+
Date object+
Date & Time format+
how to getDate()+
how to setDate()+
=======================
Date()+
Date format+
Get Date()+
set Date()+
==================
math()
Math properties:
Math.E        // returns Euler's number +
Math.PI       // returns PI +
Math.SQRT2    // returns the square root of 2 +
Math.SQRT1_2  // returns the square root of 1/2 +
Math.LN2      // returns the natural logarithm of 2 +
Math.LN10     // returns the natural logarithm of 10 +
Math.LOG2E    // returns base 2 logarithm of E +
Math.LOG10E   // returns base 10 logarithm of E +
====================
Math.method()
Math.round()+
Math.ceil()+
Math.floor()+
Math.trunc()+
Math.abs()+
Math.sin()+
Math.cos()+
Math.min()+ // To find the minimum value of an array we use Math.min.apply(null, arrayName); 
Math.max()+ // To find the maximum value of an array we use Math.max.apply(null, arrayName);
Math.log()+
Math.log2()+
Math.log10()+

Math.random();
*/ 


// console.log(Math.round(-23.45));// returns a number that is nearest to the integer

// console.log(Math.ceil(23.1)); // 24 returns a number that is grater than the actual value

// console.log(Math.floor(23.1)); // 23 returns a number that is lower than the actual value

// console.log(Math.trunc(23.87)); // returns the integer part of x that is 23

// console.log(Math.sign(-0));// it returns a positive 1 if the number given is a positive value or -1 if the number given is a negative value or 0 if zero given is a positive zero or -0 if the zero given is a negative zero or NaN if it is not a number or a string number 

// console.log(Math.pow(4, 4));

// console.log(Math.sqrt(49));

// console.log(Math.abs(-49));

// console.log(Math.sin(9));

// console.log(Math.cos(49));

// console.log(Math.tan(49));

let arr = [1,34,5,3,77,6];
// console.log(Math.min.apply(null, arr));
// console.log(Math.max.apply(null, arr));

// console.log(Math.log(36));
// console.log(Math.log2(4));
// console.log(Math.log10(100000));

console.log(Math.random());

// let rst = arr.sort((a,b)=>0.5 - Math.random()) // how to find random values in an array 
// console.log(rst);

// Math.floor(Math.random() * 11);      // returns a random integer from 0 to 10 

// Math.floor(Math.random() * 100);     // returns a random integer from 0 to 99 

// Math.floor(Math.random() * 101);     // returns a random integer from 0 to 100

// Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10 

// Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100 

// console.log(Math.floor(Math.random()*10)+1);

// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min) ) + min;
// }
console.log(getRndInteger(1, 12));

// how to properly find or print random numbers 
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
console.log(getRndInteger(1, 12));