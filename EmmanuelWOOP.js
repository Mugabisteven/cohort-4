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
//Declaring and creating an instance of object continent
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
//Displaying instance variables
console.log(asia)

var africa = new continent()
    africa.name = "Africa"
    africa.size = 5
    africa.population = 33
    africa.numberOfCountries = 41
    africa.compassDirection = "North" 
console.log(africa)

//Defining object continent
function song(){
    this.name
    this.duration
    this.artist
    this.genre
    this.ratings
}
//Declaring and creating an instance of object continent
var calipso = new song()
//Initialising variable attributes
    calipso.name = "Calipso"
    calipso.duration = "3 minutes"
    calipso.artist = "wuwiwuwi"
    calipso.genre = "Pop"
    calipso.ratings = "5/10"
    calipso.log(europe)
//Displaying instance variables
console.log(calipso)

var smoothCriminal = new song()
    smoothCriminal.name = "Smooth Criminal"
    smoothCriminal.duration = "2 minutes"
    smoothCriminal.artist = "MJ"
    smoothCriminal.genre = "Pop"
    smoothCriminal.ratings = "7.5/10" 
//Displaying instance variables
console.log(smoothCriminal)

var naki = new song()
    africa.name = "Africa"
    africa.duration = "5 minutes"
    africa.artist = "lil dicky"
    africa.genre = "afro beats"
    africa.ratings = "6.3/10" 
console.log(naki)

//Defining object continent
function movies(){
    this.name
    this.duration
    this.artist
    this.genre
    this.ratings
}
//Declaring and creating an instance of object continent
var orge = new movies()
//Initialising variable attributes
    orge.name = "The Orge"
    orge.duration = "3 minutes"
    orge.author = "ben"
    orge.genre = "thriller"
    orge.ratings = "5/10"
//Displaying instance variables
console.log(orge)

var batman = new movies()
    batman.name = "Smooth Criminal"
    batman.duration = "2 minutes"
    batman.author = "MJ sandy"
    batman.genre = "horror"
    batman.ratings = "7.5/10" 
//Displaying instance variables
console.log(batman)

var flash = new movies()
    flash.name = "Africa"
    flash.duration = "5 minutes"
    flash.author = "dony"
    flash.genre = "comedy"
    flash.ratings = "6.3/10" 
console.log(flash)
