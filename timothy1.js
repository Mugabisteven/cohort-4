//Defining a function tests with a parameter that takes two tests as arguments
function tests(test1,test2)
{
//invoking of a block of code
//declaring a variable greater which is assigned to test2 greater than test1 otherwise compare test1 to test2
let greater = test2>test1?test1:test2
//The return function is used to expose functions to other values. retruning the function greater.
return greater

//Invoking of a block of code
}

//Defining a function coursework with a parameter as cswork
 function coursework(cswork)
 {
//Declaring a variable coursework being assigned to cswork plus tests
 let coursework = cswork + tests(80,80)
 
 //Printing the output of variable coursework
 console.log(coursework)
 //The return function is used to expose functions to other values. returning the function coursework.
return coursework

 }

 //A function that divides coursework by the input parameter which is a
function avg(a)
{
//Declaring a variable avg being assigned to an operand coursework which contains a value as 90
let avg =coursework(90)/a
//The return function is used to expose functions to other values. returning the function avg.
return avg

}

//A function crsmark containing an input parameter of a
function crsmark(a)
{
//Declaring a variable as exm being assigned to avg containing a value of 2 multiplied by a divide by 100
let exm = avg(2)*(a/100)
//The return function is used to expose functions to other values. returning the function exm.
 return exm 
}
//A function defined as exam containing an input parameter of a
function exam(a)
{
//Declaring a variable fexam being assigned to 60 divided by 100 in brackets and multiplied by the value a
let fexam = (60/100)*a
//The return function is used to expose functions to other values. returning the function fexam
return fexam

}
//A function defined as fnal 
function fnal()
{
//Declaring a variable fmark being assigned to the operand exam with a value of 75 added to crsmark with a value of 40
let fmark = exam(75)+crsmark(40)
//Printing the output of the variable fmark.
console.log(fmark)

}
//calling of the function fnal
fnal()
//This program is compling the marks of a student through using the coursework, test1, test2 and the final exam marks.