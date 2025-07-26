import Animal from './Animal.js';

class OtherPet extends Animal{
    constructor(species, name, age, breed, specialNote){
        this.species = species,
        this.name = name,
        this.age = age,
        this.breed = breed,
        this.specialNote = specialNote
    }
}

export default OtherPet;