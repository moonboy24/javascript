// synchronous - Executes line by line consecutively in a sequential manner 
//               Code that waits for an operation to complete

// Asynchronous - Allow multiple operations to be concurrently without waiting
//                doesn't block the execution flow and allows the program to continue
//                (I/O operation , network request , fetching data)
//                Handled with: Callbacks , Promises , Aync/Await


function func1(callback){
    setTimeout(() => {console.log("Task 1"), 3000;
                        callback()} , 3000);
}

function func2(){
    console.log("Task 2")
    console.log("Task 3")
    console.log("Task 4")
}

func1(func2);