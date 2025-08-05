import { Dog } from "../lib/Dog.js";

describe("Dog class", () => {
    test("has species, name, age, breed training status correctly defined", () => {
        const dog = new Dog("dog", "Todo", 3, "Dalmation", "House trained, Crate trained");
        expect(dog.species).toBe("dog");
        expect(dog.name).toBe("Todo");
        expect(dog.age).toBe(3);
        expect(dog.breed).toBe("Dalmation");
        expect(dog.trainingStatus).toBe("House trained, Crate trained");
    });
    test("animal data is properly formatted", () => {
        const dog = new Dog("dog", "Shadow", 8, "Lab", "Leash trained");
        expect(dog.animalData).toBe(`<p>Training: Leash trained </p>`);
    });
    test("has correct image path", () => {
        const dog = new Dog("dog", "Fluffy", 4, "Poodle", "Crate trained");
        expect(dog.image).toBe("../src/images/dog.jpg");
    });
})