let score = "33" 

console.log(typeof score);// 
console.log(typeof(score)); //

// if we want to do operaton on only number tahm...

let valueInNumber = Number(score); // convert string to number
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN -> not a number


let somenumber1 = 1234

let stringNumber = String(somenumber1); // convert number to string
console.log(typeof stringNumber);
console.log(stringNumber); // 1234 


let somenumber = 1234

let stringNumber1 = String(somenumber); // convert number to string
console.log(typeof stringNumber1);
console.log(stringNumber1); // 1234

// **************************Operations in js****************************

let value = 3
let negValue = -value
console.log(negValue); // -3


let str1 = "Hello"
let str2 = " Anmol"
let str3 = str1 + str2 // concatenation
console.log(str3); // Hello Anmol

console.log("1"+ 5);
console.log("1"+ "5");
console.log(1 + 5 + "5");

let gameCounter = 100
gameCounter++;
console.log(gameCounter); // 101