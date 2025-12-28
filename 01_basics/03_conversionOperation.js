let score = "33abc"

// const {score} = req.body

console.log(typeof score)
// console.log(typeof (score))// can be written like this like module

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber);// give NaN , its not a number


let score1 = null

console.log(typeof score1)

let valueInNumber1 = Number(score1)

console.log(typeof valueInNumber1)
console.log(valueInNumber1);

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

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)