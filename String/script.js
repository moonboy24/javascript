// String Slicing - Used to create a sub string from a portion of a string

const fullName = "Kevin May"

// Use method only if they are static and well known of the string or for few strings
// let firstName = fullName.slice(0 , 5);
// let lastName = fullName.slice(6,9);

// Use this method for dynamic slicing of string 
let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);                                         