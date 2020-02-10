//Define function tests that takes 2 parameters
function tests(test1,test2)
{
//Declare variable greater and assign to result of the greater of test1 or test 2
let greater = test1>test1?test1:test2
//Returns the greater value of the 2 parameters to any calling functions
return greater

}
//Define function coursework that takes one parameter
 function coursework(cswork)
 {
//Declare variable coursework and assign it to summation of value parameter cswork and returning value of function tests
 let coursework = cswork + tests(80,80)
 //Print result of variable coursework 
 console.log(coursework)
//Returns the value of the function coursework to any calling functions
return coursework

 }
//Define a function named avg to one parameter
function avg(a)
{
//Declare variable avg to the returning value of function coursework divided by parameter a
let avg =coursework(90)/a
//Returns the value of function avg to any calling functions
return avg

}

//Define function crsmark and takes one parameter
function crsmark(a)
{
//Declare variable exm and assign to the product of returning value of function avg and percentage of parameter a 
let exm = avg(2)*(a/100)
//Returns the value of variable exm to any calling functions
 return exm 
}
//Define function exam and takes one parameter 
function exam(a)
{
//Declare and innitialise variable fexam to product of 60 percentage of value of parameter a
let fexam = (60/100)*a
//Returns the value of variable fexm to any calling functions
return fexam

}
//Empty brackets define an anoymous self executing function  fnal and then calling it with no argments effectively causing the block to be evaluated
function fnal()
{
 //Declare and innitialise variable fmark addtion of product of value exam with 75 and product of value crsmark with 40
let fmark = exam(75)+crsmark(40)
//Command to print results of fmark
console.log(fmark)

}
//Provides scoping for executing fnal function 
fnal()
//Calls fnal function that interlinks the rest