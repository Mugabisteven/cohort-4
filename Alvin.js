//Defined function tests with two parameters.
function tests(test1,test2)
{
   //Declared  greater and initalised it if statement is true go with test1 and if it is false go with test2.
let greater = test2>test1?test1:test2
//Exposed greater to another function.
return greater


}

//Function coursework() is invoking function tests().
 function coursework(cswork)
 {
     //Declared coursework and intialised it with parameter cswork and return variable greater.                         
 let coursework = cswork + tests(80,80)
 //Printed out coursework 170
 console.log(coursework)    
 //Exposed variable value  to any invoking function.
return coursework

 }
//Function avg() is invoking function coursework().
function avg(a)
{
    //Declared variable avg and intialised it to function coursework divided by parameter a.
let avg =coursework(90)/a
//Exposed variable value to any invoking function.
return avg

}

//Function crsmark() is invoking function avg().
function crsmark(a)
{

let exm = avg(2)*(a/100)
//Exposed variable name exm to another function.
 return exm 
}


//Defined function exam.
function exam(a)
{
  //Declared variable fexam and intialised it to arguments multiplied by parameter a.
let fexam = (60/100)*a
//Exposed fexam to another function.
return fexam

}

//Function fnal is invoking functions exam() and crsmark().
function fnal()
{
   //Declared variable name fmark and intialised it. 
let fmark = exam(75)+crsmark(40)
//Printed out variable value 79.
console.log(fmark)

}
fnal()