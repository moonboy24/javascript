// sort - method used to sort elements of an array in place.
//        sort elements as strings in lexicographic order , not alphabetical
//        lexicographic = (alphabets + numbers + symbols) as strings 

// Exmaple 1

// let fruits = ["apple" , "melons" , "grapes" , "banana"];
// let numbers = [1 , 10 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ];

// fruits.sort();
// numbers.sort((a , b) => b - a);
// console.log(fruits);
// console.log(numbers);


// Example 2

const people = [{name : "sponge" , age : 30 , gpa : 8.4} ,
                {name : "patrick" , age : 31 , gap : 8.6}  , 
                {name : "lisa" , age: 25 , gpa : 9.00} ,
                {name : "mia" , age : 35 ,  gpa : 9.1}];

// people.sort((a , b) => b.age - a.age);
people.sort((a , b) => a.name.localeCompare(b.name));

console.log(people);