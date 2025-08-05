import { Animal } from "../lib/Animal.js";

describe("Animal class", () => {
    test("has a species, name, age, and breed defined", () => {
        const animal = new Animal("duck", "Toby", 2, "Swedish Blue");
        expect(animal.species).toBe("duck");
        expect(animal.name).toBe("Toby");
        expect(animal.age).toBe(2);
        expect(animal.breed).toBe("Swedish Blue");
    });
    test("getProfile returns the correctly formatted string", () => {
        const animal = new Animal("penguin", "Ruby", 5, "Emperor");
        expect(animal.getProfile()).toBe("Ruby (penguin) - Age: 5, Breed: Emperor");
    });
    test("getRole returns Animal", () => {
        const animal = new Animal("dog", "Shadow", 7, "Great Dane");
        expect(animal.getRole()).toBe("Animal")
    });
    test("generateCard to return card with animal information and inquiry button", () => {
        const animal = new Animal("cat", "Fluffy", 3, "Tabby");
        const card = animal.generateCard();
        expect(card).toContain("<p>Name: Fluffy</p>");
        expect(card).toContain("<p>Species: cat</p>");
        expect(card).toContain("<p>Age: 3</p>");
        expect(card).toContain("<p>Breed: Tabby</p>");
        expect(card).toContain('<a href="mailto:pawfectmatch@email.org?subject=Adoption Inquiry: Fluffy" class="button">Contact</a>');
    })
})