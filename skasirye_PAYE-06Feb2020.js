//Homework: create a function that calculates PAYE
function paye (salary, payerate) { //function declaration include parameters
	var tax=salary*payerate //compute the actual PAYE
	var netsal=salary-tax //compute the net salary
	console.log("PAYE from Stephen Kasirye \n") //display my name
	console.log("Full Salary  = ", salary) //display salary
	console.log("PAYE Actual  = ", tax) //display the computed PAYE
	console.log("Net Salary   = ", netsal) //display the net salary
}
paye(1000000,0.3) //Call the function to display results