const { cat1, cat2 } = require("./cat")
const { Dog1, Dog2 } = require("./dog")
const { penguin1, penguin2 } = require('./animal')

let animals = [penguin1, penguin2, Dog1, Dog2, cat1, cat2, { name: 'dane', age: 30, favoriteFood: 'Doritos' }]

Animal.getFavoriteFood(...animals)