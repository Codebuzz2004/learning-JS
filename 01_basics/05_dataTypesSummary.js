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