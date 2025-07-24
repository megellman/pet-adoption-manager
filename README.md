# 🚀 Project: CLI Pet Adoption Center Manager

## 📌 User Story
AS AN animal shelter manager  
I WANT to track animals available for adoption with their details  
SO THAT I can easily manage shelter records and share pet profiles with potential adopters

## ✅ Acceptance Criteria
GIVEN a command-line application that accepts user input  
WHEN I start the application  
THEN I am prompted to enter a new animal's details (species, name, age, breed, and special notes)  
WHEN I finish adding an animal  
THEN I am presented with a menu to add another animal, view available animals, generate an adoption webpage, or exit  
WHEN I choose to view available animals  
THEN I see a list of all animals with their name and species, and can select one to view full details  
WHEN I choose to generate an adoption webpage  
THEN an HTML file is generated that displays profiles for each animal with their photo (placeholder image URL), details, and a contact button  
WHEN I click on the contact button  
THEN my default email program opens with the subject “Adoption Inquiry: [Animal Name]”

## 📝 Requirements & Key Skills Tested
✅ Object-Oriented Programming & Class Inheritance:
- `Animal` base class with properties: name, age, species, breed, notes
- Subclasses:
  - `Dog` (extra: training status)
  - `Cat` (extra: indoor/outdoor status)
  - `OtherPet` (for birds, reptiles, etc.)

✅ CLI with Inquirer to gather user inputs  
✅ HTML Generation to output adoption profiles  
✅ File I/O to save animal records to JSON  
✅ Testing with Jest for each class and utility function  
✅ Git best practices, clean folder structure, `.gitignore`, and README with instructions

## 🔧 Suggested Directory Structure
.
├── __tests__/  
│   ├── Animal.test.js  
│   ├── Dog.test.js  
│   ├── Cat.test.js  
│   └── OtherPet.test.js  
├── data/                  // stores animals.json  
├── dist/                  // generated adoption.html  
├── lib/                   // classes: Animal.js, Dog.js, Cat.js, OtherPet.js  
├── src/                   // HTML template helper  
├── .gitignore  
├── index.js  
└── package.json

## 💻 Example Class Design

**Animal.js**
```js
class Animal {
  constructor(name, age, species, breed, notes) {
    this.name = name;
    this.age = age;
    this.species = species;
    this.breed = breed;
    this.notes = notes;
  }

  getProfile() {
    return `${this.name} (${this.species}) - Age: ${this.age}, Breed: ${this.breed}`;
  }

  getRole() {
    return 'Animal';
  }
}

module.exports = Animal;
