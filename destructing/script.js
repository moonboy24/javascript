// Destructing - Extract values from arrays and objects , then assign them to variables in a conveninent way
//              [] - to perform array destructing
//              {} - to perform object destructing

// Example 1
// Swap the value of variables 

let a = 1;
let b = 2;

[a,b] = [b,a];

console.log(a);
console.log(b);

// Example 2
// Swap 2 elements in an array

const colors = ["red" , "green" , "blue" , "black" , "white"];
[colors[0] , colors[2]] = [colors[2] ,colors[0]]

console.log(colors);

// Example 3
// Assign array elements to variable

const color = ["red" , "green" , "blue" , "black" , "white"];

const [firstColor , secColor , thirdColor , ...extaColor] = color;

console.log(firstColor);
console.log(secColor);
console.log(thirdColor);
console.log(extaColor);

// Example 4
// Extract values from objects

const person1= {
    firstName : "Spongebob",
    lastName : "Squarepants",
    age : 30,
    job : "AI Developer",
}

const person2= {
    firstName : "Patrick",
    lastName : "Squarepants",
    age : 34,
}

const {firstName , lastName , age , job = "Unemployed"} = person2 ;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// Example 5
// Destructure in function parameters

function displayPerson({firstName , lastName ,age, job = "Unemployed"}){
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age : ${age}`);
    console.log(`job : ${job}`);
}

const person3= {
    firstName : "bob",
    lastName : "Squarepants",
    age : 30,
    job : "AI Developer",
}

const person4= {
    firstName : "rick",
    lastName : "Squarepants",
    age : 34,
}

displayPerson(person4);