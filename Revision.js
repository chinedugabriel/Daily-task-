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
Json

*/


// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


// let person = {
//   name : "Gabriel",
//   age : "26",
//   sex : "male",
//   state : "Anambra"
// };

/*

"use strict"; Defines that JavaScript code should be executed in "strict mode".
The "use strict" Directive

The "use strict" directive was new in ECMAScript version 5.

It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

With strict mode, you can not, for example, use undeclared variables.


Future Proof!

Keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode.

These are:

    implements
    interface
    let
    package
    private
    protected
    public
    static
    yield

*/ 

// This Keyword
// Example of how "this" keyword is been used  

// var student = {
//   firstName: "John",
//   lastName : "Doe",
//   id       : 5566,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// }; 
// In other words: this.firstName means the firstName property of this (person) object.

// console.log(student.fullName());


// let nSet = new Set(days);

// nSet.add(days);
// nSet.delete("Friday");
// console.log(nSet.has("Friday"));
// console.log(nSet.delete("Friday"));

// console.log(nSet.size);
// console.log(nSet);

// let g = [];
// let t = 0 ;
// nSet.forEach((value) => g.push([t++ , value]));

// for (t of nSet.values()){
//   g.push(t)
// }

// console.log(g);

// let mtArr = [["name", "Gabriel"], ["age", 26], ["state", "us"], ["sex","male"]];

// let myMap = new Map(mtArr);
// myMap.set(1995, "Birth Day");
// myMap.delete("age");
// console.log(myMap.get(1995));

// let r;
// let u;
// let rst = [];

// for (r of myMap.entries()){
  // rst.push(r)
//   for(u of r){
//     rst.push(u);
//   }
// }

// console.log(rst);
// console.log(myMap.size);


// Arrow Functions () => ...;
// function myFunction(a){
//   return a * 2;
// }

// function myFunction(a, b){
//   return a + b;
// }

// let myFunction = function(){

// }

// let myFunction = () => a + b;

// let myFunction = a => a * 2;

// let myFunction = (a, b) => a + b;

// let myFunction = (a, b) => {
//   a + b
// };


//==================== class  ====================================
/* 
a class is a template for an object, that consist of instance properties and instance methods.

first step you define your class by using the class keyword followed by a colly_bracket "{}" and then inside the colly_bracket you specify the your instance properties by using the constructor() function and pass in the properties as an argument and store them with a name that is relevant to data but starting out using the "this" keyword then "."the relevant name you have chosen. examples are shown below 

*/
// class Item{
//   constructor(_name, _price){
//     this.name = _name;
//     this.price = _price;
//   }

//   getDetails(){
//     console.log(`The item ${this.name} is sold for $${this.price} it very affordable buy It now!!!`);
//   }

// }
// let textBooks = new  Item("Js_Mastery", 900);
// console.log(textBooks.name);
// console.log(textBooks.price);
// textBooks.getDetails();

// class FoodItems extends Item{
//   constructor(_name, _price, _quantity){
//     super(_name, _price);
//     this.quantity = _quantity;
//   }
//   getCost(){
//     return `The food items you purchased cost $${this.price * this.quantity}`;
//   }
// }

// let stew = new FoodItems("Fish", 15, 4);

// console.log(stew.name);
// console.log(stew.getCost());



// class Child{
//   constructor(_name,_year,_sex){
//     this.name = _name;
//     this.year = _year;
//     this.sex = _sex;
//   }
//   findAge(){
//     let date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }

// let student1 = new Child("Odilly",1995,"male");
// let student2 = new Child("Chineye",1993,"female");

// console.log(student1);
// console.log(student1.findAge());
// console.log(student2);
// console.log(student2.findAge());


// class Car{
//   constructor(_name, _year, _country, _price, _numberOfCars){
//     this.name = _name;
//     this.year = _year;
//     this.country = _country;
//     this.price = _price;
//     this.numberOfCars = _numberOfCars;
    
