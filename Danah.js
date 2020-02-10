//user defined function named tests defines paramter named test1 & test2 and is enclosed in parentheses
function tests(test1,test2)
//code to be executed is placed inside curly brackets
{
//Conditional operator used to define statement if test1 >test1 assign test1 or else test 2
let greater = test1>test1?test1:test2
//return passes a value from function greater back to the code that called it but function stops executing as soon as it reaches return
return greater

}
//function named coursework defines parameter named cswork
 function coursework(cswork)
 {
//declare and innitialise variable coursework adding values.
//tests (80,80) is returned value from greater
 let coursework = cswork + tests(80,80)
 //print result of variable coursework defined prior
 console.log(coursework)
//return passes a value from function coursework back to the code that called it but function stops executing as soon as it reaches return
return coursework

 }
//function named avg defines parameter named a
function avg(a)
{
//declare and innitialise variable avg by dividing the product of recalled value of function coursework with 90 by value a .
let avg =coursework(90)/a
//return passes a value from a function avg to the code that called it but function stops executing as soon as it reaches return
return avg

}

//function named crsmark defines parameter named a
function crsmark(a)
{
//declare and innitialise variable exm with multplcation of recalled values of function avg with 2 and diviging value a by 100.
let exm = avg(2)*(a/100)
//return passes a value from a function exm to the code that called it but function stops executing as soon as it reaches return
 return exm 
}
//function named exam defines recalled value to parameter named a
function exam(a)
{
//declare and innitialise variable fexam with multplcation of fraction 60/100 with recalled values of function a   
let fexam = (60/100)*a
//return passes a value from a function fexm to the code that called it but function stops executing as soon as it reaches return
return fexam

}
//Empty brackets define an anoymous self executing function  fnal and then calling it with no argments effectively causing the block to be evaluated
function fnal()
{
 //declare and innitialise variable fmark addtion of product of value exam with 75 and product of value crsmark with 40
let fmark = exam(75)+crsmark(40)
//command to print results of fmark
console.log(fmark)

}
//Provides scoping for executing fnal function so it doesn't pollute the global JS name space. Functions outside can't be used
fnal()
