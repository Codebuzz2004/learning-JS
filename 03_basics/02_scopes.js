// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    // console.log('INNER: ', a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Anupam"

    function two(){
        const website = "anupam.com"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

if (true){
    const username = "Anupam"
    if(username === "Anupam"){
        const website = " youtube"
        console.log(username + website); 
    }
    // console.log(website);  
}
// console.log(username);

// ++++++++++++++++++++interesting +++++++++++++++++++

addOne(5) // works because of hoisting
function addOne(num){
    return num + 1
}

addTwo(3) // error: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
