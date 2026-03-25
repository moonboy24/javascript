// nested objects - Objects inside of other objects. Allows you to represent more complex
//                  data structures
//                  Child object is enclosed by a parent object

//                  Person{Address{} , ContactInfo{}}
//                  ShoppingCart{Keyboard{} , Mouse{} , Monitor{}}

// Example 1

// const person = {
//     fullName : "Spongebob",
//     age : 30,
//     isStudent : true,
//     hobbies : ["cooking" , "fishing" , "shooting"],
//     address: {
//         street : "154 bla",
//         city : "Bonkai",
//         country : "Atlantis"
//     }
// }

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[0]);
// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person.address.country);

// for(const property in person.address){
//     console.log(person.address[property]);
// }

// Example 2

class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person("Sponge", 30, "124 conch", "Bonkai", "Atlantis");
const person2 = new Person("Patrick", 31, "125 conch", "Chronicles", "Mermaid");
const person3 = new Person("Squid", 35, "126 conch", "Chronicles", "Mermaid");

console.log(person1.name);
console.log(person1.age);
console.log(person1.address);

console.log(person3.name);
console.log(person3.age);
console.log(person3.address);