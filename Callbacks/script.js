// Callbacks - A function that is passed as an argument to another function

// Used to handle asynchronous operations:
// 1. Reading a file
// 2. Network request
// 3. Interacting with database

// "Hey, when you're done , call this next."

sum(displayPage , 3 ,4);

function sum(callback , x , y){
    let result = x+y;
    callback(result);
}

function displayPage(result){
    document.getElementById(`myH1`).textContent = result;
}