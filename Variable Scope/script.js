// Variable Scope - Where a variable is recognised and accessible (Local and Global scope)

// Local Scope - Variable can be only accessed inside it's function

function func1(){
    let x = 1;
    console.log(x);
}
 func1();

// Global Scope - Variable is set outside the function and functions can't see inside another fnction

let y = 2;

function func2(){
    console.log(y);
}

func2();