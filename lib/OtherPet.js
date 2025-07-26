import Animal from './Animal';

class OtherPet extends Animal{
    constructor(species, name, age, breed, specialNote){
        this.species = species,
        this.name = name,
        this.age = age,
        this.breed = breed,
        this.specialNote = specialNote
    }
}

module.exports = OtherPet;