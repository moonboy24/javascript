// Function declaration - define a reusable block of code that performs a specific task
// Function expression - a way to define functions as values or variable

// 1. callbacks in asunchronous operation
// 2. higher order functions
// 3. clouser
// 4. event listener

const numbers = [1 , 2 , 3 , 4];
const squares = numbers.map(function (element){
    return Math.pow(element , 2);
});

const cubes = numbers.map(function (element){
    return Math.pow(element , 3);
})

const evenNums = numbers.filter(function (element){
    return element %2 === 0;
})

const oddNums = numbers.filter(function(element){
    return element %2 !== 0;
})

const sum = numbers.reduce(function(previous , element){
    return previous + element;
})

const multiply = numbers.reduce(function(previous , element){
    return previous * element; 
})

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(sum);
console.log(multiply);



const hello = function(){
    console.log("Hello");
}

setTimeout(function(){
    console.log("Arigato");
}, 3000);