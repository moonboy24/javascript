// Event Listeners - Listen for specific events to create interactive web pages
//                   events : click , mouse over , mouse out
//                   .addEventListener (event, callback);

const myBox = document.getElementById(`myBox`);
const myBtn = document.getElementById(`myBtn`)

myBtn.addEventListener("click" , event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH 😜"
})

myBtn.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "pink";
    myBox.textContent = "Ohhh 😉"
})

myBtn.addEventListener("mouseout" , event =>{
    myBox.style.backgroundColor = "gray";
    myBox.textContent = "Click Me 😎"
})