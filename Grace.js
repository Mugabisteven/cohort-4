//define the function tests with two parameters
function tests(test1,test2) 
{
  //initialise the variable greater which will be used to determine which of the two variables is greater
  //conditional statement to return the parameter with the greatest value. 
let greater = test2>test1?test1:test2
 //expose the variable greater so that it can be accessed by other functions which need to use it in the program.
return greater                       
}

//define the function coursework with a parameter cswork
 function coursework(cswork)            
 {
   //initialise the variable coursework
   //value of coursework is calculated from the summation of cswork value and the greatest value from tests
 let coursework = cswork + tests(80,80) 
  //print the value of coursework
 console.log(coursework)    
 //expose the variable coursework to other functions in the program         
return coursework                       
 }
//define a function avg with a paremeter a
function avg(a){   
//initialise the variable avg
//avg value is calculated through division of coursework value by a                     
let avg =coursework(90)/a  
//expose the variable avg to other functions in the program           
return avg                            
}

//define a function crsmark with a parameter a
function crsmark(a)                  
{
//initialise a variable exm
//exm value is calculated through the multiplication of the avg value with the percentage of a
let exm = avg(2)*(a/100)
//expose the variable exm to other functions in the program.         
 return exm                         
}
//define a function exam
function exam(a)                   
{
//initialise a variable fexam
//fexam value is calculated through multiplication of the percentage of 60 with a
let fexam = (60/100)*a
//expose the variable fexam to other functions in the program          
return fexam                      

}

//define a function final
function fnal()                   
{
//intialise a variable fmark
//value of fmark is calculated by summing up the exam value and the crsmark value
let fmark = exam(75)+crsmark(40)   
//print the value of fmark
console.log(fmark)                

}
//call the function final
fnal()    
