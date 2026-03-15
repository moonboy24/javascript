// checked Property - This helps to determine the checked state of the html Checkboxes or radio elements

const myCheckBox = document.getElementById(`myCheckBox`);
const visaBtn = document.getElementById(`visaBtn`);
const masterBtn = document.getElementById(`masterBtn`);
const relianceBtn = document.getElementById(`relianceBtn`);
const submitBtn = document.getElementById(`submitBtn`);
const subscribeResult = document.getElementById(`subscribeResult`);
const radioResult = document.getElementById(`radioResult`);

submitBtn.onclick = function(){
    if(myCheckBox.checked){
        subscribeResult.textContent = "You are subscribed"
    }

    else{
        subscribeResult.textContent = "you are not subscribed"
    }

    if(visaBtn.checked){
        radioResult.textContent = "paying with Visa Card"
    }

    else if(masterBtn.checked){
        radioResult.textContent = "paying with Master Card"
    }

    else if(relianceBtn.checked){
        radioResult.textContent = "paying with Reliance card"
    }

    else{
        radioResult.textContent = "payment method should be selected"
    }
}