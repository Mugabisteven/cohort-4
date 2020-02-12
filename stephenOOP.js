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
var userTwo = new fsuser () 
userTwo.userName='Donald'
userTwo.phoneNo='+255-797-123456'
userTwo.phoneType='Samsung Galaxy S11'
userTwo.cashlessBalance='UGX 7,900'
userTwo.destination='Heights Apartments'

//Instance Three
var userThree = new fsuser () 
userThree.userName='Barbra'
userThree.phoneNo='+253-797-123456'
userThree.phoneType='iPhone 8 Plus'
userThree.cashlessBalance='UGX 21,300'
userThree.destination='British School'

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
var ownerTwo = new fsparkingowner () 
ownerTwo.ownerName='Mutaaasa Kafeero'
ownerTwo.phoneNo='+256-414-453923'
ownerTwo.phoneType='One Plus One'
ownerTwo.parkingPlaces='19 Parking Areas"'
ownerTwo.bankDetails='Absa Bank 8967452301'

//Instance Three
var ownerThree = new fsparkingowner () 
ownerThree.ownerName='Mary Poppins'
ownerThree.phoneNo='+256-717-444423'
ownerThree.phoneType='Samsung Galaxy Fold'
ownerThree.parkingPlaces='9 Businesses'
ownerThree.bankDetails='NC Bank 8967452301'

/* Assignment: Translate the above code into a method that takes on parameters then declare the instance with coresponding 
arguments*/
function fsparking (businessName, location, slotCount, manager, phoneNo) {
	this.businessName = businessName
	this.location = location
	this.slotCount = slotCount
	this.manager = manager
	this.phoneNo = phoneNo
}
var accaciaOne = new fsparking ('Acacia Mall','Acacia Avenue','91','Kasule','+256-712-123456')
var bukotoTwo = new fsparking ('Heights Apartments','Masanyalaze Lane','31','Amsugut','+256-782-123456') 
var muyengaOne = new fsparking ('British School','Lubobo Close','17','Kembabazi','+256-792-123456') 

function fsuser (userName, phoneNo, phoneType, cashlessBalance, destination) {
	this.userName = userName
	this.phoneNo = phoneNo
	this.phoneType = phoneType
	this.cashlessBalance = cashlessBalance
	this.destination = destination
}
var userOne = new fsuser ('Dean','+256-797-123456','iPhone 5 SE','UGX 13,000','Acacia Mall')
var userTwo = new fsuser ('Donald','+255-797-123456','Samsung Galaxy S11','UGX 7,900','Heights Apartments') 
var userThree = new fsuser ('Barbra','+253-797-123456','iPhone 8 Plus','UGX 21,300','British School') 

function fsparkingowner (ownerName, phoneNo, phoneType, parkingPlaces, bankDetails) {
	this.ownerName = ownerName
	this.phoneNo = phoneNo
	this.phoneType = phoneType
	this.parkingPlaces = parkingPlaces
	this.bankDetails = bankDetails
}
var ownerOne = new fsparkingowner ('Salim Salim','+259-724-458123','iPhone 7 Plus','3 Businesses','Mercantile Bank 8967452301')
var ownerTwo = new fsparkingowner ('Mutaaasa Kafeero','+256-414-453923','One Plus One','19 Parking Areas','Absa Bank 8967452301') 
var ownerThree = new fsparkingowner ('Mary Poppins','+256-717-444423','Samsung Galaxy Fold','9 Businesses','NC Bank 8967452301') 

console.log ("\nThank You\n")