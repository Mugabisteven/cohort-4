// Defining the function "tests",that takes two parametersi.e test1 and test2.
function tests(test1,test2) 
{
    // Declaring variable greater which is assigned to the function tests' result.
let greater = test2>test1?test1:test2
return greater

}
// Defining the function "coursework",that takes a parameter cswork.
 function coursework(cswork) 
 {
    // Initianize variable coursework to parameter cswork added with the result from calling function "tests" .
 let coursework = cswork + tests(80,80)
 
 // Print the  result assigned to variable name 'coursework' on to the screen.
 console.log(coursework)
 return coursework

 }
// Defining the function avg that takes a parameter "a".
function avg(a)
{
   // Declaring variable avg to a calling function coursework which is divided by a parameter "a".
let avg =coursework(90)/a 
return avg

}

// Defining the function crsmark that takes single parameter "a".
function crsmark(a)
{
// Declaring variable exm to a calling function avg which is multiplied by the parameter a percent.
let exm = avg(2)*(a/100)
return exm 

}
// Defining the function exam that takes a parameter "a"
function exam(a)
{
   // Initialize variable fexam which is assigned to a parameter "a" of a function exam multiplied by 60 percent.
let fexam = (60/100)*a 
return fexam

}
// Defining the function fnal that takes unknown parameter.
function fnal()
{
   // Declaring the variable fnal to calling function exam which is added with another calling function crsmark.
let fmark = exam(75)+crsmark(40) // 
// Print the initiazed variable fmark result's on the screen.
console.log(fmark) 

}
// Invoking the function fnal.
fnal()