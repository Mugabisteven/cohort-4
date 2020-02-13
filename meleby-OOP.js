/**Creating an object stadium, initializing some of its properties and displaying them on the console **/
let stadium = {
    name: "Goodison Park", team: "Everton", location: "Liverpool", capacity: "39000", age: "128"
}
console.log("The name of my best stadium is: " +stadium.name)
console.log("The home team is: " +stadium.team)
console.log("It is located in: " +stadium.location)
console.log("Its capacity is: " +stadium.capacity)
console.log("The stadium's age is: " +stadium.age)

/**Creating an object player, initializing some of its properties and displaying them on the console **/
let player = {
    name: "Messi", nationality: "Argentine", height: "1.8m", position: "forward", sport: "football"
 }
 console.log("The GOAT is: " +player.name)
 console.log("He is an: " +player.nationality)
 console.log("His height is: " +player.height)
 console.log("He plays: " +player.position)
 console.log("He is the greatest ever: " +player.sport)

 /**Creating an object phone, initializing some of its properties and displaying them on the console **/
 let phone = {
     name: "iPhone6" , brand: "Apple", screen_size: "6inches", storage: "32GB", front_cam: "13MP"
 }
 console.log("My phone is an: " +phone.name)
 console.log("Brand: " +phone.brand)
 console.log("It's screen_size: " +phone.screen_size)
 console.log("It's storage : " +phone.storage)
 console.log("THe front camera resolution: " +phone.front_cam)

 /**Creating an object competition, initializing some of its properties and displaying them on the console **/
 let competition = {
     name: "UCL", sport:"football", continent: "Europe", age: "60", time = "night"
 }
 console.log("The competition : " +competition.name)
 console.log("The sport: " +competition.sport)
 console.log("Continent it is played in: " +competition.continent)
 console.log("Its years of existence: " +competition.age)
 console.log("It is normally played at: " +competition.time)

/* Instantiating three objects of stadium and also declaring and assigning values
   to 5 properties of each*/
var namboole = new stadium()
namboole.team = 'Uganda Cranes'
namboole.turf_type = 'natural'
namboole.location = 'Uganda'
namboole.capacity = '40,000'
namboole.age = '40'

var Allianz_Arena = new stadium()
Allianz_Arena.team = 'Bayern Munich'
Allianz_Arena.turf_type = 'artificial'
Allianz_Arena.location = 'Germany'
Allianz_Arena.capacity = '60,000'
Allianz_Arena.age = '80'

var Goodison_Park = new stadium()
Goodison_Park.team = 'Everton'
Goodison_Park.turf_type = 'artificial'
Goodison_Park.location = 'England'
Goodison_Park.capacity = '39,000'
Goodison_Park.age = '128'


 /**Creating an object beer, initializing some of its properties and displaying them on the console **/
 let beer = {
     origin: "Jinja", name: "Nile", company: "uganda_breweries", abv: "7%", taste: "lovely" 
 }
 console.log("The name of the beer is: " +beer.name)
 console.log("The beer originated from : " +beer.origin)
 console.log("The manufacturing company is: " +beer.company)
 console.log("Its alcohol content is: " +beer.abv)
 console.log("This drink tastes " +beer.taste)

/*Instantiating another stadium object and assigning values to its properties
  as paramters*/

 var Signal_Iduna_Park = new stadium('Borussia Dortmund', 'artificial', 'Germany', '50,000', '98') 

