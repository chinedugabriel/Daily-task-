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

*/



// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
/* 
Modules

JavaScript modules allow you to break up your code into separate files.

This makes it easier to maintain the code-base.
JavaScript modules rely on the import and export statements.

you can create named exports two ways:
In-line individually or all at once at the bottom.
*/

/*
export const studentName = "Gabriel";
export const studentAge = 27;

// const studentName = "Gabriel";
// const studentAge = 27;

export {studentName, studentAge};

// Example of a Default Exports

// const message = () => {
//     const name = "Jesse";
//     const age = 40;
//     return name + ' is ' + age + 'years old.';
//     };
    
//     export default message;


** note :> you can only have one default exportin a file




Import

You can import modules into a file in two ways, based on if they are named exports or default exports.

Named exports are constructed using curly braces. Default exports are not.


import { studentAge, studentName } from "component1.js";

import message from "./component1.js";


*/ 

// let larr = [23,53,2];

// let arr = [
//   {name : "john", age : "33", gender : "male", status : false},
//   {name : "lia", age : "73", gender : "male", status : false},
//   {name : "leo", age : "43", gender : "male", status : false}
// ];
// let na = "";
//  let gee = arr.filter((value, index)=>{ 

//   return value.status == false && index == 2 ? value.status = true : value.status = false; 
  
// })

// console.log(arr);
// console.log(gee);

// Js Objects
// An object is a collection of data that are written in name and value pairs

// example 

// let student = {
//   "name" : "Gabriel",
//   "age" : 26,
//   "country" : "Nigeria",
//   "details" : function(){
//     return `My name is ${this.name}, i'm ${this.age} and i'm from ${this.country}`;
//   }
// };

// console.log(student.details());

// ways to create an object

// Create a single object, using an object literal.
// Create a single object, with the keyword new.
// Define an object constructor, and then create objects of the constructed type.
// Create an object using Object.create().

// example of an object literal

// const person = {
//   "name" : "Gabriel",
//   "age" : 26,
//   "country" : "Nigeria",
//   "cars" : [
//     {
//       "first": "lambo",
//       "year" : 1990,
//       "cost" : 20000
//     },
//     {
//       "second": "ford",
//       "year" : 1960,
//       "cost" : 15000
//     }
//   ]
// };

// let arrt = {};
// arrt.name = "funk_man";
// arrt.age = 114;

// console.log(arrt);

// example on how to create an object using the keyword New

// const friend = new object();
// friend.name ="master Craft";
// friend.age = "27";

// console.log(arrt.name);
// console.log(arrt[age]);

// how to access an object
// console.log(person.cars[1].second);


// let item = {
//   name : "Hp ZeeBook",
//   age : 2014,
//   cost : 2000,
//   details : function(){
//     return `The ${this.name} is the best portable workstation at early ${this.age} that cost $${this.cost}.`;
//   },
//   set status(x){
//     return `The ${this.name = x} is the best portable workstation at early ${this.age} that cost $${this.cost}.`;
//   },
//   get status(){
//     return `The ${this.name} is the best portable workstation at early ${this.age} that cost $${this.cost}.`;
//   }
// };

// How to convert an object into an array

// let i;
// let x = [];
// for(i in item){
//     x.push(i, item[i]); 

// }
// console.log(x); 

//[ 'name', 'Hp ZeeBook', 'age', 2014, 'cost', 2000 ];

// console.log(item.details());
// item.status = "mackBook";
// console.log(item.status);
// console.log(item.name);

/* Using object.defineProperty(obj,prop, descriptor)
  object.defineProperty(obj, prop, descriptor) defines the new property directly on an object, or modifies an existing property on an object, and returns the object.
  object.defineProperty(ObjectName, "key or NameOfPropertyAdded");

  obj = the object you intend on adding a new property,
  key = the property name,
  descriptor = here you define the value of the property, and the chose if this property is using a data descriptor or an access descriptor  

  Data descriptor includes :
  - value: "string or number or a boolean"
  - writable: "true or false",
  - configurable: "true or false",
  - enumerable : "true or false"

  Access descriptor includes :
  Getters (get) and Setters(set)

An enumerable property in JavaScript means that a property can be viewed if it is iterated using the for…in loop
*/

// let child = {
//   name : "Bruno",
//   age : 24
// };

// Object.defineProperty(child, "school", {
//   enumerable : true,
//   configurable : false,
//   writable : true,
//   value : "greeBear"
// });
// child.school = "pixerBay";
// delete child.school;
// console.log(child);

// Access Descriptor
// Object.defineProperty(child, "school", {
//   // configurable: true,
//   // enumerable : true,
//   get () {
//     return value;
//   },
//   set (newValue) {
//     return value = newValue;
//   }
// });

