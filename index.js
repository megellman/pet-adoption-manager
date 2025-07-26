import { input, select } from '@inquirer/prompts';

const animals = [];

promptUser();

async function promptUser(){
    const newAnimal = {
        species: await input({ message: "What species are they?" }),
        name: await input({ message: "What is their name?" }),
        age: await input({ message: "How old are they?" }),
        breed: await input({ message: "What is their breed?" }),
        specialNote: await input({ message: "Anything else to note?" }),
    }
    animals.push(newAnimal);
    console.log('Animals: ', animals);
    const nextAction = await select({
        message: "What would you like to do next?",
        choices: ["Add another animal", "View available animals", "Generate adoption webpage", "Exit"]
    });
    if (nextAction === "Add another animal") {
        await promptUser();
    } else if (nextAction === "View available animals"){ 
        const viewAnimal = await select({
            message: "Select an animal to view more details",
            choices: animals.map((animal) => ({
                name: `${animal.name}, ${animal.species}`,
                value: animal
            }))
        })
        console.log(viewAnimal);
    } else if (nextAction === "Generate adoption webpage"){
        generateWebpage();
    }
}