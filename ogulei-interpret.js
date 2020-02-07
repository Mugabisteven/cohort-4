function tests(test1,test2)
{
    //comparing test1 and test2
    //finding the perameter that certisfies 'test1>test1?test1:test2'
let greater = test1>test1?test1:test2
//allowing access to this funtion
return greater


}

//creating a function called coursework and has parameter(cswork)
 function coursework(cswork)
 {
//assigning a variable name coursework parameters
//invocking tests
//solving for coursework
 let coursework = cswork + tests(80,80)
 
 //posting results to the browsers console
 console.log(coursework)

 //allowing access to coursework
return coursework

 }


function avg(a)
{
//invockoing coursework, solving for avg.
let avg =coursework(90)/a

//allowing access to function avg.
return avg

}

//creating a function named crsmark
function crsmark(a)
{
//assigning parameters to variable with the name exm  
//invoking avg, solving exm
let exm = avg(2)*(a/100)
 return exm 
}

//creating a function exam with parameter a
function exam(a)
{
    //solving fexam
let fexam = (60/100)*a
//allowing access to fexam result
return fexam

}

//creating an undefined function called fnal
function fnal()
{
 //invocking exam and crsmark, assigning parameters to variable with name fmark.
 //solving for fmark   
let fmark = exam(75)+crsmark(40)
//posting the fmark results to the browser's console
console.log(fmark)

}
//invocking fnal
fnal()