// child.school = "HopeBay";
// console.log(child.school);
// console.log(child);


// Note
//   we can't have the same name for access descriptors and data descriptor

// we can't use only a getter function in an accessor 

// object.defineProperty(obj, "propertyName", {
//   value : "", // name of the value
//   writable : true, // specifies if we couild reassign values to it 
//   configurable : false, // can we delete it or not 
//   enumerable : true // can we view or loop through this properties
// })

// Object.defineProperties()
// The Object.defineProperties() acts the same way Object.defineProperty() would work but with a slight difference in syntax or the way it receives its arguments..
// Object.defineProperties() take in more properties unlike Object.defineProperty() which takes in one property.

// let girl = {};

// Object.defineProperties(girl,{
//   bags :{
//     value : 4,
//     writable : true,
//     configurable : false,
//     enumerable : true
//   },
//   wigs : {
//     value : 10, 
//     writable : true,
//     configurable : false,
//     enumerable : false
//   }
// })

// console.log(girl);


// Object constructor

// function music (_name, _type, _year, _country){
//   this.name = _name,
//   this.type = _type,
//   this.year = _year,
//   this.country = _country
// }

// let blues = new music("runtown", "afro", 2016, "nigeria");

// console.log(blues);

// function band ( _name, _type, _year){
//   this.name = _name,
//   this.type = _type,
//   this.year = _year,
//   this.number = 4,
//   this.details = function(){
//     return `${this.name} was the best ${this.type} band in ${this.year} as a ${this.number} man band`;
//   },
//   this.newName = function(x){
//     return this.name = x;
//   }
// }
 
// let rock = new band( "TGW", "gospel_rock", 2019);
// console.log(rock.details());
// console.log(rock.newName("Boys_To_Men"));


// Using the prototype Property
// javascript prototype allows you to add property and methods to an existing object constructor

// for example

// band.prototype.country = "London";

// band.prototype.newDetails = function(){
//   return `${this.name} was the best ${this.type} band in ${this.year} as a ${this.number} man band in ${this.country}`;
// }

// console.log(rock.country);
// console.log(rock.newDetails());

// console.log(Object.getOwnPropertyNames(person));

// How to convert an object property into an array

// let car = {
//   name : "Ford",
//   model : "Gt-700",
//   year : 1980
// }

// let result = [];
// let i;
// for (i in car){
//   result.push(i);
// }

// console.log(result); // [ 'name', 'model', 'year' ]

// OR

//  let newResult = Object.getOwnPropertyNames(car);
// console.log(newResult); // [ 'name', 'model', 'year' ]

// OR
//  let newKeyResult = Object.keys(car);

//  console.log(newKeyResult); // [ 'name', 'model', 'year' ]


// let person = {
//   name : "",
//   gender : "female",
//   age : 24,
//   details : function(){
//     return `my name is ${this.name} a ${this.gender} and i am ${this.age}`;
//   }

// }


// person.name = "favo";
// console.log(person.name);


// console.log(person.details());
// let boy = new Object();
// boy.name = "fred";
// boy.gender = "male";
// boy.age = 24;
// // console.log(boy["name"]);



// function student( _name, _gender, _age){
//   this.name = _name;
//   this.gender = _gender;
//   this.age = _age;
//   this.message = "Waww";
//   this.change = function(k, val){
//     if(k == "name"){
//      return this.name = val;
//     }else if (k == "gender"){
//       return this.gender = val;
//     }else if (k == "age"){
//       return this.age = val;
//     }else if (k == "" || k == null || k == undefined){
//       return "chose the property to change, and  add the value by separating them by commas(key, value)"
//     }else{
//       return " check your code";
//     }
//   }
// }

// let bruno = new student("mars","male", 33);
// student.message = "juju!!";
// console.log(bruno.message);

// console.log(bruno.change("", 50));
// console.log(person.name);
// console.log(person["name"]);
// let i;
// let u = [];
// for(i in person){
//   u.push(i, person[i]);
// }
// console.log(u);

// let z = Object.keys(person);
// let z = Object.getOwnPropertyNames(person);
// console.log(z);
// let w = Object.values(boy);
// console.log(JSON.stringify(w));

// Javascript accessor (getters and setters)


// let girl = {};

// Object.defineProperties(girl,{
//   bags :{
//     value : 4,
//     writable : true,
//     configurable : false,
//     enumerable : true
//   },
//   wigs : {
//     value : 10, 
//     writable : true,
//     configurable : false,
//     enumerable : false
//   }
// })

