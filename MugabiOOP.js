//Defining beverages class sodas with 5 classes.
let soda={pepsi:"mirinda",cocacola:"fanta",riham:"rockboom",caanan:"skyview",wavah:"water"}
//Printing out properties of the object.
console.log(soda.pepsi)
console.log(soda.cocacola)
console.log(soda.riham)
console.log(soda.caanan)
console.log(soda.wavah)

//Defining class alcahol of different brands with 5 classes.
let alcahol={ubl:"tuskerlite",nilebrewies:"nilestount",Heineken:"heinekenlager",whiskey:"mamont",vodka:"absolute"}
//Printing out properties of the object.
console.log(alcahol.ubl)
console.log(alcahol.nilebrewies)
console.log(alcahol.Heineken)
console.log(alcahol.whiskey)
console.log(alcahol.vodka)

//Defining building materials with 5 classes
let buildingmaterials={cement:"hima",nails:"roofings",paint:"sadolin",ironbars:"sembule",tiles:"goodwill"}
//Printing out properties of the object.
console.log(buildingmaterials.cement)
console.log(buildingmaterials.nails)
console.log(buildingmaterials.paint)
console.log(buildingmaterials.ironbars)
console.log(buildingmaterials.tiles)
//Defining company's bookings with 5 classes
let bookings={hotels:"mestil",leisureparks:"adveturepark",safaris:"greatlakes",gameparks:"murchusion",resorts:"wildwater"}
//Printing out properties of the object.
console.log(bookings.hotels)
console.log(bookings.leisureparks)
console.log(bookings.safaris)
console.log(bookings.gameparks)
console.log(bookings.resorts)
//Defining the academedia categories by 5 classes.
let academia={kinder:"littletots",pschool:"kps",secondary:"smack",tertiary:"ymca",university:"ucu"}
//Printing out properties of the object.
console.log(academia.kinder)
console.log(academia.pschool)
console.log(academia.secondary)
console.log(academia.tertiary)
console.log(academia.university)
   

//// Tuesday's work


/* Basically this is a template of other continent that would be called using var.
function continent () 

{
    this.name = "Africa";
    this.countriesnos = "54";
    this.lakesnos = "34";
    this.mountainnos = "24";
    this.riversnos = "72";
}
console.log(continent.name)

///This means var europe is creating another instance for example 
var europe= new continent()
console.log(europe.name)
onsole.log(europe.countriesnos)
onsole.log(europe.lakesnos)
onsole.log(europe.riversnos)
onsole.log(europe.mountainnos)
// example 2
var asia= new continent()*/

 /*

 /*Tuesday's assignment*/

/* function beverageCo()
{
    this.name
    this.brandColor
    this.location
    this.brands
    this.founder
}

var cocaCola = new beverageCo()
    cocaCola.name = 'cocaCola'
    cocaCola.brandColor= 'red'
    cocaCola.location= 'namanve'
    cocaCola.brands= 'fanta'
    cocaCola.founder = 'mugabi'

var pepsi= new beverageCo()
    

console.log(cocaCola.name)


function brewies()
{
    this.name
    this.location
    this.brands
    this.md
}
var nilebrewies = new brewies()

nilebrewies.name="nilebrewies"
nilebrewies.location="Jinja"
nilebrewies.brands ="blue"
nilebrewies.md ="Ociici"

console.log(nilebrewies.md)*/

 /*  Wednesday's assighnment*/

 function beverageCo (name,brandColor, location,brands,founder)
 {
     this.name
     this.brandColor
     this.location
     this.brands
     this.founder
 }
 
 var cocaCola = new beverageCo()
     cocaCola.name = 'cocaCola'
     cocaCola.brandColor= 'red'
     cocaCola.location= 'namanve'
     cocaCola.brands= 'fanta'
     cocaCola.founder = 'mugabi'
 
 var pepsi= new beverageCo("cocaCola","red","namanve","fanta","mugabi")
     
 
 console.log(cocaCola.name)
 console.log(cocaCola.founder)
 console.log(cocaCola.location)