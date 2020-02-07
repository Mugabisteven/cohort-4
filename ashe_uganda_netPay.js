//declaring and defining a parameterized function which calculates the net salary
function netPay(totalSalary, uraRate){
	//calculating the tax amount and assigning it to a varibale
	var uraDues = (uraRate/100) *totalSalary

	//subtracting the tax amount from the total amount paid to the employee
	var ugNetPay = totalSalary - uraDues

	//print the net payment to the screen
	console.log("Your net salary is " + ugNetPay )
	console.log("after reducing tax amount of " + uraDues)
}

//call the netPay function parsing two arguments
netPay(1000000,30)