import Animal from './Animal';

class Dog extends Animal {
    constructor(name, age, breed, specialNote, training){
        super(name),
        super(age),
        super(breed),
        super(specialNote),
        this.training = training
    }
}

module.exports = Dog;