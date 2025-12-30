//  Primitive 
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference (Non Primitive)
// Array, Objects, Functions

// js is dynamically typed language

// examples of Primitive datatype

const score = 200
const scoreValue = 200.5

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 4658764687n
console.log(typeof bigNumber);


// ****Examples of Non-Primitive (references)****

const heros = ["Shaktiman", "Naagraj", "Doga"]

let myObj = {
    name: "Raj",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

//  datatypes of all non-primitive functions are object
// for functions datatype is function object


// ++++++++++ STACK AND HEAP MEMORY +++++++++++++++++

// Stack(Primitive), Heap(Non-primitive)


// stack the original value will not change , a copy is send to use
let myName = "Anupam"
let anotherName = myName
anotherName = "Raj"

console.log(myName);
console.log(anotherName);


// Heap the original value is changed , here reference of the data is used
let user1 = {
    email: "Anupam@gmail.com",
    upi: "user@slc",
}
let user2 = user1

user2.email = "Raj@gmail.com"
console.log(user1.email);
console.log(user2.email);