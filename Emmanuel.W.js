//defining a function that takes two params
function tests(test1,test2)     
{
//declaring & initialising a variable
//using a conditional operator
let greater = test1>test1?test1:test2   
return greater


}

//defining a function that takes one param
 function coursework(cswork)
 {
//declaring and initialising a variable
//invoking function test within function coursework
//adding two variables
//ERROR: declared variable using a function name.
 let coursework = cswork + tests(80,80)
//displaying the variable value
 console.log(coursework)
return coursework

 }
//defining function that takes one parameter
function avg(a)
{
//initialising a variable
//invoking a function within another function
//dividing 2 numbers
//ERROR: declared variable using a function name.
let avg =coursework(90)/a
return avg

}

//defining a function
function crsmark(a)
{
//declaring & initialising a variable
//invoking a function within another function
//dividing 2 numbers
let exm = avg(2)*(a/100)
//returns a value
 return exm 
}
//defining a function that takes one parameter
function exam(a)
{
//declaring & initialising a variable
//multiplying two numbers
let fexam = (60/100)*a
return fexam

}
//defining a function without params
function fnal()
{
//declaring and initialising a variable
//invoking 2 functions within another function
//adding two numbers
let fmark = exam(75)+crsmark(40)
//displaying a variable value on the console
console.log(fmark)

}
//invoking a function
fnal()