/**
Defining object hairstyle and assigning it to the diffrent properties.      

 var hairstyle ={
 	brand: "darling ",
 	length:"long", 
 	colour:"black",
 	texture:"hard",
 	origin:"Uganda"
 			}

Print out the hairstyle properties      

 console.log("The name of the hair brand is:" +hair.brand)
 console.log("The hair length is:" +hair.length)
 console.log("The hair colour is:" +hair.colour)
console.log("The name of the hair texture is:" +hair.texture)
console.log("The hair origin is:" +hair.origin)

Defining object cookies and assigning  it to the different properties 

var beverage={
 	name:"Nile stout",
 	manufacturing_company:"Uganda_breweries",
 	 packaging:"beer",
 	  bottle_size:"250ml",
 	  price:"5000"
 				}
 /**
Print the beverages properties    

 console.log("The beverage name is:"+beverages.name)
 console.log("It was manufactured from :"+beverages.manufacturing_company)
 console.log("The beverage is a :"+beverages.packaging)
 console.log("The bottle size is:"+beverages.bottle_size)
 console.log("A bottle of beer is :"+beverages.price)


 var cookies={
 	company:"Bake for me",
 	flavour:"coconut_cookies",
 	packing:"containers",
 	shape:"rectangular,circular,triangular",
 	origin:"Uganda"


 				}

 //Print the cookies properties 				
 console.log("This is the name of the bakery:"+cookies.company)
 console.log("We make:"+cookies.flavour)
console.log("They are packaged in:"+cookies.packing)
console.log("The different shapes are:"+cookies.shape)
console.log("They are made in:"+cookies.origin)



Defining object shoes and assigning it to the diffrent properties.      

 var shoes ={
	type:"Forever 21",
	size:"37", 
	material:"leather" ,
	price:"35000" ,
	origin:"Califonia"
			}

Print the shoes properties.      
		
 console.log( "Pesh wears: "+shoes.type + " shoe type")
console.log("Her shoe size is :"+shoes.size)
console.log("The shoe material is:"+shoes.material)
console.log("The shoe price is:"+shoes.price)
console.log("It was made in:"+shoes.origin)


Defining object airlines and assigning it to the diffrent properties.      

var airline={
	name:"Qatar", 
	capacity:"233",
	origin:"Doha_Qatar",
	model:"Boeing 747", 
	destinations:"172"
 				}
 				
 				Print out the airlines properties
      
 console.log("The airlines name is :"+airlines.name)
 console.log(" he capacity is:"+airlines.capacity)
console.log("They are made in:"+airlines.origin)
console.log("The model is:"+airlines.model)
 console.log("The destinations are over:"+airlines.destinations)

/**
Defining object beverages and assigning it to the diffrent properties.      


 
**/

//INSTANTIATED WORK//

/**
Defining constructor functions with 5 properties each and instantiating 3 objects for each.
**/
/**
function hairstyle()
{
this.brand
this.length
this.colour
this.texture
this.origin
}
var braids= new hairstyle()
braids.brand="darling"
braids.length="long"
braids.colour="black"
braids.texture="hard"
braids.origin="Uganda"

console.log(braids.brand)
console.log(braids.length)
console.log(braids.colour)
console.log(braids.texture)
console.log(braids.origin)

var kinky=new hairstyle()
kinky.brand="blues"
kinky.length="medium"
kinky.colour="brown"
kinky.texture="soft"
kinky.origin="China"

console.log(kinky.brand)
console.log(kinky.length)
console.log(kinky.colour)
console.log(kinky.texture)
console.log(kinky.origin)


var weave=new hairstyle()
weave.brand="darling"
weave.length="short"
weave.colour="black"
weave.texture="soft"
weave.origin="Uganda"

console.log(weave.brand)
console.log(weave.length)
console.log(weave.colour)
console.log(weave.texture)
console.log(weave.origin)


function beverage()
{
	this.name
	this.manufacturing_company
	this.packaging
	this.bottle_size
	this.price

}
var soda= new beverage()
soda.name="Sprite"
soda.manufacturing_company="Cocacola"
soda.packaging="cans"
soda.bottle_size="250ml"
soda.price=3000

console.log(soda.name)
console.log(soda.manufacturing_company)
console.log(soda.packaging)
console.log(soda.bottle_size)
console.log(soda.price)



var beer= new beverage()
beer.name="Nile stout"
beer.manufacturing_company="Uganda_breweries"
beer.packaging="bottled"
beer.bottle_size="350ml"
beer.price=4000

console.log(beer.name)
console.log(beer.manufacturing_company)
console.log(beer.packaging)
console.log(beer.bottle_size)
console.log(beer.price)




var drinking_water= new beverage()
drinking_water.name="Rwenzori"
drinking_water.manufacturing_company="Rwenzori_bottling_company"
drinking_water.packaging="plastic_bottle"
drinking_water.bottle_size="150ml"
drinking_water.price=1000

console.log(drinking_water.name)
console.log(drinking_water.manufacturing_company)
console.log(drinking_water.packaging)
console.log(drinking_water.bottle_size)
console.log(drinking_water.price)
**/
function hairstyle(brand,length,colour,texture,origin)
{
this.brand=brand;
this.length=length;
this.colour=colour;
this.texture=texture;
this.origin=origin;
}

var braids= new hairstyle("darling","long","black","hard","Uganda")
console.log(braids)

var kinky = new hairstyle("blues","medium","brown","soft","China")
console.log(kinky)

var weave = new hairstyle("darling","short","black","soft","Uganda")
console.log(weave)

function beverage(name,manufacturing_company,packaging,bottle_size,price)
{
    this.name =name;
	this.manufacturing_company=manufacturing_company;
	this.packaging=packaging;
	this.bottle_size=bottle_size;
	this.price=price;	
}

var beer= new beverage("Nile stout","Uganda_breweries","bottled","350ml",4000)
console.log(beer);

var soda= new beverage("Sprite","Cocacola","cans","250ml",3000)
console.log(soda)

var drinking_water= new beverage("Rwenzori","Rwenzori_bottling_company","plastic_bottle","150ml",1000)
console.log(drinking_water)













