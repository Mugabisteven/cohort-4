/**
Monday 10Feb2020 Object Assignment
This assignment is themed aroung objects for the project of Free Slot, abbreviated to fs
The practise focus is to declare up to 5 objects and print out their 5 properties **/

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
console.log ("The Date and Time when the payment qualified: " + fscashModule.timeStamp)

console.log ("\nThank You\n")