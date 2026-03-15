const tempText = document.getElementById(`tempText`);
const tofahrenheit = document.getElementById(`tofahrenheit`);
const toCelsius = document.getElementById(`toCelsius`);
const myResult = document.getElementById(`myResult`);
let temp;

function convert(){
    if(tofahrenheit.checked){
        temp = Number(tempText.value);
        temp = temp * 9 / 5 + 32;
        myResult.textContent = temp.toFixed(1) + " Fahrenheait";
    }
    else if(toCelsius.checked){
        temp = Number(tempText.value);
        temp = (temp - 32) * (5/9);
        myResult.textContent = temp.toFixed(1) + " Celsius";
    }
    else{
        myResult.textContent = "Select a unit"
    }
}