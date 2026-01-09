const user = {
    username: 'Anupam',
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Dustin"
// user.welcomeMessage()

// console.log(this);  // global object but for browser it's window object; window is the global object

// function One(){
//     let username = "Anupam"
//     console.log(this.username);// this will not work here because this is not bound to the object
// }
// One()

// const One = function(){
//      let username = "Anupam"
//     console.log(this.username);
// }
// One()

const One = () => {
     let username = "Anupam"
    console.log(this);
}
// One()

// const addTwo = (num1 , num2) => {
//     return num1+num2 // explicit return
// }


// const addTwo = (num1 , num2) => num1+num2// implicit return
// const addTwo = (num1 , num2) => ( num1+num2 )// implicit return with parentheses
const addTwo = (num1 , num2) => ({username: "Anupam"})

console.log(addTwo(3,4))