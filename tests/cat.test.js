import { Cat } from "../lib/Cat.js";

describe("Cat class", () => {
    test("has a species, name, age, breed, and status defined", () => {
        const cat = new Cat("cat", "Lily", 5, "Persian", "Indoor");
        expect(cat.species).toBe("cat");
        expect(cat.name).toBe("Lily");
        expect(cat.age).toBe(5);
        expect(cat.breed).toBe("Persian");
        expect(cat.status).toBe("Indoor");
    });
    test("animal data is properly formatted", () => {
        const cat = new Cat("cat", "Juliana", 9, "Tabby", "Indoor");
        expect(cat.animalData).toBe(`<p>Status: Indoor </p>`);
    });
    test("has correct image path", () => {
        const cat = new Cat("cat", "Kiki", 2, "Burmese", "Outdoor");
        expect(cat.image).toBe("../src/images/cat.jpg");
    });
})