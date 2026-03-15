// If Statement - If some condition is true , execute the condition or executes the else condition

const ageTxt = document.getElementById(`ageTxt`);
const submitBtn = document.getElementById(`submitBtn`);
const resultTxt = document.getElementById(`resultTxt`);
let age;

submitBtn.onclick = function(){

    age = ageTxt.value;
    age = Number(age);
    
    if(age >= 100){
        resultTxt.textContent = "You are too old"
    }

    else if(age >= 18){
        resultTxt.textContent = "you are eligible"
    }


    else if(age < 0){
        resultTxt.textContent = "No negative values"
    }

    else{
        resultTxt.textContent = "you are not eligible"
    }
}