// Immediately Invoked Function Expressions (IIFE)
// It is used to remove the pollution caused by global scope's execution. Therefore it is executed immediately.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //Add ; to end execution of this function

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')