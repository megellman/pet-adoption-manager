const Animal = require('./Animal.js');

class Cat extends Animal {
    constructor(species, name, age, breed, status){
        super(species, name, age, breed);
        this.status = status;
        this.animalData = `<p>Status: ${status} </p>`;
        this.image = "../src/images/cat.jpg";
    }

}

module.exports = Cat;