// While Loop - Repeat some code until the WHILE is true

let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt("Enter username");
    password = window.prompt("Enter password");

    if(username === "myuser" && password === "mypass"){
        loggedIn = true;
        console.log("Logged In");
    }
    else{
        console.log("Invalid Credentials");
    }
}