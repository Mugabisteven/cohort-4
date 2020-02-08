/* A program to calculate a students final score using the exam and coursework scores*/
/* The program prints the students total coursework marks and final exam mark to the screen*/



//A function to test the highest test score
function tests(test1,test2)
{
	//Comparing test scores and assigning the higher to variable greater	
	let greater = test2>test1?test1:test2
	//Exposing the the hogher test score to other functions
	return greater
}

//A funcion to consolidate the test and coursework scores
 function coursework(cswork)
 {
 	//Invoking the tests function to find higher test score
 	//Adding the coursework score to the higher test score
 	//Storing the sum in variable coursework
 	let coursework = cswork + tests(80,80)

 	//Printing coursework value to the screen
 	console.log(coursework)

 	//Exposing the variable coursework to other functions
	return coursework
 }

//A function to calculate the average coursework score
function avg(a)
{
	//Invoking coursework function
	//Dividing coursework return value by parameter parsed to avg function
	//Assigning the result to variable avg
	let avg =coursework(90)/a

	//Exposing variable avg to other functions
	return avg
}
//A function to calculate the coursework weighted marks
function crsmark(a)
{
	//Invoking avg function
	//Calculating the percentage weight for coursework
	//Multiplying percentage by avg return value
	let exm = avg(2)*(a/100)

	//Exposing variable exm to other functions
 	return exm 
}

//A function to calculate the final exam weighted marks
function exam(a)
{
	//Percentage weight of 60 multiplied by exam score
	//Assigning weighted marks to variable fexam
	let fexam = (60/100)*a

	//Exposing variable fexam to other functions
	return fexam
}

//A function to calculate the final course mark
function fnal()
{
	//Adding the weighted exam and coursework scores
	//Storing the sum in fmark variable
	let fmark = exam(75)+crsmark(40)

	//Printing the final course mark to the screen
	console.log(fmark)
}

//Invoking the fnal function
fnal()