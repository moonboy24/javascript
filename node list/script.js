// Node List - Static collection of HTML elements by (id , class , element)
//             Can be created by using querySelectorAll();
//             Similar to an array , but no (map , filter , reduce)
//             Node List won't update to automatically reflect changes 

let buttons = document.querySelectorAll(`.myBtn`);

// console.log(buttons);

// Add HTML/CSS Properties

// buttons.forEach(button => {
//     button.computedStyleMap.backgroundColor = "gray";
//     button.textContent += "😁"
// })

// Click event listener

// buttons.forEach(button =>{
//     button.addEventListener("click" , event =>{
//         event.target.style.backgroundColor = "red";
//     })
// })

// MouseOver + MouseOut event listener

// buttons.forEach(button =>{
//     button.addEventListener("mouseover" , event =>{
//         event.target.style.backgroundColor = "red";
//     })
// })

// buttons.forEach(button =>{
//     button.addEventListener("mouseout" , event =>{
//         event.target.style.backgroundColor = "pink";
//     })
// })

// Add an Element

// const newBtn = document.createElement("button");
// newBtn.textContent = "Button 5";
// newBtn.classList = "myBtn";
// document.body.appendChild(newBtn);
// buttons = document.querySelectorAll(".myBtn");
// console.log(buttons);

// Remove an element

buttons.forEach(button=>{
    button.addEventListener("click" , event =>{
        event.target.remove();
        buttons = document.querySelectorAll(".myBtn");
        console.log(buttons);
    })
})