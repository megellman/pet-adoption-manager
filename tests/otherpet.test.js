const OtherPet = require('../lib/otherPet.js');

describe("otherPet class", () => {
    test("has species, name, age, breed training status correctly defined", () => {
        const otherPet = new OtherPet("snake", "Noodle", 3, "Copperhead");
        expect(otherPet.species).toBe("snake");
        expect(otherPet.name).toBe("Noodle");
        expect(otherPet.age).toBe(3);
        expect(otherPet.breed).toBe("Copperhead");
    });
    test("has correct image path", () => {
        const otherPet = new OtherPet("Lizard", "Bucky", 1, "Iguana");
        expect(otherPet.image).toBe("../src/images/other-pet.jpg");
    });
})