// for each() - Method used to iterate over the elements of an array and apply a specififed function (callback) to each element
// array.foreach(callback)

// const numbers = [1 , 2 ,3 ];
// numbers.forEach(double);
// numbers.forEach(display);
// function double(element , index , array){
//     array[index] = element*2;
// }
// function display1(element){
//     console.log(element);
// }



let fruits = ["apple", 'melons' , "banana"];

fruits.forEach(firstCap);
fruits.forEach(display);

function display(element){
    console.log(element);
}

function uppercase(element , index , array){
    array[index] = element.toUpperCase();
}
function lowercase(element , index , array){
    array[index] = element.toLowerCase();
}
function firstCap(element , index , array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}