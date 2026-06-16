// Set timeout - Function in JS that allows you to schedule the execution
//               of a function after an amount of time (ms)
//               Times are approximate(varies based on the workload of the JS runtime env)
//               setTimeout(callback, delay);
// clearTimeout(timeoutID) - can cancel a timeout before it triggers

// Example 1

// function sayHello(){
//     window.alert("Hello;")
// }

// setTimeout(sayHello , 3000);

// setTimeout(function(){
//     window.alert("Hiii")
// },10000)


// Example 2

let timeoutID;

function startTimer(){
    timeoutID = setTimeout(() => window.alert("Hello") , 3000);
    console.log("Started")
}

function endTimer(){
    clearTimeout(timeoutID);
    console.log("cleared")
}