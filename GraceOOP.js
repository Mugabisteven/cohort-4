/**
  Initialise the object bag with a list of properties
  printing the values of the object properties
 **/
/**let bag = {
  size:"45", 
price:"2000UGX", 
category:"gucci",
 origin:"China", 
 colour:"yellow"
        }
console.log(bag.size)
console.log(bag.price)
console.log(bag.category)
console.log(bag.origin)
console.log(bag.colour)
/**
  Initialise the object courseunit with a list of properties
  printing the values of the object properties
 **/
/**let courseunit = {name:"system admnistration",
 coursecode:"CSC2100",
  lecturer:"moses",
   creditunit:"3",
   course:"software engineering"
  }
console.log(courseunit.name)
console.log(courseunit.coursecode)
console.log(courseunit.lecturer)
console.log(courseunit.creditunit)
console.log(courseunit.course)
/**
  Initialise the object phone with a list of properties
  printing the values of the object properties
 **/
/**let phone = {price:"2000UGX",
 origin:"china",
  brand:"techno",
   RAM:"4GB", 
   ROM:"16GB"
  }
console.log(phone.price)
console.log(phone.origin)
console.log(phone.brand)
console.log(phone.RAM)
console.log(phone.ROM)
/**
  Initialise the object bank with a list of properties
  printing the values of the object properties
 **/
/**let bank = {name:"stanbic",
location:"jinja",
owner:"pakash",
 manager:"oguttu",
 staffNumber:"50"
}
console.log(bank.name)
console.log(bank.location)
console.log(bank.owner)
console.log(bank.manager)
console.log(bank.staffNumber)
/**
  Initialise the object course with a list of properties
  printing the values of the object properties
 **/
/**let course = {coursecode:"BSE245",
 name:"software engineering",
  lecturer:"mugabi",
   university:"makerere",
    courseunit:"5"}
console.log(course.coursecode)
console.log(course.name)
console.log(course.lecturer)
console.log(course.university)
console.log(course.courseunit)

/**
 Defining different objects with lists of properties
 Instatiating the objects
 printing the properties of the instances
 **/
function course(){
  this.name
  this.coursecode
  this.lecturer
  this.university
  this.courseunit
}

var software_engineering = new course()
software_engineering.name = "architecture"
software_engineering.coursecode = "CSC2100"
software_engineering.lecturer = "6"
software_engineering.university = "makerere"
software_engineering.courseunit = "architecture"
console.log(software_engineering.name)
console.log(software_engineering.coursecode)
console.log(software_engineering.lecturer)
console.log(software_engineering.university)
console.log(software_engineering.courseunit)

function courseunit(){
  this.name
  this.coursecode
  this.lecturer
  this.creditunit
  this.course
}

var architecture = new courseunit()
architecture.name = "architecture"
architecture.coursecode = "CSC2500"
architecture.lecturer = "moses"
architecture.creditunit = 3
architecture.course = "software engineering"
console.log(architecture.name)
console.log(architecture.coursecode)
console.log(architecture.lecturer)
console.log(architecture.creditunit)
console.log(architecture.course)

function bank(){
  this.name
  this.location
  this.owner
  this.manager
  this.staffNumber
}

var africa = new bank()
africa.name = "africa"
africa.location = "Kampala road"
africa.owner = "moses"
africa.manager = "Prakash"
africa.staffNumber = 50
console.log(africa.name)
console.log(africa.location)
console.log(africa.owner)
console.log(africa.manager)
console.log(africa.staffNumber)

/**Defining an object with its properties as the parameters 
 * Creating an instance of the object
 * Printing out the properties of the instance
*/
function bag(size, category, origin, colour, price){
  this.size = size
  this.category = category
  this.origin = origin
  this.colour = colour
  this.price = price
}

var gucci = new bag("23", "gucci", "china", "green", "25000UGX")
console.log(gucci.size)
console.log(gucci.origin)
console.log(gucci.origin)
console.log(gucci.colour)
console.log(gucci.price)

