const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum +1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){
    
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("Enter a valid number");
    }

    else if(guess < 1 || guess > 100){
        window.alert("Enter a valid number");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("Too low");
        }
        else if(guess > answer){
            window.alert("Too high");
        }
        else{
            window.alert(`Correct answer is ${answer} . And the total attempts is ${attempts}`);
            running = false;
        }
    }
}