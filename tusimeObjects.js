
/*Defining the relationship method and asigning it with different individual's statuses
let relationship ={Mary:"Divorced", Jane:"Married", Godwin:"Single", Yusuf:"Complected", Edith:"Not sure"}
//Printing the outcomes of the relationship object on the console
console.log("Mary is "+ relationship.Mary)
console.log("Jane is Happily "+ relationship.Jane)
console.log("Godwin is misarably "+ relationship.Godwin)
console.log("Yusuf's ralationship is "+ relationship.Yusuf)
console.log("For edith she is "+ relationship.Edith)

/*Defining the radio object showing the different types and where they are manufactured from
let radio = {Sony:"China",Panasonic:"Thaiwan",Makula:"Uganda",LG:"England",Lasonic:"Japan"}

//This console.log function creates space between relationship and radio object statements on the console
console.log()

//Printing the results of the radio object on the console
console.log("Sony radios are made from "+ radio.Sony)
console.log("panasonic radios are made from "+radio.Panasonic)
console.log("Makula radios are made from "+ radio.Makula)
console.log("LG radios are made from "+ radio.LG)
console.log("Lasaonic Radios are made from "+radio.Lasonic)

/* Defining money as an object and asigning it to different countries in terms of currency
let money = {USA:"Dollars",Uganda:"Shillings",England:"Pounds",Nigeria:"Naira",Kenya:"KSH"}

//This console.log function creates space between the radio and premier league object statements on the console
console.log()

//Printing the results of money object on the console
console.log("USA uses "+ money.USA +"as their currency")
console.log("Uganda uses  "+money.Uganda +"as their currency")
console.log("England uses"+ money.England + "as their currency")
console.log("Nigeria uses "+ money.Nigeria +"as their currency")
console.log("Kenya uses "+money.Kenya +"as their currency")

/* Defining premier league as an object and showing what one needs to know about it briefly *
let premier_league = {clubs:20,players:30,stadiums:20,matches:380,Location:"England"}

//This console.log function creates space between premier league and libray object statemnts on the console
console.log()

//printing the results of the premier league objects on the console
console.log("The Premier League has "+ premier_league.clubs + "teams or clubs")
console.log("Each premier league team has "+ premier_league.players+ "players")
console.log("It has "+ premier_league.stadiums + "stadiums")
console.log("All the league games played totals to "+ premier_league.matches + "matches")
console.log("It is found in a country called " + premier_league.Location)

/* Defining a library object that stores details what can be expected of a library *
let library = {identificatio:"ID_number",reading_materials:"Books",Furniture:"chairs and tables",network:"Wifi",attendant:"libralian"}

//This console.log function creates space between premier league and libray object statemnts on the console
console.log()

//Now Printing the results of library objects on the console
console.log("To use a library one needs a "+ library.identificatio)
console.log("materials you can find in the library are "+ library.reading_materials)
console.log("People use "+ library.Furniture +"to seat and read from in the library")
console.log("To access internet in the library users use "+ library.network)
console.log("A person who attends to library users is a "+ library.attendant)

/* Below are different functions (league,relationship and currency)with their respective names,parameters and 
properties and then being printed on the console  */
function league() {
   this.name
   this.clubs
   this.location 

   
}
var premier_league = new league
   premier_league.name = "Premier league"
   premier_league.clubs = 20
   premier_league.location = "England"

console.log(premier_league)

var spanishLeague = new league()
spanishLeague.name = "LaLiga"
spanishLeague.clubs = 20
spanishLeague.location= "spain"

console.log(spanishLeague)

var bundeslegue = new league()
bundeslegue.name = "Bundesileague"
bundeslegue.clubs= 20
bundeslegue.location= "Germany"

console.log(bundeslegue)

//
function relationship() {
this.name
this.married
this.divorced
this.single
  
}

var kiuStudents = new relationship()
kiuStudents.name = "KIU"
kiuStudents.married = 120
kiuStudents.divorced = 52
kiuStudents.single = 1035

console.log(kiuStudents)

var ciuStudents = new relationship()
ciuStudents.name = "CIU"
ciuStudents.married = 20
ciuStudents.divorced = 2
ciuStudents.single = 35

console.log(ciuStudents)

var mukStudents = new relationship()
mukStudents.name = "MUK"
mukStudents.married = 2200
mukStudents.divorced = 200
mukStudents.single = 35000

console.log(mukStudents)


function curreny() {
this.name
this.country
this.rate
    
}
var usa = new  curreny()
usa.name= "Dollar"
usa.country = "USA"
usa.rate = 3800

console.log(usa)

var uganda = new  curreny()
uganda.name= "USH"
uganda.country = "UGANDA"
uganda.rate = 3700

console.log(uganda)

var england = new  curreny()
usa.name= "Pound"
usa.country = "ENGLAND"
usa.rate = 4200

console.log(england)









