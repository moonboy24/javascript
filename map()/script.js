// map() - accepts a callback and applies that function to each element of an array , then returns a new array

// const numbers = [1 , 2 , 3];
// const cubes = numbers.map(square);
// console.log(cubes);
// function square(element){
//     return Math.pow(element , 2);
// }
// function cube(element){
//     return Math.pow(element , 3);
// }



// const students = ["sponge" , "jeni" , "mia"];
// const stuUppercase = students.map(uppercase);
// const stuLowercase = students.map(lowercase);

// console.log(stuUppercase);
// console.log(stuLowercase);

// function uppercase(element){
//     return element.toUpperCase();
// }

// function lowercase(element){
//     return element.toLowerCase();
// }


const dates = ["2026-01-01" , "2026-01-02" , "2026-01-03"];
const formatted = dates.map(formatDate);

console.log(formatted);

function formatDate(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}