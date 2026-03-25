// Constructor - special method for defining the properties and methods of objects

function Car(make , model , year , color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){
        console.log(`You're driving a ${this.model}`)
    }
}

const car1 = new Car("Ford" , "Mustang" , 2024 , "Matt Black");
const car2 = new Car("Porsche" , "911" , 2021 , "Red");
const car3 = new Car("Toyota" , "Supra" , 2000 , "Silver");


console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
car3.drive();