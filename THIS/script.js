// THIS - reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name

// => Arrow functions doesn't work with THIS method

const person1 = {
    name : "Spongebob" , 
    favFood : "sandwich",
    sayHello : function(){console.log(`I'm ${this.name}`)},
    eat : function(){
        console.log(`${this.name} loves to eat ${this.favFood}`)
    },
}

person1.sayHello();
person1.eat();