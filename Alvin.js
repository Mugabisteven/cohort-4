//Defined function tests
function tests(test1,test2)
{
   //Declared  greater and initalised it if statement is true go with test1 and if it is false go with test2
let greater = test2>test1?test1:test2
//Exposed greater to another function
return greater


}

//Function coursework() is calling function tests()
 function coursework(cswork)
 {
     //Declared coursework and intialised it with two parameters                           
 let coursework = cswork + tests(80,80)
 //Printed out coursework 170
 console.log(coursework)    
 //Exposed coursework to another function
return coursework

 }
//Function avg() is invoking function coursework()
function avg(a)
{
    //Declared avg and intialised it
let avg =coursework(90)/a
//Exposed avg to another function
return avg

}

//Function crsmark() is invoking function avg()
function crsmark(a)
{

let exm = avg(2)*(a/100)
//Exposed exm to another function
 return exm 
}


//Defined function exam
function exam(a)
{
  //Declared fexam and intialised it
let fexam = (60/100)*a
return fexam

}

//Function fnal is invoking function exam() and crsmark()
function fnal()
{
    
let fmark = exam(75)+crsmark(40)
//Printed out fmark 79
console.log(fmark)

}
fnal()