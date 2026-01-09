//Immediately Invoked Function Expression (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`)
})();//need ; to end the funtion 
//used to avoid polluting global scope and immediately execute code

((name) => {
    console.log(`DB CONNECTED USING ARROW FUNCTION ${name}`)
})("Anupam");