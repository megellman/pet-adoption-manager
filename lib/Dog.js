import Animal from "./Animal.js";

class Dog extends Animal {
    constructor(species, name, age, breed, trainingStatus) {
        super(species, name, age, breed);
        this.trainingStatus = trainingStatus;
        this.animalData = `<p>Training: ${trainingStatus} </p>`;
        this.image = "../src/images/dog.jpg";
    }
}

export default Dog;