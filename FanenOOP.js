 /*
 Object Oriented programing in Javascript
 */

 //An object with a hospital property
 
/* let hospital = {name:"love clinic", ward:"female", location:"kampala", status:"24/7", size:"very big",}
 //Display the hospital properties
 console.log(hospital.name)
 console.log(hospital.ward)
 console.log(hospital.location)
 console.log(hospital.status)
 console.log(hospital.size)

 //A church Object
 let church = {name:"Deeper Life", location:"Kansanga", type:"Protestant", department:"Choir", section:"Youth section",}
 //Properties of the object displayed
 console.log(church.name)
 console.log(church.location)
 console.log(church.type)
 console.log(church.department)
 console.log(church.section)

 //A market Object
 let market ={name:"Owino", location:"Town", type:"Local market", vendors:"food and cloth vendors", }
 //Display the market properties
 console.log(market.name)
 console.log(market.location)
 console.log(market.type)
 console.log(market.vendors)

 //An object with a value "girl_friend"
 let girl_friend ={name:"Edith", age:"22", location:"Kawenpe", appearance:"very beautiful", height:"very tall",}
 //Display the properties of the object (girl_friend)
 console.log(girl_friend.name)
 console.log(girl_friend.age)
 console.log(girl_friend.location)
 console.log(girl_friend.appearance)
 console.log(girl_friend.height)

//Phones Object
 let phone ={name:"Techno", brand:"CamonX", color:"Black", price:"1million", camera:"20px",}
 //Displaying the values of the object (Phones)
 console.log(phones.name)
 console.log(phones.brand)
 console.log(phones.color)
 console.log(phones.price)
 console.log(phones.camera)
 */

/*
 Defining object and declaring intances of the objects
 */

//Shoe object
function shoe(){
    this.name
    this.type
    this.size
    this.color
    this.material
    
}
var men_shoe = new shoe()
men_shoe.name = 'All stars'
men_shoe.type = 'Brand new'
men_shoe.color = 'Brown'
men_shoe.material = 'leather'
men_shoe.size = 35

var women_shoe = new shoe()
women_shoe.name = 'nike'
women_shoe.type = 'Heels'
women_shoe.color = 'pink'
women_shoe.material = 'skin'
women_shoe.size = 30

var children_shoe = new shoe()
children_shoe.name = "Canvas"
children_shoe.type = 'Snow boot'
children_shoe.color = 'Red'
children_shoe.material = 'Leather'
children_shoe.size = 20


console.log(men_shoe.name)
console.log(women_shoe.name)
console.log(children_shoe.name)

//Electronic object
function electronic(){
    this.name
    this.size
    this.price
    this.year
    this.brand
}

var television = new electronic()
television.name = 'Samsung'
television.size = '42 inches'
television.price = '1 million UGX'
television.year = 2017
television.brand = 'New'

var woofer = new electronic()
woofer.name = 'LG Sterio'
woofer.size = 'Medium'
woofer.price = '850,000 UGX'
woofer.year = 2019
woofer.brand = 'Fairly used'

var standing_fan = new electronic()
standing_fan.name = 'AUX'
standing_fan.size = 'Small'
standing_fan.price = 450,000
standing_fan.year = 2020
standing_fan.brand = 'New'

//Footballers object
function footballers(){
    this.FullName
    this.height
    this.club
    this.salary
    this.country
}
var footballer1 = new footballers()
footballer1.name = 'Christian Ronaldo'
footballer1.height = '1.87m'
footballer1.club = 'Juventus'
footballer1.salary = '31 million EUR'
footballer1.country = 'Portugal'

var footballer2 = new footballers()
footballer2.name = 'Lionel Messi'
footballer2.height = '1.7m'
footballer2.club = 'Barcelona'
footballer2.salary = '40 million EUR'
footballer2.country = 'Argentina'

var footballer3 = new footballers()
footballer3.name = 'Neymar'
footballer3.height = '1.7m'
footballer3.club = 'Paris Saint-Germain'
footballer3.salary = '36.8 million EUR'
footballer3.country = 'Brazil'

//Cooking utensils object
function cookingUtensils(){
    this.material
    this.size
    this.color
    this.pric
    this.use
}
var cups = new cookingUtensils()
cups.material = 'Plastic'
cups.size = 'Small'
cups.color = 'Blue'
cups.price = '50,000 UGX'
cups.use = 'FOr drinking water'

var pots = new cookingUtensils()
pots.material = 'Aluminiun'
pots.size = 'Large'
pots.color = 'Gold'
pots.price = '200,000 UGX'
pots.use = 'FOr cooking'

var plate = new cookingUtensils()
plate.material = 'Stainless'
plate.size = 'Medium'
plate.color = 'White'
plate.price = '30,000 UGX'
plate.use = 'For Eating'


console.log(television.price)
console.log(Woofer.brand)
console.log(standing_fan.name)
console.log(footballer2.country)
console.log(footballer3.salary)
console.log(pots.material)
console.log(plate.color)
console.log(plate.use)
