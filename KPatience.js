//A function to calculate PAYE 
function PAYE (){
	//assign 2m to gross
	let gross = 2000000
	//assign 30% to rate
	let rate = 30/100
	//then calculate the tax
	let tax = gross*rate
	//then calculate net pay 
	let netPay = gross-tax
	console.log(tax)
	console.log(netPay)
}
PAYE()
