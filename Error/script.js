// Error - An object that is created to represent a problem that occurs
//         Occur often with user input or establishing a connection

// Network issues
// Promise Rejection
// Security errors

// try{}
// Catch{}
// Finally{}

try {
  const divident = Number(window.prompt("Enter a divident:"));
  const divisor = Number(window.prompt("Enter a divisor:"));
  
  if(divisor == 0){
    throw new Error("You can't divide by Zero");
  }

  if(isNaN(divident) || isNaN(divisor)){
    throw new Error("Values must be a number");
  }

  const result = divident / divisor;
  console.log(result);
} 

catch (error) {
  console.error(error);
} 

console.log("reached the end");