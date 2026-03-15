// Logical operators - Used to combine or manipulate boolean values (True or False)

// And - &&
// OR - ||
// NOT - !

let temp = 20;

if (temp >= 0 && temp <=30){
    console.log("Good")
}

else{
    console.log("bad");
}

let humidity = -1;

if(humidity<=0 || humidity<=20){
    console.log("Good");
}

else{
    console.log("Bad");
}

let isSunny = true;

if(!isSunny){
    console.log("It is cloudy");
}

else{
    console.log("It is Sunny")
}
