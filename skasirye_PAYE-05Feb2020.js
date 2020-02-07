//Homework: create a function that calculates PAYE
<<<<<<< HEAD
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
=======

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


>>>>>>> 135ce41f2f2bb9d2299bf5e38c5bb7c0b16e670a
