const { Animal } = require("./animal");

class Dog extends Animal {
    constructor(name, age, favoriteFood, breed) {
        super(name, age, favoriteFood)
        this.breed = breed
    }

    getDogAge() {
        if (this instanceof Dog) {
            console.log(this.age)
        }
    }

    static getFavoriteFood(...animals) {
        let filtered = animals.filter((animal) => animal instanceof Dog)
        filtered.forEach((animal) => console.log(animal.favoriteFood))
    }

}

const Dog1 = new Animal('Rodger', 3, 'Fish')
const Dog2 = new Animal('Aaron', 3, 'bones')

Dog1.getDogAge()
module.exports = {
    Dog,
    Dog1,
    Dog2
}