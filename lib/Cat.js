import Animal from './Animal.js';

class Cat extends Animal {
    constructor(name, age, breed, specialNote, status){
        super(name),
        super(age),
        super(breed),
        super(specialNote)
        this.status = status
    }
}

export default Cat;