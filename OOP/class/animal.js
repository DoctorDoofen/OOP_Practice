
class Animal {

    constructor(name, age, favoriteFood) {
        this.name = name
        this.age = age
        this.favoriteFood = favoriteFood
    }

    getAnimalName() {
        if (this instanceof Animal) {
            console.log(this.name)
        }
    }

    static getFavoriteFood(...animals) {

        animals.forEach((animal) => console.log(animal.favoriteFood))
    }

}

const penguin1 = new Animal('Rodger', 3, 'Fish')
const penguin2 = new Animal('Alex', 3, 'seal')


// penguin1.getAnimalName()

module.exports = {
    Animal,
    penguin1,
    penguin2
}