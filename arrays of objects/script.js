
const fruits = [{name : "apple" , color : "red" , calories : 95 } , 
                {name : "melons" , color : "green" , calories : 200} , 
                {name : "Plum" , color : "orange" , calories : 150} , 
                {name : "cherry" , color : "red" , calories : 80} , 
                {name : "grapes" , color : "violet" , calories : 98},
                {name : "banana" , color : "yellow" , calories : 99}];

// console.log(fruits[0].calories);

// fruits.push();
// fruits.pop();
// fruits.splice(1 ,2);

console.log(fruits);

// froEach()

// fruits.forEach(fruits => console.log(fruits));

// Map

// const fruitNames = fruits.map(fruits => fruits.name);
// const fruitColors = fruits.map(fruits => fruits.color);

// console.log(fruitNames);
// console.log(fruitColors);

// Filter

// const yellowFruit = fruits.filter(fruit => fruit.color === "red");
// const highCal = fruits.filter(fruit => fruit.calories > 100);
// const lowCal = fruits.filter(fruit => fruit.calories < 100);

// console.log(yellowFruit);
// console.log(highCal);
// console.log(lowCal);

// reduce

const maxFruit = fruits.reduce((max , fruit) => fruit.calories > max.calories ? fruit : max);
const minFruit = fruits.reduce((min , fruit) => fruit.calories < min.calories ? fruit : min);

console.log(maxFruit);
console.log(minFruit);