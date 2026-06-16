// DOM Navigation - The process of navigating through the structure of an HTML document using JS

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// .firstElementChild

const elements = document.getElementById(`desserts`);
const firstChild = elements.firstElementChild;
firstChild.style.backgroundColor = "yellow";

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElements=>{
    const firstChild = ulElements.firstElementChild;
    firstChild.style.backgroundColor = "red";
})

// .lastElementChild

const lastElement = document.getElementById(`fruits`);
const lastChild = lastElement.lastElementChild;
lastChild.style.backgroundColor = "green";

// .nextElementSibling

const nextElement = document.getElementById(`carrots`);
const nextSibling = nextElement.nextElementSibling;
nextSibling.style.backgroundColor = "pink";

// .previousElementSibling

const preElement = document.getElementById(`cookies`);
const preSibling = preElement.previousElementSibling;
preSibling.style.backgroundColor = "grey";

// .parentElement

const parelement = document.getElementById(`apple`);
const parent = parelement.parentElement;
parent.style.backgroundColor = "blue";

// .children

const childElement = document.getElementById(`fruits`);
const children = childElement.children;

Array.from(children).forEach(child=>{
    child.style.backgroundColor = "purple";
})

children[1].style.backgroundColor = "green";