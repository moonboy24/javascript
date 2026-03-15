// Rest parameters - (...rest) allow a function with a variable number of arguments by building them into an array
//Spread - expands an array into seperate element
// rest - bundles seperate elements into an array

// function openFridge(...foods){
//     console.log(...foods);
// }

// function getFoods(... food){
//     return food;
// }

// const food1 = "pizza";
// const food2 = "shrimp";
// const food3 = "kimchi";
// const food4 = "rice";
// openFridge(food1 , food2 , food3 , food4);
// const food = getFoods(food1 , food2 , food3 , food4);
// console.log(food);

function sum(... numbers){
    let result = 0;
    for(let number of numbers){
        result+= number;
    }
    return result;
}

function average(... numbers){
    let result = 0;
    for(let number of numbers){
        result+= number;
    }
    return result / numbers.length;
} 

function combineString(...strings){
    return strings.join("");
}


const fullName = combineString("Keerthi" , "vasan");
const averageTotal = average(100 , 99 , 80)
const total = sum(1 , 2 , 3 , 4);

console.log(`total is ${total}`);
console.log(averageTotal);
console.log(fullName);