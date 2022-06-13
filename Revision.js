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
Set()+
Maps()+
Strick (How to use strict)+
this Keyword+
Arrow Function+
Classes+
Json+
Debugging+
Style guide+
Best practices+
Performance+
Reserved words+

*/



// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
/* 
JSON: JavaScript Object Notation.
JSON is a syntax for storing and exchanging data.
JSON is text, written with JavaScript object notation.

*/

// step 1 
// you will need an object 
let person = {
  name : "Gabriel",
  age : "26",
  sex : "male",
  state : "Anambra"
};

// step 2 
// you can then convert that object into a JSON (string) using the JSON.stringify(x) method which is usually used for sending data.
// When exchanging data between a browser and a server, the data can only be text.

// JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.

//convert_object_to_string 
let myJson_st = JSON.stringify( person );

console.log(myJson_st);// javascript has converted the object into a string

let myJson_Ob = JSON.parse(myJson_st);
console.log(myJson_Ob);


// storing Data in local storage
// When storing data, the data has to be a certain format, and regardless of where you choose to store it, text is always one of the legal formats.

// how to store data in local storage
localStorage.setItem("dataPerson", myJson_st);

// how to retrieve data from local storage
let viewData = localStorage.getItem("dataPerson");
// after retrieving the data you convert the data back to an object
let retrievedData = JSON.parse(viewData);
console.log(retrievedData);

let obj = {
  key : "value"
};

// JSON Strings

// Strings in JSON must be written in double quotes.
// Example
{ "name" : "John" };
// JSON Numbers

// Numbers in JSON must be an integer or a floating point.
// Example

// JSON Object
{
  "obj" : {"key":"value"}
};
// JSON Array
{
  "obj" : ["value1","value2"]
};

// JSON Booleans

// Values in JSON can be true/false.
// Example
{ "sale" : true };
// JSON null

// Values in JSON can be null.
// Example
{ "middlename" : null };

// Use the JavaScript function JSON.parse() to convert text into a JavaScript object:
var obj = JSON.parse( '{ "name":"John", "age":30, "city":"New York"}' );

// Debugging in Javascript
// Debugging is the act of searching and fixing errors..