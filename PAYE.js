//A function to calculate PAYE 
function PAYE (gross,rate){
	//assign 2m to gross
	let tax = gross*rate
	 
	let netPay = gross-tax
	console.log("Here is the tax payable")
	console.log(tax)
	console.log("Here is the netPay")
	console.log(netPay)

}
PAYE(1000000,30/100);