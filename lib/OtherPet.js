const Animal = require('./Animal.js');

class OtherPet extends Animal{
    constructor(species, name, age, breed){
        super(species, name, age, breed);
        this.image = "../src/images/other-pet.jpg";
    }
}

module.exports = OtherPet