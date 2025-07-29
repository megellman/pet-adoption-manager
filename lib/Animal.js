class Animal {
    constructor(species, name, age, breed){
        this.species = species;
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    generateCard(){
        return `<div class="cell card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="${this.image}" alt="Placeholder image" style="object-fit:cover" />
                    </figure>
                </div>
                <div class="card-content" id="animal-info">
                <p>Name: ${this.name}</p>
                <p>Species: ${this.species}</p>
                    <p>Age: ${this.age}</p>
                    <p>Breed: ${this.breed}</p>
                    ${(!this.animalData) ? "" : `${this.animalData}`}
                    <a href="mailto:pawfectmatch@email.org?subject=Adoption Inquiry: ${this.name}" class="button">Contact</a>
                </div>
            </div>`;
    }
}

export default Animal;