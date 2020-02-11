/*
//Defining an object plate and assinging its properties
let plate={type:"plastic",Color:"red",size:"Small",thinkness:"25inch",Price:"1500shs"}
// Print out properties of a plate
console.log("The plate has the following properties:"+plate.color)
console.log(plate.type)
console.log(plate.size)
console.log(plate.thinkness)
console.log(plate.price)

// Defining an object TV and assigning its properties
let TV={make:"samsung",type:"flatscreen",color:"black",size:"32inch",price:"400000shs"}
// Print out TV properties
console.log("The make of the TV is."+TV.make)
console.log("The type of the TV is."+TV.type)
console.log("The color of the TV is."+TV.color)
console.log("The size of the TV is."+TV.size)
console.log("The price of the TV is."+TV.price)




// Defining an object Chicken and assigning its properties
Let chicken ={make:"ugachick",quantity:"3kg",Price:"35000shs",type:"broiler",part:"wings"}
// Print out properties of chicken
console.log("The chicken has the following properties:"+chicken.make)
console.log(chicken.quantity)
console.log(chicken.price)
console.log(chicken.type)
console.log(chicken.part)

// Defining an object cooker and assigning its properties
let cooker={origin:"China",brand:"laijie",color:"white",certification:"CE",price:"3000000shs"}
// Print out properties of cooker
console.log("The cooker has the following properties:"+cooker.origin)
console.log(cooker.brand)
console.log(cooker.color)
console.log(cooker.certification)
console.log(cooker.price)

// Define an object fridge assigning its properties
let fridge={make:"samsung",type:"smart",color:"black",price:"$3299",origin:"UK"}
// Print out fridge assigning its properties
console.log("The make of the fridge is."+fridge.make)
console.log("The type of the fridge is."+fridge.type)
console.log("The color of the fridge is."+fridge.color)
console.log("The price of the fridge is."+fridge.price)
console.log("The origin of the fridge is."+fridge.origin)
*/
// Definition of objects creating instances and printing out properties of their intances.
function electronics()
{
 this.name
 this.make
 this.color
 this.price
 this.origin 

}
var fridge=new electronics()

fridge.name='fridge'
fridge.make='LG'
fridge.color='black'
fridge.price='3000000shs'
fridge.origin='uk'
console.log(fridge.color)


var TV=new electronics()

TV.name='TV'
TV.make='samsung'
TV.color='black'
TV.price='400000shs'
TV.origin='uk'
console.log(TV.name)

var cooker=new electronics()

cooker.name='cooker'
cooker.make='cook'
cooker.color='white'
cooker.price='400000shs'
cooker.origin='china'
console.log(cooker.make)










