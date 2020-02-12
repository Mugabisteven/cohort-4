
/*//A list of 5 Objects with their properties
// Defining and declaring an object 'hotel' with 5 properties
let hotel = {name:"Skyz", starRating:"4", location:"Kampala", amenities:"Swimming pool, bar, restuarant", owner:"Bitature"}

//Accessing the object properties
console.log("The name of this hotel is " + hotel.name)
console.log("It is owned by " + hotel.owner)
console.log("It has a " + hotel.starRating + " Star Rating")
console.log("It is located in " + hotel.location)
console.log("Available services: " + hotel.amenities)
console.log(" ")

//SECOND OBJECT

// Defining and declaring an object 'planet' with 5 properties
let planet = {name:"Mars", colour:"red", diameter:3.93, mass:0.107, moons:2}

//Accessing the object properties
console.log("The name of the planet is " + planet.name)
console.log("It has a " + planet.colour + " colour")
console.log("Its diameter is " + planet.diameter)
console.log("And the mass is " + planet.mass)
console.log("I has " + planet.moons + " moons")
console.log(" ")

//THIRD OBJECT
//Defining and declaring an object 'president' with 5 properties
let president = {firstName:"Putin", country:"Russia", continent:"Europe", dictator:"Yes", language:"Russian"}

//Accessing the object properties
console.log("The first name of the president of " + president.country + "is " + president.firstName)
console.log("The country is in the continent " + president.continent)
console.log(president.dictator + " he is a dictator")
console.log("He speaks " + president.language)
console.log(" ")

//FOURTH OBJECT
//Defining and declaring an object 'disease' with 5 properties
let disease = {name:"2019-nCoV", organism:"Corona Virus", origin:"China", outbreakYear:"2019", cure:"No"}

//Accessing the object properties
console.log("The name of the disease is " + disease.name)
console.log("It is caused by " + disease.organism)
console.log("It originated from " + disease.origin + " in the year " + disease.outbreakYear)
console.log("So far is has " + disease.cure + " cure")
console.log(" ")

//FIFTH OBJECT
//Defining and declaring an object 'crashCourse' with 5 properties
let crashCourse = {name:"Refactory", university:"CIU", location:"Muyenga", duration:"3 Months", content:"Software Engineering"}

//Accessing the object properties
console.log("The name of this crash course is " + crashCourse.name)
console.log("The duration of the course is " + crashCourse.duration)
console.log("It is under the university called " + crashCourse.university)
console.log("Located in " + crashCourse.location)
*/

//created a new object laptop with object constructor
//added 5 properties with this keyword
function laptop(){
    this.brand,
    this.core,
    this.color,
    this.storageSize,
    this.ram
};

//used the constructor object to create new laptop objects dell, toshiba and macbook
var dell = new laptop()
    dell.brand='Dell'
    dell.core='core i3'
    dell.color='black'
    dell.storageSize='500GB Hard disk'
    dell.ram='4GB RAM'

var toshiba = new laptop()
    toshiba.brand='Toshiba'
    toshiba.core='core i5'
    toshiba.color='white'
    toshiba.storageSize='1TB Hard disk'
    toshiba.ram='8GB RAM'

var macBook = new laptop()
    macBook.brand='Mac Book Pro'
    macBook.core='core i7'
    macBook.color='white'
    macBook.storageSize='1TB Hard disk'
    macBook.ram='16GB RAM'

    console.log(dell.brand + " is a " + dell.core + " with the following specs: " +
    dell.color + '; ' + dell.storageSize + '; ' + dell.ram)

    console.log(toshiba.brand + " is a " + toshiba.core + " with the following specs: " +
    toshiba.color + '; ' + toshiba.storageSize + '; ' + toshiba.ram)

    console.log(macBook.brand + " is a " + macBook.core + " with the following specs: " +
    macBook.color + '; ' + macBook.storageSize + '; ' + macBook.ram)