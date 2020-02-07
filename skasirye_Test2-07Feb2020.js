//Weekend Assignment to comment this code

//Determine the greater mark of two tests
function tests(test1,test2)
{
var greater = test1>test2?test1:test2
return greater


}

//Compute the Course Work mark by taking one mandatory
//mark and the greater of two tests then display it
 function coursework(cswork)
 {
 var coursework = cswork + tests(80,80)
 
 console.log(coursework)
return coursework

 }

//Compute avarage of Course Work Mark
function avg(a)
{
var avg =coursework(90)/a
return avg

}

//Compute 40% of Course Work Mark
function crsmark(a)
{
var exm = avg(2)*(a/100)
 return exm 
}

//Compute 60% of Exam Mark
function exam(a)
{
var fexam = (60/100)*a
return fexam

}

//Compute & display final mark from exam + coursework
function fnal() 
{
var fmark = exam(75)+crsmark(40)
console.log(fmark)

}

//Call the Function for Final mark
fnal()

/*In conclusion; this program computes the final mark.
Firstly, the Coursework is computed from a mandatory mark 
and an avarage of two tests; the result of printed before 
furter manipulation through the average function.
Finally, a percentage of the courseork and exam marks are 
computed and added to achieve the Student's Mark out of 100%.
Lastly; the Final Mark is also printed out.