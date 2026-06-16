// EXAMPLE 1 <h1>

// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like Melons";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";


// STEP 3 APPEND . ELEMENT .TO.DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
document.getElementById(`box1`).append(newH1);
// document.getElementById(`box1`).prepend(newH1);

// const box4 = document.getElementById(`box4`);
// document.body.insertBefore(newH1, box4);

// const boxes = document.querySelectorAll(`.box`);
// document.body.insertBefore(newH1, boxes[3]);

// REMOVE HTML ELEMENT
// document.body.removeChild(newH1);
document.getElementById(`box1`).removeChild(newH1);


// Example 2

const newListItem = document.createElement("li");

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "green";

const cherry = document.getElementById(`cherry`);
document.getElementById(`fruits`).insertBefore(newListItem , cherry)

// document.body.append(newListItem);
// document.getElementById(`fruits`).append(newListItem);
// document.getElementById(`fruits`).prepend(newListItem);