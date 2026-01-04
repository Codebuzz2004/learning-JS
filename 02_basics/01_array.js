// array

const myArr = [0, 1, 2, 3, 4]
const myHeros = ['spiderman', 'ironman', 'thor']

const myarr2 = new Array(1,2,3,4)
// console.log(myArr[3]);

// Array methods

myArr.push(5) // adds at the end
myArr.pop() // removes from the end

myArr.unshift(-1) // adds at the beginning
myArr.shift() // removes from the beginning

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(1));

// const newArr = myArr.join()// coverts into string

// console.log(myArr);
// console.log(newArr);

// slice, splice

const newArr2 = new Array(1,2,3,4,5,6)

const subArr = newArr2.slice(1, 4)// does not modify the original array and not inclusive of end index
console.log(subArr);
console.log("A", newArr2);

// splice can add, remove or replace elements in an array 
// syntax: array.splice(start, deleteCount, item1, item2, ...)
const subArr2 = newArr2.splice(0, 4)// modifies the original array and here 0 is starting index and 4 is number of elements to be removed
console.log(subArr2);
console.log("B", newArr2);