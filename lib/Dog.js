import Animal from './Animal.js';

class Dog extends Animal {
    constructor(name, age, breed, specialNote, training){
        super(name),
        super(age),
        super(breed),
        super(specialNote),
        this.training = training
    }
}

export default Dog;