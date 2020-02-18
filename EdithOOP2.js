
// //Defining a method for object fruit with five properties and creating three instances of this object.
// function bag()
// {
//     this.type
//     this.size
//     this.color
//     this.material
//     this.price
// }

// var travelbag = new bag()
// travelbag.type="travelbag"
// travelbag.size="18-20 inch"
// travelbag.color="grey"
// travelbag.material="leather"
// travelbag.price=80000


// var handbag = new bag()
// handbag.type="handbag"
// handbag.size="12-15 inch"
// handbag.color="red"
// handbag.material="african cloth"
// handbag.price=55000


// var backbag = new bag()
// backbag.type="backbag"
// backbag.size="10-10 inch"
// backbag.color="pink"
// backbag.material="polyester"
// backbag.price=40000



// console.log(travelbag)
// console.log(handbag)
// console.log(backbag)



/** Defining a method for object bag with
 *  five properties, five instances and printing them out */    
function bag(type,size,color,material,price) 
{
     this.type=type
    this.size=size
    this.color=color
    this.material=material
    this.price=price
}
var travelbag= new bag("travelbag","18-20 inch", "grey", "Leather", "80000")
var handbag= new bag("handbag","12-15 inch","red","african cloth",55000)
var backbag= new bag("backbag","10-10 inch","pink","polyester",40000)

console.log(travelbag)
console.log(handbag)
console.log(backbag)
