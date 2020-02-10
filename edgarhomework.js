//Function that calls a greater test result
function tests(test1,test2)
{
    //Creating a variable called greater that stores a greater value of the 2 parameters
let greater = test2>test1?test1:test2

//returns the greater parameter to use it later of the 2 values
return greater


}

//Coursework function named cswork
 function coursework(cswork)
 {
     //coursemark parameter as a summation of a variable cswork and test values
 let coursework = cswork + tests(80,80)

 //Print the coursework result
 console.log(coursework)

 //return coursework variable
return coursework

 }
//Average function named avg
function avg(a)
{
    //Initializing average function variable avg which is a returning value of coursework divided by parameter a 
let avg =coursework(90)/a
//return the average function avg
return avg

}

//Course mark function named crsmark
function crsmark(a)
{
    //Initializing the Exam variable named exm
let exm = avg(2)*(a/100)
//return the exam variable named exm
 return exm 
}
//exam function named exam a
function exam(a)
{
    // Final exam variable
let fexam = (60/100)*a
//Return the final exam parameter
return fexam

}
//final exam function named fnal
function fnal()
{
    //Final mark variable named fmark
let fmark = exam(75)+crsmark(40)
//Print fmark
console.log(fmark)

}
fnal()