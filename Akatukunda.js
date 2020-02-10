//Defining the function tests
function tests(test1,test2)
{
//Check if test2 is > test1 -if true take test1 else take test2
let greater = test2>test1?test1:test2
//Returns greater to any calling function
return greater
}

//Defining the function coursework
function coursework(cswork)
 {
 //Coursework assignment & tests function invocation
 let coursework = cswork + tests(80,80)
 //Prints out coursework
 console.log(coursework)
 //Returns coursework to any calling function
return coursework
 }

//Defining the function avg
function avg(a)
{
/**
Avg assignment 
Coursework function invocation which is divisble by avg	
**/
let avg =coursework(90)/a
//Returns avg to any calling function
return avg
}

//Defining the function crsmark
function crsmark(a)
{
//Exm assignment & avg function invocation & un unknown parameter
let exm = avg(2)*(a/100)
//Returns exm to the calling function
return exm 
}

//Defining the function exam
function exam(a)
{
//Fexam assignment & un known parameter
let fexam = (60/100)*a
//Returns fexam to the calling function
return fexam
}

//Defining the function fnal
function fnal()
{
//Fmark assignment & invocation of functions exam & crsmark parameters
let fmark = exam(75)+crsmark(40)
//Prints out fmark
console.log(fmark)
}
//Calling the function fnal
fnal()

/**
This program computes the final marks of a student using variables like coursework, exam and then 
the total is displayed in the variable name fmark
**/
