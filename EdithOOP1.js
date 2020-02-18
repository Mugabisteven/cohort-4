/*
// Define an object phone and assign with the different properties
let phone={name:"OPPO AS3", RAM:"2.00GB", Androidversion:"V5.2.1", Devicestorage:"16.0GB",color:"red"}
//Print the phone properties
console.log("The phone has the following features:" +phone.color)
console.log(phone.name)
console.log(phone.RAM)
console.log(phone.Androidversion)
console.log(phone.Devicestorage)



// Define an object holy book and assign with the different properties
let holybook={name:"Holy Bible", books:"66books", Newtestament:"27books", Oldtestament:"39books",language:"English"}
//Print the holy book properties
console.log("The holybook has the following properties:" +holybook.name)
console.log(holybook.books)
console.log(holybook.Newtestament)
console.log(holybook.Oldtestament)
console.log(holybook.language)


// Define an object bag and assign with the different properties
let bag={type:"travel bag", size:"18-20 inch", color:"grey", Material:"Leather",price:80000}
//Print the bag's properties
console.log("The bag has the following properties:" +bag.type)
console.log(bag.size)
console.log(bag.color)
console.log(bag.Material)
console.log(bag.price)


// Define an object buffaloturfgrass and assign with the different properties
let buffaloturfgrass={kingdom:"plantae", order:"poales", family:"poaceae", genus:"stenotaphrum",species:"S.secundatum"}
//Print the buffaloturfgrass' properties
console.log("The buffaloturfgrass has the following properties:" +buffaloturfgrass.kingdom)
console.log(buffaloturfgrass.order)
console.log(buffaloturfgrass.family)
console.log(buffaloturfgrass.genus)
console.log(buffaloturfgrass.species)



// Define an object chair and assign with the different properties
let chair={type:"rocking chair", size:"37-45 inches tall", color:"brown", Material:"wood",price:950000}
//Print the properties of the chair
console.log("The chair has the following properties:" +chair.type)
console.log(chair.size)
console.log(chair.color)
console.log(chair.Material)
console.log(chair.price)

*/

//Defining a method for object fruit with five properties and creating three instances of this object.
function bag()
{
    this.type
    this.size
    this.color
    this.material
    this.price
}

var travelbag = new bag()
travelbag.type="travelbag"
travelbag.size="18-20 inch"
travelbag.color="grey"
travelbag.material="leather"
travelbag.price=80000


var handbag = new bag()
handbag.type="handbag"
handbag.size="12-15 inch"
handbag.color="red"
handbag.material="african cloth"
handbag.price=55000


var backbag = new bag()
backbag.type="backbag"
backbag.size="10-10 inch"
backbag.color="pink"
backbag.material="polyester"
backbag.price=40000



console.log(travelbag)
console.log(handbag)
console.log(backbag)