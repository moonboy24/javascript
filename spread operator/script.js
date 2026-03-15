// Spread Operator - ... allows an iteration as an array or string to be seperated into
//                   expanded into seperate elements (unpack the elements)

let fruits = ["Melons" , "Apple" , "Cherry"];
let veggies = ["Carrot" , "Onion" , "Eggs"];
let foods = [...fruits , ...veggies];
console.log(foods);

let numbers = [1 , 2 , 3];
console.log(...numbers , 5 , 6);

let username = "keerthi";
let letters = [...username].join("-");
console.log(letters);