//Homework: create a function that calculates PAYE

//declare the function then go on to define it
function paye () {
	var salary=1000000 //define the salary
	var payerate=30/100 //compute the tax multiplier
	var tax=salary*payerate //compute the acutal PAYE
	var netsal=salary-tax //compute the net salary
	console.log("PAYE from Stephen Kasirye \n") //display my name
	console.log("Full Salary = ", salary) //display salary
	console.log("PAYE Rate   = ", payerate) //display the PAYE Rate
	console.log("PAYE Actual = ", tax) //display the computed PAYE
	console.log("Net Salary  = ", netsal) //display the net salary
}
paye () //Call the function to diplay results


