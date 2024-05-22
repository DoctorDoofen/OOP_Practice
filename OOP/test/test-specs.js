const { expect } = require('chai')
const { Animal } = require('../class/animal')
const { Cat } = require('../class/cat')
const { Dog } = require('../class/dog')

describe('Animal', () => {
    it('should only allow valid instances to be added', () => {
        const validAnimal = new Animal('whiskers', 3, 'tuna')
        const invalidAnimal = new Animal('Hooch')

        expect(validAnimal.isValid()).to.be.true
        expect(invalidAnimal.isValid()).to.not.be.true
    })
    it('should print the favorite food of all valid instances', () => {
        const penguin1 = new Animal('Rodger', 3, 'Fish')
        const penguin2 = new Animal('Alex', 3, 'seal')
        const penguin3 = { name: 'Flipper', age: 3, favoriteFood: 'lamb' }

        let animals = [penguin1, penguin2, penguin3]
        expect(Animal.getFavoriteFood(...animals)).to.eql(['Fish', 'seal'])
    })
})

describe('Cat', () => {

    it('should extend the Animal class', () => {
        const cat1 = new Cat('Rodger', 3, 'tuna')
        expect(cat1 instanceof Animal).to.be.true
    })

    it('should have and instance method "getCatBreed" that prints the cat Breed', () => {
        const cat1 = new Cat('Rodger', 3, 'tuna', 'Tabby')

        expect(cat1.breed).to.be.equal('Tabby')
    })
})

describe('Dog', () => {
    it('should extend the Animal class', () => {
        const Dog1 = new Dog('Rodger', 3, 'Fish', 'mutt')

        expect(Dog1 instanceof Animal).to.be.true
    })
    it('should have a method that prints the age of Dog instance', () => {
        const Dog1 = new Dog('Rodger', 3, 'Fish', 'mutt')

        expect(Dog1.getDogAge()).to.be.equal(3)
    })
})