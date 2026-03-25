// Inheritance - allows a new class to inherit properties and methods
//               from an existing class (parent --> Child)
//               Help with code re-usability

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "Rabbit";

    run(){
        console.log(`${this.name} runs faster`)
    }
}

class Fish extends Animal{
    name = "Fish";

    swim(){
        console.log(`${this.name} can swim fater`)
    }
}

class Hawk extends Animal{
    name = "Hawk";

    fly(){
        console.log(`${this.name} can fly fater`)
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();

console.log(hawk.alive);
hawk.eat();
hawk.sleep();
hawk.fly();