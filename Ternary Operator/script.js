// Ternarry Operator - It is method to reduce the usage of If and Else

// Syntax - Condition ? conditionIfTrue : conditionIffalse;

// let age = 12;
// let message = age >= 18 ? "you are eligible" : "you are not eligible";
// console.log(message);

// let time = 16;
// let greeting =  time >= 12 ? "Good Afternoon" : "Good Morning";
// console.log(greeting);

// let isStudent = true;
// let message2 = isStudent ? "You are eligible for the test" : "you are not eligible for the test";
// console.log(message2);

let purchaseAmt = 100;
let discount = 10;
console.log(`Your total is $${purchaseAmt - purchaseAmt * (discount/100)}`);

// Instead of this usage we could use Ternary Operator

// if (purchaseAmt >= 100){
//     discount = purchaseAmt - purchaseAmt * (discount/100);
//     console.log(discount);
// }

// else{
//     console.log(`No discount`)
// }
