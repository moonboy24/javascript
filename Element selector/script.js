// element selector - Method used to target and manipulate HTML elements
//                    They allow you to select one or multiple HTML elements 
//                    from the dom 

// document.getElementById(); - Element or null 
// document.getElementsByClassName(); - HTML collection
// document.getElementsByTagName(); - HTML collection
// document.querySelector(); - Element or Null
// document.querySelectorAll(); - Nodelist

const myHeading = document.getElementById(`my-heading`);
myHeading.style.backgroundColor = "red";
myHeading.style.textAlign = "center";
console.log(myHeading);


const fruits = document.getElementsByClassName(`fruits`);
for(let fruit of fruits){
    fruit.style.backgroundColor = "green";
}
console.log(fruits);


const h4Elements = document.getElementsByTagName(`h4`);
const liElements = document.getElementsByTagName(`li`);
Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "green";
})
Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "green";
})
console.log(h4Elements);

const element = document.querySelector(".fruits");
element.style.backgroundColor = "yellow";

const elements = document.querySelectorAll("li");
elements[1].style.backgroundColor = "blue";
console.log(elements);
elements.forEach(element1 => {
    element1.style.backgroundColor = "blue";
})