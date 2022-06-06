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
***Math.random()+
===========================
Boolean+
Boolean()+
new Boolean()+
Comparison and Logical Operators +
*conditional Statement( if else & else if) +
*Switch()+ // the switch() uses === which is the strict type, so the data type of the argument most match the case if not nothing would be selected

for Loop+
for in loop+
for of loop+
while loop+
do while loop+
Break+
Continue+

Type Conversion+
Bitwise Operation+
Regular Expression(RegExp)+
Errors(try{throw},catch(){},finally)+
Scope+
Hoisting+
Set()
Maps()

*/


let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


let person = {
  name : "Gabriel",
  age : "26",
  sex : "male",
  state : "Anambra"
};
    
// let multiArr = [[2,1],[2,5],[4,5]];
// let result = 0;

// console.log(Number("38"));
// console.log(String(256));
// console.log("typeof".constructor);
// console.log((2421).constructor);
// console.log([2421].constructor);

// You can check the constructor property to find out if an object is an Array (contains the word "Array"):

// function isArray(myArray){
//   return myArray.constructor.toString().indexOf("Array") > -1;
// }

// Or even simpler, you can check if the object is an Array function:

// function isArray(myArray){
//   return myArray.constructor === Array;
// }

// console.log(isArray(days));



// You can check the constructor property to find out if an object is a Date (contains the word "Date"):

// function isDate(myDate){
//   return myDate.constructor.toString().indexOf("Date") > -1;
// }

// Or even simpler, you can check if the object is a Date function:

// function isDate(myDate){
//   return myDate.constructor === Date;
// }

// console.log(String(2+2))
// console.log((2+2).toString)
// console.log((243).toExponential(4));
// console.log((24324).toFixed(1));

// let a = 5;
// let b = 0;

// Converting Decimal to Binary

// function decimal2bin(dc){
//   return (dc >>> 0).toString(2);
// }
// console.log(decimal2bin(22));

// Converting Binary to Decimal


// function bin2decimal(dc){
//   return parseInt(dc, 2).toString(10);
// }
// console.log(bin2decimal(11010));

/*
Regular Expression:
A regular expression is a sequence of characters that forms a search pattern.
*/

let str = "this boy came on monday with an expression at monday's fellowship";
let numb = "45275389345";

// console.log(str.search(/s/[s]));
// console.log(str.replace(/monday/ig, "new word"));
// console.log(/e/.test(str));
// console.log(/e/g.exec(str));


// start form Regular expression before you do Errors 
/*
search()
replace(,)
test()
exec()
match()

*/
// let result = str.search(/P/i);
// let result = str.replace(/Ya/ig,"P");
// let result = str.replace(/[Ya]/ig,"P");
// let result = str.replace(/[a|d]/ig,"P");
// let result = numb.replace(/[2-4]/ig,"F");
// let result = /5/.test(numb);
// console.log(result);

/*  JavaScript try and catch

The try statement allows you to define a block of code to be tested for errors while it is being executed.

The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

The JavaScript statements try and catch come in pairs:

**** Error Name Values ****
Six different values can be returned by the error name property:

Error Name |	Description
EvalError |	An error has occurred in the eval() function
RangeError |	A number "out of range" has occurred
ReferenceError |	An illegal reference has occurred
SyntaxError |	A syntax error has occurred
TypeError |	A type error has occurred
URIError |	An error in encodeURI() has occurred

*/


// try{
//   if(naomi == undefined) ;
//   throw "you didn't define your variable";
// }
// catch(err){
//   console.log(err.message);
// }
// finally{

// }
// let mam = "woman";
// let mam = "mom";

// console.log(mam);

// function input(str){
// try{
//   if(str === undefined){
//     throw "type in a string in the fn you called";
//   }
//   if(str.constructor.toString().indexOf("Number") > -1)
//   {
//     throw " input a string not a number pls!!!"
//   }
//   if(str.constructor.toString().indexOf("Array") > -1)
//   {
//     throw " input a string not a Array pls!!!"
//   }
//   if(str.constructor.toString().indexOf("Object") > -1)
//   {
//     throw " input a string not a object pls!!!"
//   }
  
// }catch(err){
//   return err;
// }

// }

// console.log(input("iuhj"));

// let i = 556.3;
// try{
//   let i =234;
//   let i =234;
// }
// catch(err){
//   console.log(err.name)// ReferenceError
// }

// let i = 334;
// try{
//   i = t + 1;
// }
// catch(err){
//   console.log(err.message)// ReferenceError
// }
// let t = 33;

/* Hoisting
Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
*/

