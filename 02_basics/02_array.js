const marvel_heros = ["Ironman", "Spiderman", "Thor"]
const dc_heros = ["Superman", "Batman", "Flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// Output: [ 'Ironman', 'Spiderman', 'Thor', [ 'Superman', 'Batman', 'Flash' ] ]
// The dc_heros array is added as a single element at the end of the marvel_heros array.

//concat method
const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// Output: [ 'Ironman', 'Spiderman', 'Thor', 'Superman', 'Batman', 'Flash' ]
// The concat method merges the two arrays into a single array without nesting.

//spread operator
const all_heros2 = [...marvel_heros, ...dc_heros]
// console.log(all_heros2);

// Output: [ 'Ironman', 'Spiderman', 'Thor', 'Superman', 'Batman', 'Flash' ]
// The spread operator expands the elements of both arrays into a new array. 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// Output: [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]
// The flat method with Infinity as an argument flattens all nested arrays into a single-level array.
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

console.log(Array.isArray("Raj"));
console.log(Array.from("Raj"));
console.log(Array.from({name: "Raj"})); //interesting case

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));