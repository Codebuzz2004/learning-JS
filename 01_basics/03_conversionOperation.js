let score = "33abc"

// const {score} = req.body

//console.log(typeof score)
// console.log(typeof (score))// can be written like this like module

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber);// give NaN , its not a number


let score1 = null

// console.log(typeof score1)

let valueInNumber1 = Number(score1)

// console.log(typeof valueInNumber1)
// console.log(valueInNumber1);

/* for undefined the result will be 
undefined 
number
NaN
for boolean the result will be(true/false)
boolean
number
1/0
also check for string ......
*/

/*  notes
"33" => 33
"33abc" => NaN
ture => 1; false => 0;
*/

let isLoggedIn = "Raj"

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)


// 1 => true; 0 => false
// "" => false
// "Raj" => true

let someNumber = 42
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ************* OPERATIONS *******************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2*2);
// console.log(2**3);
// console.log(3/2);
// console.log(3%2);

let str1 = "Hello"
let str2 = " Raj"
let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 //not a good code

let gameCounter = 100;
gameCounter++
console.log(gameCounter);
//  read incremental operator postfix and prefix