class Animal {
    constructor(species, name, age, breed, specialNote){
        this.species = species;
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.specialNote = specialNote;
    }
    generateCard(){
        return `<div class="cell card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://bulma.io/assets/images/placeholders/1280x960.png" alt="Placeholder image" />
                    </figure>
                </div>
                <div class="card-content" id="animal-info">
                    <p>Species: ${this.species}</p>
                    <p>Name : ${this.name}</p>
                    <p>Age: ${this.age}</p>
                    <p>Breed: ${this.breed}</p>
                    ${(!this.specialNote) ? "" : `<p>Special Note: ${this.specialNote}</p>`}
                    ${(!this.animalData) ? "" : `${this.animalData}`}
                    <a href="mailto:pawfectmatch@email.org?subject=Adoption Inquiry" class="button">Contact</a>
                </div>
            </div>`;
    }
}

export default Animal;