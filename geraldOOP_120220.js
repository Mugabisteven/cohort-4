// function continent() {
//    this.name
//    this.population
//    this.numberOfCountries
//    this.area
//    this.largestlake
//    this.highestPoint
// }
// console.log(continent.name)


// var europe = new continent()
// europe.name = 'europe'
// europe.noOceans = '2'
// europe.size = '740 million'
// europe.biggestCountry = 'Russia'
// // console.log(europe.name)
// console.log(europe)

// // var asia = new continent()

// function animal() {
//    this.name
//    this.populationInTheWorld
//    this.skinType
//    this.averageWeight
//    this.gestationPeriod
// }
// console.log(animal.name)


// var lion = new animal()
// animal.name = 'lion'
// animal.populationInTheWorld = '200,000 wild lions'
// animal.skinType = 'fur'
// animal.averageWeight = '190 kg'
// animal.gestationPeriod = "110 days"
// console.log(animal)


// var elephant = new animal()
// animal.name = 'elephant'
// animal.populationInTheWorld = '700,000 African elephants'
// animal.skinType = 'hide'
// animal.averageWeight = '5,443 kilograms'
// animal.gestationPeriod = "22 months"
// console.log(animal)


// var gorilla = new animal()
// animal.name = 'gorilla'
// animal.populationInTheWorld = '100,000'
// animal.skinType = 'fur'
// animal.averageWeight = '160 kilograms'
// animal.gestationPeriod = "237 days"
// console.log(animal)


/* defining five objects, five properties and three instances and printing them out*/
function animal(name, populationInTheWorld, skinType, averageWeight, gestationPeriod) {
   this.name = name
   this.populationInTheWorld = populationInTheWorld
   this.skinType = skinType
   this.averageWeight = averageWeight
   this.gestationPeriod = gestationPeriod
}
var gorilla = new animal('gorilla', '100,000', 'fur', '160 kilograms', '237 days')
console.log(gorilla.skinType)


var elephant = new animal('elephant', '700,000 African elephants', 'hide', '5,443 kilograms', '22 months')
console.log(elephant)


var lion = new animal('lion', '200,000 wild lions', 'fur', '190 kilograms', '110 days')
console.log(lion.skinType)
