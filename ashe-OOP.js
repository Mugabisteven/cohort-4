/*Declaring objects using the literal notation fruit with five properties and their values

*/
// let mango = {name:"Mango",color:"yellowish-orange", season:"perenial", nutrient:"vitamin A", juiceExtract:true}
// //Printing to screen all fruit object properties and their values
// console.log(fruit.name)
// console.log(fruit.color)
// console.log(fruit.season)
// console.log(fruit.nutrient)
// console.log(fruit.juiceExtract)

// //Declaring object aeroplane with five properties and their values
// let airbus = {name:"Airbus", revenue:"63.7 billion EUR (2018)", country:"Netherlands", seatingCapacity:800, fuelCapacity:"500L"}
// //Printing to screen all aeroplane object properties and their values
// console.log(aeroplane.name)
// console.log(aeroplane.manufacturer)
// console.log(aeroplane.country)
// console.log(aeroplane.seatingCapacity)
// console.log(aeroplane.fuelCapacity)

// //Declaring object planet with five properties and their values
// let planet = {name:"Mars", distanceFromSun:"50000km", humanLife:"false", color:"red", moons:2}
// //Printing to screen all planet object properties and their values
// console.log(planet.name)
// console.log(planet.distanceFromSun)
// console.log(planet.humanLife)
// console.log(planet.color)
// console.log(planet.moons)

// //Declaring object civilization with five properties and their values
// let civilization = {name:"Stone Age", primaryTool:"Stone", worldPopulation:100000, year:"4000BC", habitation:"caves"}
// //Printing to screen all civilization object properties and their values
// console.log(civilization.name)
// console.log(civilization.primaryTool)
// console.log(civilization.worldPopulation)
// console.log(civilization.year)
// console.log(civilization.habitation)

// //Declaring object music with five properties and their values
// let music = {genre:"reggae", intruments:"guitar, bass, drums", countryOfOrigin:"Jamaica", famousArtist:"Bob Marley", yearOfInseption:1970}
// //Printing to screen all music object properties and their values
// console.log(music.genre)
// console.log(music.intruments)
// console.log(music.countryOfOrigin)
// console.log(music.famousArtist)
// console.log(music.yearOfInseption)


/*Definining objects with function keyword and instatiating them with a constructor*/

function fruit (){
	this.name
	this.color
	this.season
	this.nutrient
	this.juiceExtract
}

var mango = new fruit()
mango.name = 'mango'
mango.color = 'yellowish-orange'
mango.season = 'perenial'
mango.nutrient = 'vitamin C'
mango.juiceExtract = true
console.log(mango)

var pineapple = new fruit()
pineapple.name = 'pineapple'
pineapple.color = 'yellowish-orange'
pineapple.season = 'bieannial'
pineapple.nutrient = 'Potassium'
pineapple.juiceExtract = true
console.log(pineapple)

var waterMelon = new fruit()
waterMelon.name = 'water melon'
waterMelon.color = 'green'
waterMelon.season = 'Annual'
waterMelon.nutrient = 'vitamin C'
waterMelon.juiceExtract = true
console.log(waterMelon)

function planet (){
	this.name
	this.distanceFromSun
	this.humanLife
	this.color
	this.moons
}

var mars = new planet()
mars.name = 'Mars'
mars.distanceFromSun = '227.9 million km'
mars.humanLife = false
mars.color = 'red'
mars.noOfMoons = 2
console.log(mars)

var venus = new planet()
venus.name = 'Venus'
venus.distanceFromSun = '108.2 million km'
venus.humanLife = false
venus.color = 'yellowish'
venus.noOfMoons = 0
console.log(venus)

var earth = new planet()
earth.name = 'Earth'
earth.distanceFromSun = '147.65 million km'
earth.humanLife = true
earth.color = 'blue'
earth.noOfMoons = 1
console.log(earth)

function airbus (){
	this.model
	this.firstFlight
	this.flightRange
	this.seatingCapacity
	this.fuelCapacity
}
var a380 = new airbus()
a380.name = 'A380'
a380.firstFlight = '27 April 2005'
a380.flightRange= '15,200km'
a380.seatingCapacity = '868'
a380.fuelCapacity = '315,292 liters'
console.log(a380)

var a330 = new airbus()
a330.name = 'A330'
a330.firstFlight = '2 November 1992'
a330.flightRange = '11,750km'
a330.seatingCapacity = '277'
a330.fuelCapacity = '21,508 liters'
console.log(a330)

var a220 = new airbus()
a220.name = 'A220'
a220.firstFlight = '16 September 2013'
a220.notableFact = '7000km'
a220.seatingCapacity = '150'
a220.fuelCapacity = '21,508 liters'
console.log(a220)

