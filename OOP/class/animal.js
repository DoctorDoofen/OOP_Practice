const { cat1, cat2 } = require("./cat")
const { Dog1, Dog2 } = require("./dog")


class Animal {

    constructor(name, age, favoriteFood) {
        this.name = name
        this.age = age
        this.favoriteFood = favoriteFood
    }

    static getFavoriteFood(...animals) {

        animals.forEach((animal) => console.log(animal.favoriteFood))
    }

}

const penguin1 = new Animal('Rodger', 3, 'Fish')
const penguin2 = new Animal('Alex', 3, 'seal')


let animals = [penguin1, penguin2, Dog1, Dog2, cat1, cat2, { name: 'dane', age: 30, favoriteFood: 'Doritos' }]

Animal.getFavoriteFood(...animals)

module.exports = {
    Animal,
    penguin1,
    penguin2
}