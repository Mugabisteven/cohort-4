//declaring the function tests
function tests(test1,test2)
{
//check if test2 is > test1 -if true take test1 else take test2
let greater = test2>test1?test1:test2
//returns the value in the greater memory space
return greater
}

//declaring the function coursework
function coursework(cswork)
 {
 //coursework assignment & tests invocation
 let coursework = cswork + tests(80,80)
 //prints out coursework
 console.log(coursework)
 //returns coursework
return coursework
 }

//declaring the function avg
function avg(a)
{
//coursework invocation which is divisble by avg	
let avg =coursework(90)/a
//returns avg
return avg
}

//declaring the function crsmark
function crsmark(a)
{
//exm assignment & avg invocation & un unknown parameter
let exm = avg(2)*(a/100)
//returns exm
return exm 
}

//declaring the function exam
function exam(a)
{
//fexam assignment & un known parameter
let fexam = (60/100)*a
//returns fexam
return fexam
}

//declaring the function fnal
function fnal()
{
//fmark assignment & invocation of exam & crsmark parameters
let fmark = exam(75)+crsmark(40)
//prints out fmark
console.log(fmark)
}
//calling the function fnal
fnal()

//This program computes the final marks of a student using variables like coursework, exam and then 
//the total is displayed in the variable name fmark

