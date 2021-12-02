// function change(){
//     document.getElementById('de').innerHTML = 'so this should change';
// }

// document.write("Welcome Back!");
// window.alert("Now you see this");
// // window.prompt("Now you see this");
// console.log("This is how a console works");

// document.getElementById('de').innerHTML = 'Now You See Me';

// var studentName = "Chizoba";
// var studentName;
// let studentName = "Chizoba";
// let studentName;
// const studentName = "Chizoba";
// const studentName;

// console.log(studentName);

// conducting arithmetic operation
// let x = 2 + 2;
// let x = 2 + 2;
// let x = "12" / 2;// using -, *, / would result in the conversion of number string to an integer before it's been evaluation. 
// let x = "Romeo" - 2; // this will result in not a number since "romeo" is a string and con't be converted to a string.
// document.write(x);
// let num = 20 % 11;
// console.log(num);

// Function 
//It is used to perform a specific task.


// function add(a, b){
//     return a + b ;
// }
// console.log(add(4,3));

// write a function that can add, subtract, multiply, or even divide any number

// function simpleMathProblem(value1, operator, value2){ // *, /, +, -, %
//     if(operator == "+" || operator == "add"){
//         return value1 + value2;
    
//     }else if (operator == "-" || operator == "subtract"){
//         return value1 - value2;
    
//     }else if (operator == "*" || operator == "multiply"){
//         return value1 * value2;
    
//     }else if (operator == "/" || operator == "divide"){
//         return value1 / value2;
    
//     }else if (operator == "%" || operator == "modulus"){
//         return value1 % value2;
    
//     }
// }
// console.log(simpleMathProblem(12,"divide",4));

// switch

    // function simpleSwitchMathProblem(value1, operator, value2){

    //     switch(operator){
    //     case operator == "+" || operator == "add":
    //         return "value1 + value2 ";
    //     break;
    //     case operator == "-" || operator == "subtract":
    //         return value1 - value2 ;
    //         break;
        

    //     }

    // }
// console.log(simpleSwitchMathProblem(2, "+", 3));

// Hoisting 
// let carName;
// console.log(carName);
// carName = "volvo";

// Objects

// let person = {
//     name: "shola",
//     age : 23,
//     school : "cu collage",
//     email : "shola13@gmail.com", 
// }
// write a function that takes a string and determine the number of substrings in it: for example [if you have a banana and someone told you to find na the function should return 2]

// function substring(string, substring){
//     let result = 0;
    
//         // if (string.includes(substring)){
//         //     result = substring.length;
//         // }else{
//         //     result = 0;
//         // }
//     //    result = string.includes(substring) ? substring.length : 0;
    

//     return result;
// }
// console.log( substring("walet","al"));

// function substringPosition( string, position){
    //     let result = 0;
    //    result = string[position];
    //     return result;
    // }
    // console.log(substringPosition("malek", 2));
    
    function substringFinder(word, substring){
        let result = 0;
        for (let i = 0; i < word.length; i++ ){
            if (word.includes(substring)){
                result = word.includes(substring) += 1;
            }else{
                result = 0;
            }
           //result = string.includes(substring) ? substring.length : 0;
        }
        
    
        return result;
    }
    // console.log( substringFinder("bananana","na"));


    // 1) String Methods

    // string Length for Example

    // let text = "abcdefghijklmnopqrstuvwxyz";
    // console.log(text.length );

    //2) IndexOf()
    //  let str = "Where you go i will follow no matter how far ";
    //  console.log(str.indexOf("i"));
    //  let man = "chinedu";
    //  console.log(man.length);

    // 3) lastIndexOf()
    // this method finds the last occurrence a word in a given string
    // let word = "The rain is of the rain that rains";
    // console.log(word.lastIndexOf("rain", 6));

    // 4) search()
    // this method searches for a word in a given sting and return the index position of the match
    // let people = "we are the world";
    // console.log(people.search("are"));
    
    // Extracting String parts 
    // There are 3 methods for extracting a part of a string: slice(start,end), substring(start,end), Substr(start,length);

    // slice()  extracts a part of a string and returns the extracted part in a new string.
    // Example 1
    let people = " we are the world ";
    // let result = people.slice(3,10);
    // console.log(result);
    // console.log(people);
    
    // Example 2
    // let result = people.slice(-5,-2);
    // console.log(result);
    
    // substring()
    // let result = people.substring(8);
    // console.log(result);
    // console.log(people);
    
    // substr()
    // let result = people.substr(-3,3);
    // console.log(result);
    // console.log(people);

    // Replacing a string content

    let words = "it is best before time friend finds best match";
    // let Rname = words.replace(/best/g, "good");
    // console.log(Rname);
    // console.log(people.trim());
    // let wd = "567873";
    // console.log(wd.padStart(6,0));
    // console.log(wd.padEnd(9,0));

    let wfr = "Hello World";
    // let result = wfr.charCodeAt(2);
    // console.log(result);

    let tosplit = words.split(' ');
    console.log(tosplit);

    console.log(typeof NaN);

  
   