// # Primitive Data Types

// 7 types of data types in JS which are primitive data types
//  example 
// 1. String, 2. Number, 3. Boolean, 4. null, 5. undefined, 6. Symbol, 7. BigInt

// Reference Data Types (non-primitive data types)

// Array, Object literals, Functions, Dates, etc'

const heros = ["shaktiman", "naagraj", "doga"]; // array
let myObj = {        // object is always in curly braces ,  object is key value pair  
    name: "Anmol",
    age: 24,
}

const myFunction = function() {  // function
    console.log("hello world");
}
console.log(typeof myFunction); // function
console.log(myFunction); // [Function: myFunction]
myFunction(); // hello world