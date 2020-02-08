// declaring and intializing a fuction for tests with parameters test1 and test2 
function tests(test1,test2)
{
    // comparing test1 and test2 for the greater one
let greater = test2>test1?test1:test2
return greater


}
//declaring and initializing a function for coursework with parameter cswork

 function coursework(cswork)
 {
     //adding the coursework marks to the greater test from the first function
 let coursework = cswork + tests(80,80)
 console.log("this is the final coursework score: ")
 console.log(coursework)
return coursework

 }
//declaring and initializing a function for average
function avg(a)
{
    //calculating the average
let avg =coursework(90)/a
return avg

}
//declaring and initializing a function for coursework
function crsmark(a)
{
    //calculating the average for coursework and turning it to a percentage
let exm = avg(2)*(a/100)
 return exm 
}
//declaring and initializing function for exam
function exam(a)
{
    //calculating final exam score out of 60%
let fexam = (60/100)*a
return fexam

}
//declaring and initializing function for finak mark
function fnal()
{
    //creating arguments for exam and crswork
let fmark = exam(75)+crsmark(40)
console.log("this is the final mark: ")
console.log(fmark)

}
fnal()
// this script is calculating the final mark using the coursework marks and final exam marks out of 60% to get the final mark.
