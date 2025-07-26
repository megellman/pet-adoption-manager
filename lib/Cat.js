import Animal from './Animal';

class Cat extends Animal {
    constructor(name, age, breed, specialNote, status){
        super(name),
        super(age),
        super(breed),
        super(specialNote)
        this.status = status
    }
}

module.exports = Cat;