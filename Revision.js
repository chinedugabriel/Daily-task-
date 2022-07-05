
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
Javascript Modules+

Recusion

JS Objects
Object Definitions+
Object Properties+
Object Methods+
Object Display+
Object Accessors+
Object Constructors+
Object Prototypes+
Object Iterables+
Object Sets
Object Maps
Object Reference

JS Functions
Function Definitions +
Function Parameters+
Function Invocation+
Function Call+
Function Apply+
Function Closures+

CallBack+
Asynchronous+
Promises
Async / Await





*/



// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


// =============javascript callbacks============
// A callback is a function passed as an argument to another function.

// function showME(name){
//  console.log(name);
// }

// console.log(showME());

// function sum(a, b, myCallback) {
//   let addUp  = a + b;
//   myCallback(addUp)
// }

// sum(5,2,showME);

// same as 
// sum(5,2, function showME(name){console.log(name)});

// function displayOnConsole(x){
//   console.log(x);
// }

// function multiply(a, b, fun){
//   let result = a * b;
//   fun(result);
// }

// multiply(2, 2, displayOnConsole);
// multiply(2, 2, function displayOnConsole(x){console.log(x);});



/* Functions running in parallel with other functions are called asynchronous.

 A good example is JavaScript setTimeout()

 Waiting for a Timeout

When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out:
*/

// function callMe(){
//   console.log("Gabriel");
// }

// setTimeout(callMe, 2000);


/*
Waiting for Intervals:

When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval:
*/ 


// function countTime(){
//   console.log("Hello world");
  
// }

// setInterval(countTime, 1000);


// callBacks
// function callBacks(txt1,txt2,a,b){
//   let t1 = txt1;
//   let t2 = txt2;
//   a(t1);
//   b(t2);
// }

// function step1(x){
//   console.log(x)
// } 
// function step2(x){
//   console.log(x)
// }

// callBacks("I a greatful", "not just for now but for all ways",step1,step2);



// callback Hell!!


// setTimeout( 
//   ()=>{console.log("Please Wait while we process your Data")
//   let data = false;
//   setTimeout(
//       () => { if (data == true){console.log("Your data has passed Stage 1... \n Waiting for stage 2")
//         setTimeout(() =>{ console.log("You are cleared for the Job") 

//         },3000)}
//       else{
//         console.log("You don't have any data here for you")}} 
//     ,3000);
// },2000);


// setInterval(()=> console.log(`It's Time`), 2000);


// Javascript Promise Object
// let myPromise = new Promise(function(myResolve, myReject){

  //   myResolve();
  //   myReject();
  // })
  
  // myPromise.then(
  //   function(value){/* code if successful */};
  //   function(error){/* code if some error */};
  // )
  
  
  
  // let learnPromise = new Promise(function(myResolve,myReject){
  //   let i = 2;
  //   i == 3? myResolve("it worked"): myReject("it failed");
  // });
  
  
  // learnPromise.then(
  //   function(value){showInConsole(value);},
  //   function(error){showInConsole(error);}
  // );