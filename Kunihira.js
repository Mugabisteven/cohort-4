//the function tests and the parameters are test1 and test2
function tests(test1,test2)
{
//this is to check if test2 is greater than test1 or else we take test2  
let greater = test2>test1?test1:test2
//returning to the calling value
return greater

}

//the function coursework has a parameter called cswork
 function coursework(cswork)
 {
 //This is assigning the summation of cswork and tests to coursework.
 let coursework = cswork + tests(80,80)
 
 console.log(coursework)
 //returning coursework to the calling value
return coursework

 

//the avg function with the parameter (a)
function avg(a)
{

//We are assigning an argument to coursework
let avg =coursework(90)/a

//returning avg to the calling value 
return avg

}

//the function crsmark and the parameter is a
function crsmark(a)
{
//We are assigning the multiplication of avg(2)and (a/100)to exm
let exm = avg(2)*(a/100)
//returning exm to the calling value
 return exm
}
//the function exam and the parameter (a)
function exam(a)
{

let fexam = (60/100)*a
//returning fexam to the calling value.
return fexam

}
//this is the function fnal
function fnal()
{
//assigning the summation of exam and crsmark to fmark	
let fmark = exam(75)+crsmark(40)
console.log(fmark)

}
//calling the function fnal
fnal()
// Assuming the marks are for a student, 
//we are calculating the final mark by adding the coursework results to the exam inorder to get the finalmark.