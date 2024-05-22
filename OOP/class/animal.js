
class Animal {

    constructor(name, age, favoriteFood) {
        this.name = name
        this.age = age
        this.favoriteFood = favoriteFood
    }

    isValid() {
        if (!this.name || !this.age || !this.favoriteFood) {
            return false
        }
        return true
    }

    getAnimalName() {
        if (this instanceof Animal) {
            console.log(this.name)
        }
    }

    static getFavoriteFood(...animals) {
        let favoriteFoods = []
        let filtered = animals.filter((animal) => animal instanceof Animal)
        filtered.forEach((animal) => favoriteFoods.push(animal.favoriteFood))
        return favoriteFoods;
    }

}

const penguin1 = new Animal('Rodger', 3, 'Fish')
const penguin2 = new Animal('Alex', 3, 'seal')




module.exports = {
    Animal,
    penguin1,
    penguin2
}