//Funtion that takes two tests as arguments and returns the greater one
function tests(test1,test2)
{
let greater = (test2>test1)?test1:test2
return greater
}

/*Function that takes an argument cswork, then adds to it the value
returned by tests(). The sum is then assigned to variable coursework*/
 function coursework(cswork)
 {
 let coursework = cswork + tests(80,80)
 
 console.log(coursework)
 return coursework

 }

 //function that divides coursework by the input parameter
function avg(a)
{
let avg =coursework(90)/a
return avg

}

//Function to compute coursework percentage of the exm mark
function crsmark(a)
{
let exm = avg(2)*(a/100)
 return exm 
}

//Function that multiplies exam marks by 60 percent
function exam(a)
{
let fexam = (60/100)*a
return fexam

}

//Function that prints the final mark by adding coursework marks to exam marks.
function fnal()
{
let fmark = exam(75)+crsmark(40)
console.log(fmark)

}
fnal()

/*The above code is used to calculate the final mark of a student in a given subject. The mark constitutes
of 2 assessments ie coursework- which constitutes of the sum of homework and the better mark of two tests.
The coursework contributes 40 percent of the final mark. The exam is the second assessment and contributes
60 percent of the final mark.