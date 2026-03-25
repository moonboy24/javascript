// Arrow function - a concise way to write function expressions good for simplw
//                  functions that you only use once
//                  (parameters) => some code


// Normal Method
const hello = function(){
    console.log("hello");
}
hello();

// Arrow function

// Example 1

const arigato = () => console.log("Arigato");
arigato();

const userArigato = (name,age) => {
    console.log(`you are ${name}`) 
    console.log(`Your age is ${age}`);
}

userArigato("Keerthivasan" , 20);

// Example 2

setTimeout(() => console.log(`Hii`), 3000);

// Example 3

const numbers = [1 , 2 , 3 , 4 , 5];

const squares = numbers.map((element) => Math.pow(element , 2));
const cubes = numbers.map((element) => Math.pow(element , 3));
const evenNums = numbers.filter((element) => element %2 === 0 );
const oddNums = numbers.filter((element) => element %2 !== 0);
const total = numbers.reduce((previous , element) => {
    return previous + element;
});

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);
