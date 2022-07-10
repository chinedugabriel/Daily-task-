
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
/*
  let mrPromise = new Promise((resolve, reject)=>{
    let name = true;
    if(name == true){
      setTimeout(() => {resolve("Yes name was found in records"); }, 3000);
      
    }else{
      reject(new Error("not found Pls register"));
    }
  });

  mrPromise.then(
    (value) => {console.log(value)},
    (error) => {console.error(error)}
  );


  let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
    reject(new Error("not found"));
  });
  
  // resolve runs the first function in .then
  promise.then(
    result => console.log(result), // shows "done!" after 1 second
    error => console.log(error) // doesn't run
  );

  // If we’re interested only in successful completions, then we can provide only one function argument to .then:
  

  let missPromise = new Promise(function(resolve) {
    setTimeout(() => resolve("done!"), 1000);
    
  });
  
  // resolve runs the first function in .then
  missPromise.then(
    result => console.log(result), // shows "done!" after 1 second
    // error => console.log(error) // doesn't run
  );

  */

  // let errPromiseThen = new Promise(function(resolve,reject) {
  //   reject(new Error("not found in Promise.then"))
    
  // });
  
  // // resolve runs the first function in .catch
  // errPromiseThen.then(
  //   null,
  //   error => console.log(error) 
  // );
  
  // let errPromise = new Promise(function(resolve,reject) {
  //   reject(new Error("not found in Promise"))
    
  // })
  
  // .finally(
  //   ()=> console.log("this would run anyways")
  // );
  
  // // resolve runs the first function in .catch
  // errPromise.catch(
  //   error => console.log(error) 
  // );
  

  // A function to load a script
  /*
 function loadScript(src){
  return new Promise((resolve, reject)=>{
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(script);
    script.onerror = ()=> reject(new Error(`Script load error for ${src}`))
    
    document.head.append(script);
  });
 }

let scriptLoaderPromise = loadScript("https://google.com");

scriptLoaderPromise.then(
  result => console.log(`${script.scr} was loaded successfully`),
  error => console.error("script failed to load")
);

*/

// write a promise to validate a number and its resolve should output "the number that was validated" while it reject should say "we want numbers here" when its is not a valid number.
// for example, 

// 45 is an actual number; // resolve

// we want numbers here // reject

// let validateNum = (n) => {
//   return new Promise((resolve,reject) => {
//     let pValue = n;
    
//     let num =(n) =>{ 
//       let result = "";
//       let convertNum = Number(n);
//       if (convertNum.toString() === "NaN"){
//         result = `not valid`;
//       }else{
//      result = Number(n);
//     }
//     return result;
//     };

//     let Vnum = num(pValue);

//   let testNumber = Vnum ;

// if ( typeof testNumber == "number"){
//   resolve(`${testNumber} is an actual number`);
// }else{
//   reject("We want numbers here");
// }

// });
// }

// let checkNumber = (n) => validateNum(n)

// .then(
//   value=>console.log(value),
//   error=>console.error(error)
// );


// num.then(
//   null,
//   error=>console.error(error)
// );

// num.catch((error)=>console.error(error));

// console.log(typeof "33" == "number")

// let num = "34";
// console.log(num.constructor.toString().indexOf("Number") > -1);






// ------------------OR------------------

// how do I write a promise to validate a number and it resolve should output "the number that was validated" while it reject should say "we want numbers here" when its is not a valid number.
// for example, 

// 45 is an actual number; // resolve

// we want numbers here // reject

// let validateNum = (n) => {
//   return new Promise((resolve,reject) => {
//     let testNumber = Number(n);
   
// if ( typeof testNumber == "number" && testNumber.toString() !== "NaN"){
//   resolve(`${testNumber} is an actual number`);
// }else{
//   reject("We want numbers here");
// }

// });
// }


// let checkNumber = (n) => validateNum(n)

// .then(
//   value=>console.log(value),
//   error=>console.error(error)
//   );
  

// let validateNumber = (n) => {
//   return new Promise((resolve,reject) => {
//     let testNumber = Number(n);
   
//   if (isNaN(testNumber)){
//   reject("We want numbers here");
//   }else{
//   resolve(`${testNumber} is an actual number`);
// }

// });
// }


// let checkNumber = (n) => validateNumber(n)

// .then(
//   value => console.log(value),
//   error => console.error(error)
//   );
  
  
//   checkNumber("23.09");
//   checkNumber(42);
//   checkNumber(NaN);
//   checkNumber("waawoo");


