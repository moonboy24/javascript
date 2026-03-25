// Object - A collection of related properties and/or methods can
//          represent real world objects (people , products , place)

//          object = {key:value, 
//                     function() }

const person1 = {
    firstName : "Spongebob",
    lastName : "Squarepants" , 
    age : 30,
    isEmployed : true,
    sayHello : function(){console.log("Hiii , I'm Squarepants")},
    eat : () => console.log("I'm Eating Sandwich"),
}

const person2 = {
    firstName : "Patrick",
    lastName : "David" , 
    age : 25,
    isEmployed : false,
    sayHello : ()=> {console.log("heyy , I'm Patrick")},
    eat : function(){console.log("I'm eating Barbeque")},
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();
