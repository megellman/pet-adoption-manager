import { input, select, checkbox } from '@inquirer/prompts';
import fs from 'node:fs';
import generateWebpage from './src/generateHTML.js';

let animals = [];
fs.readFile("./data/animals.json", "utf-8", (err, data) => {
    if (err) console.error(err);
    if (data) {
        try {
            let arr = JSON.parse(data);
            animals.push(...arr);
        } catch (parseErr) {
            console.error("Invalid JSON file:", parseErr);
        }
    }
    promptUser();
});
async function promptUser() {
    const newAnimal = {
        species: capitalizeWords(await input({ message: "What species are they?"})),
        name: capitalizeWords(await input({ message: "What is their name?"})),
        age: capitalizeWords(await input({ message: "How old are they?"})),
        breed: capitalizeWords(await input({ message: "What is their breed?"}))
    }
    if (newAnimal.species === "Dog") {
        newAnimal.trainingStatus = await checkbox({
            message: "What is their training status?",
            choices: ["House trained", "Crate trained", "Leash trained", "Socialized", "Basic commands"]
        })
        console.log(newAnimal)
    } else if (newAnimal.species === "Cat") {
        newAnimal.status = await checkbox({
            message: "What is their status?",
            choices: ["Indoor", "Outdoor"]
        })
    }
    animals.push(newAnimal);
    const nextAction = await select({
        message: "What would you like to do next?",
        choices: ["Add another animal", "View available animals", "Generate adoption webpage", "Exit"]
    });
    if (nextAction === "Add another animal") {
        await promptUser();
    } else if (nextAction === "View available animals") {
        const viewAnimal = await select({
            message: "Select an animal to view more details",
            choices: animals.map((animal) => ({
                name: `${animal.name}, ${animal.species}`,
                value: animal
            }))
        })
        console.log(viewAnimal);
    } else if (nextAction === "Generate adoption webpage") {
       generateWebpage(animals);
    } else if (nextAction === "Exit") {
        console.log(animals);
    }
    fs.writeFile("./data/animals.json", JSON.stringify(animals), (err) => {
        if (err) console.error(err);
    })
}

function capitalizeWords(input){
    return input.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}