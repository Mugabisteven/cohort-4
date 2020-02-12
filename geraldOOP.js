// // Declaring object "house"
// let house = { type: "Bangalow", address: "Bukoto", street: "Butoto_Street", numberOfRooms: "Five", roofStyle: "flat" }
// // Printing "house" object values and their properties
// console.log("the type of house is: " + house.type)
// console.log("the address of house is: " + house.address)
// console.log("the street of house is: " + house.street)
// console.log("the number of rooms in the house is: " + house.numberOfRooms)
// console.log("the style of the roof is: " + house.roofStyle)


// // Declaring object "underwear"
// let cloth = { type: "underwear", material: "silk", color: "pink", style: "lace", size: "extraLarge" }
// // Printing "underwear" object values and their properties
// console.log(cloth.type)
// console.log(cloth.material)
// console.log(cloth.color)
// console.log(cloth.style)
// console.log(cloth.size)


// // Declaring object "lion"
// let lion = { kingdom: "animalia", order: "carnivora", skinType: "fur", prey: "antelope", topSpeed: "56kph" }
// // Printing "lion" object values and their properties
// console.log("the kingdom for lion is: " + lion.kingdom)
// console.log("the order is: " + lion.order)
// console.log("the lion's skin type is: " + lion.skinType)
// console.log("the lion preys on: " + lion.prey)
// console.log("it has a top speed of: " + lion.topSpeed)


// // Declaring object "plumbing"
// let plumbing = { type: "faucet", purpose: "controlRelease", material: "copper", diameter: "120mm", sealType: "rubber" }
// // Printing "plumbing" object values and their properties
// console.log(plumbing.type)
// console.log(plumbing.purpose)
// console.log(plumbing.material)
// console.log(plumbing.diameter)
// console.log(plumbing.sealType)


// // Declaring object "calendar"
// let calendar = { type: "tactile", material: "paper", variant: "wallCalendar", purpose: "reminder", maxLength: "12months" }
// // Printing "calendar" object values and their properties
// console.log(calendar.type)
// console.log(calendar.material)
// console.log(calendar.variant)
// console.log(calendar.purpose)
// console.log(calendar.maxLength)



function cloth() {
   this.type
   this.material
   this.color
   this.style
   this.size
}

var underwear = new cloth()
cloth.type = 'underwear'
cloth.material = 'silk'
cloth.color = 'pink'
cloth.style = 'thong'
cloth.size = 'large'
// printing output for cloth type
console.log(cloth.size)

var sweater = new cloth()
cloth.type = 'sweater'
cloth.material = 'cotton'
cloth.color = 'grey'
cloth.style = 'turtleneck'
cloth.size = 'extraLarge'
// printing output for cloth type
console.log(cloth.material)

var trouser = new cloth()
cloth.type = 'trouser'
cloth.material = 'denim'
cloth.color = 'blue'
cloth.style = 'skinny'
cloth.size = 'small'

// printing output for cloth type
console.log(cloth.type)
