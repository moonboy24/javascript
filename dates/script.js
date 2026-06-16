// Dates - Objects that contain values that represent dates and times
//         these date objects can be changed and formatted
// Date(year , month , day , hour , minute , second , ms);

// const date = new Date(2024 , 0 , 2 , 3 , 4 , 5);
// const date = new Date("2024-01-02T12:00:00z");

const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDay();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();

// console.log(date);
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);

// date.setFullYear(2024);
// console.log(date);

const date1 = new Date("2025-12-31");
const date2 = new Date("2026-01-01");

if(date2 > date1){
    console.log("Happy New Year");
}