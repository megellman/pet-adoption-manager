import Animal from './Animal.js';

class Cat extends Animal {
    constructor(species, name, age, breed, specialNote, status){
        super(species, name, age, breed, specialNote);
        this.status = status;
        this.animalData = `<p>Status: ${status} </p>`;
    }

}

export default Cat;