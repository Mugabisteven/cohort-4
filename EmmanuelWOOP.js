/** //Define object table
let table = {colour:"Red", legs:3, shape:"Rectangle", material:"Wooden", size:"Medium"}
console.log(table.colour)
console.log(table.legs)
console.log(table.shape)
console.log(table.material)
console.log(table.size)

//Define object chair
let chair = {colour:"Blue", legs:4, shape:"Square", material:"Plastic", size:"Small"}
//Display attribute value on console
console.log(chair.colour)
console.log(chair.legs)
console.log(chair.shape)
console.log(chair.material)
console.log(chair.size)

//Define object meal
let meal = {colour:"White", amount:"0.2Kgs", shape:"oval", make:"Boiled", taste:"Sweet"}
console.log(meal.colour)
console.log(meal.amount)
console.log(meal.shape)
console.log(meal.make)
console.log(meal.taste)

//Define object money
let money = {amount:1000, currency:"Shillings", shape:"Rectangle", material:"Paper", colour:"Brown"}
console.log(money.colour)
console.log(money.currency)
console.log(money.shape)
console.log(money.material)
console.log(money.amount)

//Define object song
let song = {genre:"Jazz", artist:"Kenny G", duration:"3:00", ratings:"5/10", size:"3.4MBs"}
console.log(song.genre)
console.log(song.artist)
console.log(song.duration)
console.log(song.ratings)
console.log(song.size)
**/

//Defining object continent
function continent(){
    this.name
    this.size
    this.population
    this.numberOfCountries
    this.compassDirection
}
//Declaring and instantiating a variable
var europe = new continent()
//Initialising variable attributes
    europe.name = "Europe"
    europe.size = 2
    europe.population = 7
    europe.numberOfCountries = 12
    europe.compassDirection = "West"
    console.log(europe)

var asia = new continent()
    asia.name = "Asia"
    asia.size = 2
    asia.population = 3
    asia.numberOfCountries = 45
    asia.compassDirection = "East" 
//Displaying instance variable
console.log(asia)

var africa = new continent()
    africa.name = "Africa"
    africa.size = 5
    africa.population = 33
    africa.numberOfCountries = 41
    africa.compassDirection = "North" 
console.log(africa)
