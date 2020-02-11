/**
Monday 10Feb2020 Object Assignment
This assignment is themed aroung objects for the project of Free Slot, abbreviated to fs
The practise focus is to declare up to 5 objects and print out their 5 properties 

console.log ("\nOBJECT ONE")
var fsparking = {businessName:"Acacia Mall", location:"Acacia Avenue", slotCount:"91", manager:"Kasule", phoneNo:"+256-712-123456"}
console.log ("There are parking slots at: " + fsparking.businessName)
console.log (fsparking.businessName + " is found on: " + fsparking.location)
console.log (fsparking.businessName + " parking has: " + fsparking.slotCount + " slots")
console.log ("Business Manager's name is: " + fsparking.manager)
console.log ("The manager's phone No. is: " + fsparking.phoneNo)

console.log ("\nOBJECT TWO")
var fsuser = {userName:"Dean", phoneNo:"+256-797-123456", phoneType:"iPhone 8 Plus", cashlessBalance:"UGX 13,000", destination:"Acacia Mall"}
console.log ("The sample User's name is: " + fsuser.userName)
console.log ("The user's Phone Number is: " + fsuser.phoneNo)
console.log ("Phone type for compatibility: " + fsuser.phoneType)
console.log ("Current Credit balance stands at: " + fsuser.cashlessBalance)
console.log ("The sample User's destination is: " + fsuser.destination)

console.log ("\nOBJECT THREE")
var fsparkingowner = {ownerName:"Salim Salim", phoneNo:"+254-724-456123", phoneType:"iPhone 7 Plus", parkingPlaces:"3 Businesses", bankDetails:"Mercantile Bank 8967452301"}
console.log ("The Parking Owner's name is: " + fsparkingowner.ownerName)
console.log ("Parking Owner's Phone No. is: " + fsparkingowner.phoneNo)
console.log ("Phone type for compatibility: " + fsparkingowner.phoneType)
console.log ("The number of Parking Slots is: " + fsparkingowner.parkingPlaces)
console.log ("Bank Name and Account Number are: " + fsparkingowner.bankDetails)

console.log ("\nOBJECT FOUR")
var fsgovernment = {businessName:"Acacia Place", location:"Acacia Avenue", slotCount:"763", vatID:"110000456789", kccaCompliance:"Trading License 2019-20"}
console.log ("The Business Name to be taxed is: " + fsgovernment.businessName)
console.log (fsgovernment.businessName + " is located at: " + fsgovernment.location)
console.log ("Used slots for billing purposes are: " + fsgovernment.slotCount)
console.log ("Registered VAT ID with URA is: " + fsgovernment.vatID)
console.log ("KCCA Compliance by Year: " + fsgovernment.kccaCompliance)

console.log ("\nOBJECT FIVE")
var fscashModule = {userName:"Dean", businessName:"Acacia Mall", cashlessBalance:"UGX 17,960", bankDetails:"Mercantile Bank 8967452301", timeStamp:"2020-02-10 17:30:00"}
console.log ("The User's name to settle payments for is: " + fscashModule.userName)
console.log ("The Business Name where the user parked is: " + fscashModule.businessName)
console.log ("Cash Balance on User credits before receiving hard cash is: " + fscashModule.cashlessBalance)
console.log ("Bank Details of Parking are: " + fscashModule.bankDetails)
console.log ("The Date and Time when the payment qualified: " + fscashModule.timeStamp) **/

/* Translate the above code to adapt to the class of Tuesday 11Feb2020
Assignment: create a function and three corresponding instances for each object above */

console.log ("\nOBJECT ONE adapted to method & instances\n")
function fsparking () {
	this.businessName
	this.location
	this.slotCount
	this.manager
	this.phoneNo
}

//Instance One
var accaciaOne = new fsparking () 
accaciaOne.businessName='Acacia Mall'
accaciaOne.location='Acacia Avenue'
accaciaOne.slotCount='91'
accaciaOne.manager='Kasule'
accaciaOne.phoneNo='+256-712-123456'

//Test print out of instance one
console.log ("There are parking slots at: " + accaciaOne.businessName)
console.log (accaciaOne.businessName + " is found on: " + accaciaOne.location)
console.log (accaciaOne.businessName + " parking has: " + accaciaOne.slotCount + " slots")
console.log ("Business Manager's name is: " + accaciaOne.manager)
console.log ("The manager's phone No. is: " + accaciaOne.phoneNo)

//Instance Two
var bukotoTwo = new fsparking () 
bukotoTwo.businessName='Heights Apartments'
bukotoTwo.location='Masanyalaze Lane'
bukotoTwo.slotCount='31'
bukotoTwo.manager='Amsugut'
bukotoTwo.phoneNo='+256-782-123456'

//Instance Three
var muyengaOne = new fsparking () 
muyengaOne.businessName='British School'
muyengaOne.location='Lubobo Close'
muyengaOne.slotCount='17'
muyengaOne.manager='Kembabazi'
muyengaOne.phoneNo='+256-792-123456'

//OBJECT TWO to method & instance
function fsuser () {
	this.userName
	this.phoneNo
	this.phoneType
	this.cashlessBalance
	this.destination
}

//Instance One
var userOne = new fsuser () 
userOne.userName='Dean'
userOne.phoneNo='+256-797-123456'
userOne.phoneType='iPhone 5 SE'
userOne.cashlessBalance='UGX 13,000'
userOne.destination='Acacia Mall'

//Instance Two
var userOne = new fsuser () 
userOne.userName='Donald'
userOne.phoneNo='+255-797-123456'
userOne.phoneType='Samsung Galaxy S11'
userOne.cashlessBalance='UGX 7,900'
userOne.destination='Heights Apartments'

//Instance Three
var userOne = new fsuser () 
userOne.userName='Barbra'
userOne.phoneNo='+253-797-123456'
userOne.phoneType='iPhone 8 Plus'
userOne.cashlessBalance='UGX 21,300'
userOne.destination='British School'

//OBJECT THREE to method & instance
function fsparkingowner () {
	this.ownerName
	this.phoneNo
	this.phoneType
	this.parkingPlaces
	this.bankDetails
}

//Instance One
var ownerOne = new fsparkingowner () 
ownerOne.ownerName='Salim Salim'
ownerOne.phoneNo='+259-724-458123'
ownerOne.phoneType='iPhone 7 Plus'
ownerOne.parkingPlaces='3 Businesses"'
ownerOne.bankDetails='Mercantile Bank 8967452301'

//Instance Two
var ownerOne = new fsparkingowner () 
ownerOne.ownerName='Mutaaasa Kafeero'
ownerOne.phoneNo='+256-414-453923'
ownerOne.phoneType='One Plus One'
ownerOne.parkingPlaces='19 Parking Areas"'
ownerOne.bankDetails='Absa Bank 8967452301'

//Instance Three
var ownerOne = new fsparkingowner () 
ownerOne.ownerName='Mary Poppins'
ownerOne.phoneNo='+256-717-444423'
ownerOne.phoneType='Samsung Galaxy Fold'
ownerOne.parkingPlaces='9 Businesses'
ownerOne.bankDetails='NC Bank 8967452301'

console.log ("\nThank You\n")