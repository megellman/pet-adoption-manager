import Cat from "../lib/Cat.js";
import Dog from "../lib/Dog.js";
import OtherPet from "../lib/OtherPet.js";
// import fs from 'node:fs';
import {promises as fs} from 'fs';

function generateAnimalCards(animals) {
    let cards = "";
    animals.forEach(animal => {
        if(animal.species === "cat"){
            let cat = new Cat(animal.name, animal.age, animal.breed, animal.specialNote, animal.status, animal.animalData);
            cards += cat.generateCard();
        } else if(animal.species === "dog"){
            let dog = new Dog(animal.name, animal.age, animal.breed, animal.specialNote,animal.training, animal.animalData);
            cards += dog.generateCard();
        } else {
            let pet = new OtherPet(animal.species, animal.name, animal.age, animal.breed, animal.specialNote, animal.animalData);
            cards += pet.generateCard();
        }
    });
    return cards;
}

async function generateWebpage(animals) {
    let animalCards = generateAnimalCards(animals);
    try {
        let template = await fs.readFile("./src/template.html", "utf-8");
        let pageWithCards = template.replace("cards", animalCards);
        await fs.writeFile("./dist/webpage.html", pageWithCards);
        console.log("Webpage created!");
    } catch (err) {
        console.error("Error generating webpage: ", err);
    }
}


export default generateWebpage;