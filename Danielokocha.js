// Declaring the function "tests",that takes two arguments i.e test1 and test2.
function tests(test1,test2) 
{
    // comparing test1 and test2,and assigned result to variable name greater.
let greater = test2>test1?test1:test2
return greater

}
// Declaring the function "coursework",that takes an argument i.e cswork.
 function coursework(cswork) 
 {
    // initianize variable coursework,add argument cswork to result from function "tests" which takes two arguments 80 and 80
 let coursework = cswork + tests(80,80)
 
 // print the  result assigned to variable name 'coursework' on to the screen.
 console.log(coursework)
 return coursework

 }

function avg(a)
{
   // Initializing variable avg assigned to operand coursework(90) divided with the  local argument "a".
let avg =coursework(90)/a 
return avg

}

// Declaring the function "crsmark" with the local argument "a".
function crsmark(a)
{

let exm = avg(2)*(a/100) // Multiplying the operands avg(2) and (a/100) which is assigned to the initalized variable exm.
 return exm 
}
// Declaring the function exam that takes an argument "a"
function exam(a)
{
let fexam = (60/100)*a // Initialize variable fexam,multipply an operand (60/100) with an argument "a" from function exam.
return fexam

}
// Declaring the function fnal.
function fnal()
{
   // Add the two operands,{exam(75) and crsmark(40)} and assigne it to the initiazed variable fmark.
let fmark = exam(75)+crsmark(40) 
// print the initiazed variable fmark result's on the screen.
console.log(fmark) 

}
fnal()