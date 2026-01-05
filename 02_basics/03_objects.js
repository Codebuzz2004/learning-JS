// singleton
// Object.create

// object literals

const mysym = Symbol("key1")

const JsUser = {
    name: "Anupam",
    "full name": "Anupam Mondal",
    [mysym]: "mykey1",
    age: 21,
    location: "Kalyani",
    email: "anupam@gmail.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Saturday"],
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);

JsUser.email = "anupam@outlook.com"
// Object.freeze(JsUser)
JsUser.email = "anupam@hotmail.com"
console.log(JsUser);


JsUser.greetings = function() {
    console.log(`Hello ${this.name}`);
    }

JsUser.greetings()