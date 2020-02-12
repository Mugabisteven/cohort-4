function tests(test1,test2)
{
    //comparing between tests 1 and 2results
let greater = test1>test1?test1:test2
return greater


}


 function coursework(cswork)
 {
     //adding course work results with the test results
 let coursework = cswork + tests(80,80)

 console.log(coursework)
return coursework

 }

function avg(a)
{
    //showing the average mark for coursework
let avg =coursework(90)/a
return avg

}


function crsmark(a)
{
    //multiplying the average of test 1and 2 with coursework
let exm = avg(2)*(a/100)
 return exm 
}

function exam(a)
{
    //general exam results shown out of 100
let fexam = (60/100)*a
return fexam

}

function fnal()
{
    //final average gotten from adding exam and coursework results
let fmark = exam(75)+crsmark(40)
console.log(fmark)

}
//programme was trying to find final average marks for tests,exams and coursework.
fnal(115)