// const tinderUser = new Object();// Object constructor syntax//singleton object
const tinderUser = {}; // Object literal syntax//non-singleton object

tinderUser.id = '123abc';
tinderUser.name = 'Sammy';
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstName: "Anupam",
            lastName: "Mondal"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstName);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj4 = {5: "e", 6: "f"};

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2, obj4);// here obj1 is target object
// const obj3 = Object.assign({}, obj1, obj2, obj4);// here empty object is target object

const obj3 = {...obj1, ...obj2, ...obj4};// spread operator

// console.log(obj3);
 


const users = [
    {id : 1,
        email : "a@gmail.com",
    },
    {id : 2,
        email : "b@gmail.com",
    },
    {id : 3,
        email : "c@gmail.com",
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));// true
console.log(tinderUser.hasOwnProperty('age'));// false