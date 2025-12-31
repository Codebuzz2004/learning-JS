const name = "Raj"
const repoCount = 2

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//  this method is called string interpolation

const gameName = new String("Ultron_Flanker_Raj")

// console.log(gameName[3]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-3,5)
console.log(anotherString);

const newString1 = "    RAJ    "
console.log(newString1);
console.log(newString1.trim());


const url = "https://anupam.com/anupam%20mondal"

console.log(url.replace('%20', '-'));

console.log(url.includes('raj'));
// check if the string is in the url

console.log(gameName.split('_'));