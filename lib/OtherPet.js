import Animal from './Animal.js';

class OtherPet extends Animal{
    constructor(species, name, age, breed, specialNote){
        super(species, name, age, breed, specialNote);
        this.specialNote = specialNote;
    }
}

export default OtherPet;