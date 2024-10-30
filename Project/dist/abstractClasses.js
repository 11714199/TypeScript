"use strict";
class Animal {
    constructor(name, isAnimal) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class dog extends Animal {
    constructor(name, isAnimal) {
        super(name, isAnimal);
    }
    makeSound() {
        console.log("Bark!");
    }
    getName() {
        return 'no Name';
    }
}
const dogObj = new dog("Dog", true);
dogObj.makeSound();
dogObj.getName();
