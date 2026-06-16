// DOM - Document Object Model
// Object () that represents the page you see in the web browser and provides you with an API to interact with it
// Web Browsers construct the DOM when it loads an HTML Document, 
// and Structures all the elements in a tree-like representation
// Js can access the DOM to dynamically change the content , structure , and style of a web page

const username = "Keerthivasan";
const welcomeMsg = document.getElementById(`welcome-msg`);

welcomeMsg.textContent += username === "" ? `Guest` : username;

console.dir(document);