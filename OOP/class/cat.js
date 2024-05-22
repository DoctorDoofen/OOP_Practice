const { Animal } = require("./animal");

class Cat extends Animal {
    constructor(name, age, favoriteFood, breed) {
        super(name, age, favoriteFood)
        this.breed = breed
    }

    getCatBreed() {
        if (this instanceof Cat) {
            console.log(this.breed)
        }
    }

    static getFavoriteFood(...animals) {
        let filtered = animals.filter((animal) => animal instanceof Cat)
        filtered.forEach((animal) => console.log(animal.favoriteFood))
    }
}

const cat1 = new Cat('Rodger', 3, 'tuna')
const cat2 = new Cat('Aaron', 3, 'salmon', 'Tabby')




module.exports = {
    Cat,
    cat1,
    cat2
}