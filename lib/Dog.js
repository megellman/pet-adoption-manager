import Animal from './Animal.js';

class Dog extends Animal {
    constructor(species, name, age, breed, specialNote, training) {
        super(species, name, age, breed, specialNote);
        this.training = training;
        this.animalData = `<p>Training: ${training} </p>`;
    }
}

export default Dog;