// console.log(girl);
//O
// let nem = Object.create(boy);
// console.log(Object.getPrototypeOf(nem));


// const phone = {
//   name : "Sony",
//   year : 2018
// };

// let techno = Object.create(phone); 

// Object.defineProperties(phone,{
//   stock :{
//     value : 500,
//     writable : false,
//     configurable : false,
//     enumerable : true
//   },
//   name : {
//     value : "Techno",
//     writable : false,
//     configurable : false,
//     enumerable : true
//   }

// });

// techno.name = "Techno A300";
// techno.year = 2030;
// techno.stock = 500;

// console.log(techno.name)

/* Object.getPrototypeOf(child_object);
 helps to get the prototype of ( properties and values) of the object specified;
 */
// console.log(Object.getPrototypeOf(techno));


/* parent_obj.isPrototypeOf(child_obj);
It helps to check if the "parent_object" is a prototype of or for the "child_obj"
*/
// console.log(phone.isPrototypeOf(techno));

// ===================================
// let child = {
//   name : "frank",
//   age : 12 
// };

// An object is extensible if new properties can be added to it. Object.preventExtensions() marks an object as no longer extensible, so that it will never have properties beyond the ones it had at the time it was marked as non-extensible.
// Object.preventExtensions(child);

// child.name = "garry";
// child.dreams = "Pilot";
// child.travel = "sweden";
// delete child.age;
// console.log(child);

// ===================================
// in the example above we can see that we can not add new properties to "child" object that's the function of Object.preventExtensions(..); 
// PLS Note it doesn't prevent one from rewriting or changing the value of an existing property or deleting a property in the object... as show in the above example changing the value of the property name in (child.name = "garry");


// Object.isExtensible(phone);
// Object.isExtensible(..) helps to check if an object is extensible (if we could add new properties to it)
// console.log(Object.isExtensible(phone));

// ==================================

// The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.
// Object.seal(child);

// child.calling = "Dev Ops";
// child.stage = "adult";
// child.age = 33;
// delete child.age;
// console.log(child);

// Object.isSealed(..) helps to check if an object is Sealed
// console.log(Object.isSealed(child));

// =====================================

// The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.

// Object.freeze(child);
// child.name = "Baby_boo";
// child.bake = true;

// delete child.age;
// console.log(child);

// let teenAger = Object.create(child);
// teenAger.petName = "Baby_boo";
// teenAger.bake = true;

// console.log(teenAger);
// console.log(Object.getPrototypeOf(teenAger));


// Object.isFrozen(..) helps to check if an object is frozen (Object.freeze(obj));
// console.log(Object.isFrozen(teenAger));
// console.log(Object.isFrozen(child));

// Function

// function Declaration
// function read(){
//   return "Documentations";
// }
// read();

// function Expression
// let dev = function(){
//   return "solve problems with code";
// }
// dev();

// let add = new Function("a","b","c", "return a + b + c");

// console.log(add(3,3,3));


// Self-Invoking Functions

// Function expressions can be made "self-invoking".

// A self-invoking expression is invoked (started) automatically, without being called.
// (function(){console.log("I call mySelf")}());
// or
// (function(){console.log("I call mySelf")})();


// The arguments.length property returns the number of arguments received when the function was invoked:
// function myFunction(a,b,c){
//   return arguments.length;
// }
// console.log(myFunction(3,4,5));

// Arrow Functions

// Arrow functions allows a short syntax for writing function expressions.
// const printName = a => a;
// const fullName = (firstName,lastName) => firstName + lastName;

// =========================================
// The JavaScript call() Method

// The call() method is a predefined JavaScript method.
// It can be used to invoke (call) a method with an owner object as an argument (parameter).

// With call(), an object can use a method belonging to another object.


const student = {
  fullName : function (){
    return this.firstName + " " + this.lastName;
  }
}

let student1 = {
  firstName : "charlie",
  lastName : "zusu"
}
let student2 = {
  firstName : "chris",
  lastName : "james"
}

console.log(student.fullName.call(student1));
console.log(student.fullName.call(student2,"hmmm"));


let personalDetails = {
  details : function(){
    return this.firstName + " " + this.secondName + ", " + state + "," + country;
  }
}

let migrant1 ={
  firstName : "prince",
  secondName : "boby"
}

let migrant2 ={
  firstName : "baby",
  secondName : "viola"
}

// console.log(personalDetails.details.call(migrant1, "lagos", "Nigeria"));
// console.log(personalDetails.details.call(migrant2, "benjin", "southAsia"));


// the apply() method, you can write a method that can be used on different objects.+


console.log(personalDetails.details.apply(migrant1, ["lagos", "Nigeria"]));