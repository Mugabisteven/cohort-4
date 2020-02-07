// This is a function returns parameters showing which test is greater
function tests(test1,test2)
{
 // if test2 is greater than test1 ingore test1 and take test2  
let greater = test2>test1?test1:test2
// Returning the greater valve
return greater


}

// this function returns the coursework mark
 function coursework(cswork)
 {
//Assigning the summation of cswork and arguments to coursework
 let coursework = cswork + tests(80,80)
 // Print out coursework
 console.log(coursework)
 //Returning coursework
return coursework

 }
//This function calculates the average valve of the coursework
function avg(a)
{
 // Assigning coursework  to average   
let avg =coursework(90)/a
//Returning average
return avg

}

// This Function calculates the crsmark
function crsmark(a)
{
 //Assigning the multplication  to exm
let exm = avg(2)*(a/100)
// Returning the variable exm
 return exm 
}
//This is the exam function 
function exam(a)
{
//Assigning division and multplication operator to fexam
let fexam = (60/100)*a
//Returning variable Fexam
return fexam

}
// This function calculates fnal mark
function fnal()
{
//Assigning summation for exam and crsmark
let fmark = exam(75)+crsmark(40)
//Print out fmark
console.log(fmark)

}
//invoking variable fnal
fnal()