const { Animal } = require("./animal");

class Dog extends Animal {
    constructor(name, age, favoriteFood, breed) {
        super(name, age, favoriteFood)
        this.breed = breed
    }

    getDogAge() {
        if (this instanceof Dog) {
            return this.age
        }
    }

    static getFavoriteFood(...animals) {
        let filtered = animals.filter((animal) => animal instanceof Dog)
        filtered.forEach((animal) => console.log(animal.favoriteFood))
    }

}

const Dog1 = new Dog('Rodger', 3, 'Fish', 'mutt')
const Dog2 = new Dog('Aaron', 3, 'bones')



module.exports = {
    Dog,
    Dog1,
    Dog2
}