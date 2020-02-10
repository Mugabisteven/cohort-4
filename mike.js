
//function that compares 2 test results
// returns the greatest score

//the function tests is defined which takes two test parameters and returns the highest score
function tests(test1,test2)
{
    //uses the conditional ternary operator to do the comparison
let greater = test1>test1?test1:test2   
return greater


}

//definition of function coursework which takes one parameter  and outputs final score
 function coursework(cswork)
 {
 let coursework = cswork + tests(80,80)

 console.log(coursework)
return coursework

 }
//definition of function avg which returns average mark for coursework
function avg(a)
{
let avg =coursework(90)/a
return avg

}

//Definition of function crsmark which returns the exam mark
function crsmark(a)
{
let exm = avg(2)*(a/100)
 return exm 
}

//Definition of function exam which returns fexam
function exam(a)
{
let fexam = (60/100)*a
return fexam

}
//Definition of function fnal which prints the final mark adding coursework and exam marks
function fnal()
{
let fmark = exam(75)+crsmark(40)
console.log(fmark)

}
fnal()

//This is a set of functions to calculate the final marks through courseworks, tests and exams