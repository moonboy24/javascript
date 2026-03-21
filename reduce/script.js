// reduce - reduces the element of an array into a sinlge value
// accumulator => previous element
// element => next element


// Example 1 

const prices = [5 , 10 , 25 , 30 ,40];
const toatal = prices.reduce(sum);

console.log(`₹${toatal.toFixed(2)}`);

function sum(previous , element){
    return previous + element;
} 

// Example 2

const grades = [75 , 90 ,80 ,85 , 95];
const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(previous , element){
    return Math.max(previous , element);
}

function getMin(previous , element){
    return Math.min(previous , element);
}