//   }
//   getAge(){//this fn is simply calculating the age of the car
//     let date = new Date();
//     return date.getFullYear() - this.year;
//   }
//   getDetails(){//this is given a brief description about the car...
//     return `This is ${this.name} made in ${this.country}, ${this.year} and was the best car at the time`;
//   }
//   buy(){
//     // let numbersOfCars = x;
//     return `Your purchase for ${this.numberOfCars} ${this.name}s was successful, Total cost = $${ this.price * this.numberOfCars} \n Your car would be shipped on monday`;
//   }
//   getCostOrBuy(y){// this fn is simply calculating the total cost of the car bought
//     let buyOrCost = y;
//     let result = "";
//     (buyOrCost === "buy")?result = this.buy():(buyOrCost === "cost")?result ="this would cost you "+ "$" + (this.price * this.numberOfCars): result = "wrong request";
//     return result;
//   }
// }

// let car1 = new Car("Range Rover", 2019, "Us",20000,4);
// console.log(car1);
// console.log(car1.getDetails());
// console.log(car1.getAge());
// console.log(car1.buy());
// console.log(car1.getCostOrBuy("cost"));
// console.log(car1.getCost("buy"));


// let car2 = new Car("Benz", 2017, "Uk");
// console.log(car2);

// Example 2 ==>> Inheritance (extends)

/*
class Items{
  constructor(_name, _year, _country, _price, _numberOfItems){
    this.name = _name;
    this.year = _year;
    this.country = _country;
    this.price = _price;
    this.numberOfItems = _numberOfItems;
    
  }
  getAge(){//this fn is simply calculating the age of the item
    let date = new Date();
    return date.getFullYear() - this.year;
  }
  getDetails(){//this is given a brief description about the item...
    return `This is ${this.name} made in ${this.country}, ${this.year} and was the best ${this.name} at the time`;
  }
  buy(){
    // let numbersOfCars = x;
    return `Your purchase for ${this.numberOfItems} ${this.name}s was successful, Total cost = $${ this.price * this.numberOfItems} \n Your ${this.name} would be shipped on monday`;
  }
  getCostOrBuy(y){// this fn is simply calculating the total cost of the car bought
    let buyOrCost = y;
    let result = "";
    (buyOrCost === "buy")?result = this.buy():(buyOrCost === "cost")?result ="this would cost you "+ "$" + (this.price * this.numberOfItems): result = "wrong request";
    return result;
  }
}

let car1 = new Items("Range Rover", 2019, "Us",20000,4);
// console.log(car1);
// console.log(car1.getDetails());
// console.log(car1.getAge());
// console.log(car1.buy());
console.log(car1.getCostOrBuy("cost"));
// console.log(car1.getCost("buy"));


// let car2 = new Car("Benz", 2017, "Uk");
// console.log(car2);

class House extends Items{
  constructor(_name,_year,_country,_price,_numberOfItems){
    super(_name,_year,_country,_price,_numberOfItems);
  }
}

let house1 = new House("white_house", 2019, "Nigeria", 700000, 2);

// console.log(house1);
console.log(house1.getCostOrBuy("cost"));
// console.log(house1.getDetails());
// console.log(house1.getAge());


class Laptop extends House{
  constructor(_name,_year,_country,_price,_numberOfItems){
    super(_name,_year,_country,_price,_numberOfItems);
  }
}

let hp = new Laptop("Hp_ZeeBook", 2018, "Us", 2050, 3);

console.log(hp.getDetails());

*/
///================================================
// class Person{
//   constructor(_name){
//     this.name = _name;
//   }
//   greet(){
//     console.log(`Hi ${this.name}`);
//   }
// }

// class Student extends Person{
//   constructor(_name,_school){
//     super(_name);
//     this.school = _school;
//   }
// }
// let person1 = new Person("charls Nonso");
// person1.greet();

// let student1 = new Student("Chris Emmanuel","Finland Uni");
// student1.greet();
// console.log(student1.school);

// class Staff extends Student{
//   constructor(_name,_school,_dateOfBirth){
//     super(_name, _school);
//     this.dateOfBirth = _dateOfBirth;
//   }
//   greet(){
//     console.log(`Hello ${this.name}, \n Hope you're good`);
//     console.log(`Hope ${this.school} was great today`)
//   }

