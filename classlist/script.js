// Class List - Element property in JS used to interact with an element's list of classes (CSS Classes)
//              Allows you to make reusable classes for many element accross your webpage

// add()
// remove()
// toggle(Remove if present , Add if not)
// replace(oldClass , newClass)
// contains()

// const hello = document.getElementById(`hello`);
// const myBtn = document.getElementById(`myBtn`);

// myBtn.addEventListener("mouseover" , event=>{
//     event.target.classList.toggle(`hover`);
// });

// myBtn.addEventListener("mouseout" , event=>{
//     event.target.classList.toggle(`hover`);
// });

// hello.classList.add(`enabled`);
// myBtn.classList.add(`enabled`);

// myBtn.addEventListener("click" , event =>{
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "✌️";
//     }
//     else{
//         event.target.classList.replace("enabled" , "disabled");   
//     }
// })

let buttons = document.querySelectorAll(".myButtons");
buttons.forEach(button =>{
    button.classList.add("enabled");
});

buttons.forEach(button => {
    button.addEventListener("mouseover" , event =>{
        event.target.classList.toggle("hover");
    })
})

buttons.forEach(button => {
    button.addEventListener("mouseout" , event =>{
        event.target.classList.toggle("hover");
    })
});


buttons.forEach(button => {
    button.addEventListener("click" , event => {
        if(event.target.classList.contains("disabled")){
            event.target.textContent += "😁";
        }
        else{
            event.target.classList.replace("enabled" , "disabled");
        }
    })
});

