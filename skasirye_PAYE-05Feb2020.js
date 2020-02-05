//Homework: create a function that calculates PAYE
function paye () {
	var salary=1000000
	var payerate=30/100
	var tax=salary*payerate
	var netsal=salary-tax
	console.log("PAYE from Stephen Kasirye \n")
	console.log("Full Salary  = ", salary)
	console.log("Paye Rate    = ", payerate)
	console.log("PAYE Actual  = ", tax)
	console.log("Net Salary   = ", netsal)
}
paye()