// }

// let teacher = new Staff("Kunle James", "StandFord Uni", 1955);
// teacher.greet();

// Getters And Setters
//  class Music{
//   constructor(_name, _style, _year, country){
//     this.name = _name;
//     this.style = _style;
//     this.year = _year;
//     this._country = country;
//   }
//   musicDetails(){
//     console.log(`Here's a ${this.style} song called ${this.name}, produced in ${this.year}`);
//   }

//   get country () {
//     return this._country;
//   }

//   set country (x) {
//     this._country = x;
//   }

//  }

//  let artist = new Music("Adekule_Gold", "Afro_PoP",2017,"brazil");
//  artist.country = "Nigeria"; 
//  console.log(artist.country);
 
// class Hairstyle extends Music{
//   constructor(_name, _style, _year, Country){
//     super(_name, _style, _year, Country);
//   }
//   static details(x){
//     return "Hey lovely Hair style you got there" +  x.style;
//   }
// }

// let Wig = new Hairstyle("indianWig","bea",2020,"india");

// console.log(Hairstyle.details(Wig));

// class History{
//   constructor(_nameEvent, _year, _impact){
//     this.name = _nameEvent;
//     this.year = _year;
//     this.impact = _impact;
//   }
//   static impactOfEvent(x){
//     return `During the year ${x.year} the ${x.impact} was an historical technology and man kind can never forget the great ${x.name}`;
//   }
// }
// let mobilePhone = new History("Gabriel",2023,"mix.js");
// console.log(History.impactOfEvent(mobilePhone));

class Product{
  constructor(_name, _price, _model){
    this.name = _name;
    this.price = _price;
    this.model = _model;
  }
  details(){
    return `the ${this.name}_ ${this.model} is one of the best ${this.name} in the market that cost about $${this.price} which is affordable for everyday everyone`;
  }
}

// let iphone = new Product("iphone", 250, "13");
// console.log(iphone.name);
// console.log(iphone.details());

class Services extends Product{//service is a child class to product class
  constructor(_name, _price, _model){
    super(_name,_price, _model);
    this._plan = _model;
  }
  get plan(){
    return (this._plan === "starter_plan" || this._plan === "starter") ? "the training for starter plan would last for 3 weeks ": (this._plan === "silver_plan" || this._plan === "silver") ? "the training for silver plan would last for 1 month and 3 weeks ": (this._plan === "gold_plan" || this._plan === "gold") ? "the training for gold plan would last for 3 month with mentors ready to assist you all the way": "pls chose a plan";
  }
  set plan(x){
    this._plan = x;
  }
  details(){
    return `${this.name} is a life style, for we are made by the greatest artist God`;
  }
  static review(t){
   let txt = t; 
    return (txt.constructor.toString().indexOf("String") & txt.length > 1 )? txt + "\n Thanks for your review": (txt == undefined) || (txt === "")? "Kindly drop a review": "you didn't add a text";
  }// here i created a static instance method 

}
// plans => starter_plan(3_week), silver_plan(1_month_3_weeks), gold_plan(3_months)
// let teaching = new Services("arts", 1000, "silver_plan");
// console.log(teaching.details());
// teaching.plan = "gold";
// console.log(teaching.plan);
// console.log(Services.review("wow i really enjoyed my class to day with my mentor"));

//private class 
class NigerianBanks{
  #name = "Access_bank";
  constructor(_customers,_branch){
    this.customers = _customers;
    this.branch = _branch;
  }
  // #name(){ // private method
  //   return this.#name;
  // }
  static #getname(){ // private static method
    return this.#name;
    /*
    Private static methods
Like their public equivalent, private static methods are called on the class itself, not instances of the class. Like private static fields, they are only accessible from inside the class declaration.
    */
  }

}

let first = new NigerianBanks(34000,"lagos");
// console.log(first.#name);// this will produce a SyntaxError
console.log(NigerianBanks.#getname());