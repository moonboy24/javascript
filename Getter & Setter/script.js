// Getter - Special method that makes a property readable
// Setter - Special method that makes a property writable

// Validate and modify a value when reading/writing a property

// Example 1

class Rectangle{

    constructor (width , height){
        this.width = width;
        this.height = height;
    };

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.log("Must be positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.log("Must be a positive number");
        }
    }

    get width(){
        return `${this._width.toFixed(1)} cm`;
    }

    get height(){
        return `${this._height.toFixed(1)} cm`;
    }

    get area(){
        return `${(this._width * this._height).toFixed(1)} cm`;
    }
}

const rectangles = new Rectangle(6,5);


console.log(rectangles.width);
console.log(rectangles.height);
console.log(rectangles.area);


// Example 2

class Person{

    constructor(firstName , lastName , age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0 ){
            this._firstName = newFirstName;
        }
        else{
            console.log("Only alphabets")
        }
    }
    
    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0 ){
            this._lastName = newLastName;
        }
        else{
            console.log("Only alphabets")
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.log("Enter a number")
        }
    }

    get firstName(){
        return this._firstName;
    }
    
    get lastName(){
        return this._lastName;
    }

    get age(){
        return this._age;
    }

    get fullName(){
        return this._firstName + " " + this._lastName;
    }
}

const person1 = new Person("Spongebob" , "Squarepants" , 10);

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.fullName);