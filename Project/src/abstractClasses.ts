abstract class Animal {
    name: string;
    constructor(
        name: string,
        isAnimal: boolean
    ) {
        this.name = name
    }

    abstract makeSound(): void
    getName(): string {
        return this.name
    }
}

class dog extends Animal {
    constructor(name: string, isAnimal: boolean) {
        super(name, isAnimal);
    }

    makeSound(): void {
        console.log("Bark!")
    }
    getName(): string {
        return 'no Name'
    }
}

const dogObj = new dog("Dog", true)
dogObj.makeSound()
dogObj.getName()