// intialising test functions
function tests(test1,test2)
{
    //determining the greatest test 
let greater = test1>test1?test1:test2
return greater
}
// intialising the coursework function
 function coursework(cswork)
 {
     //declaring the coursework and invocating the test function
 let coursework = cswork + tests(80,80)
 //printing coursework whisch is the total of the greatest test and the marks obtained in the cswork
  console.log(coursework)
return coursework
 }
//intialing the function avg
function avg(a)
{
    // declaring and calculating the avg,  by invocating the the coursework function the avg is obtained
let avg =coursework(90)/a
return avg

}
//intialising the crsmark function
function crsmark(a)
{
//declarng exm to avg(2)*(a/100), calculating the exm by invocating the avg function
let exm = avg(2)*(a/100)
 return exm 
}
//intialising the function exam 
function exam(a)
{
    //declaring fexam to (60/100)*a, 
let fexam = (60/100)*a
return fexam

}
//intialisng the function fnal()
function fnal()
{
    //declaring the fmark to exam(75)+crsmark(40), invocating exam function and crsmark function
let fmark = exam(75)+crsmark(40)
//printing fmark 
console.log(fmark)

}
//
fnal()
//the script is designed to obtain the greatest marks fro, two tests but also to calcualte the sum 
//of the greatest test, the average of the sum,then multiplying the ave by 0.4 so as to obatain the
// coursework mark whichnis later added to final exam mark.