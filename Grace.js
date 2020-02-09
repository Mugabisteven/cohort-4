//define the function tests
function tests(test1,test2) 
{
  //initialise the variable greater
let greater = test2>test1?test1:test2
 //call the variable greater so that it can be accessed by other functions which need to use it in the program.
return greater                       
}

//define the function coursework
 function coursework(cswork)            
 {
   //initialise the variable coursework
 let coursework = cswork + tests(80,80) 
  //print the value of coursework
 console.log(coursework)    
 //call the variable coursework           
return coursework                       
 }
//define a function avg
function avg(a){   
//initialise the variable avg                    
let avg =coursework(90)/a  
//call the variable avg           
return avg                            
}

//define a function crsmark
function crsmark(a)                  
{
//initialise a variable exm
let exm = avg(2)*(a/100)
//call the variable exm            
 return exm                         
}
//define a function exam
function exam(a)                   
{
//initialise a variable fexam
let fexam = (60/100)*a
//call the variable fexam            
return fexam                      

}

//define a function final
function fnal()                   
{
//intialise a variable fmark
let fmark = exam(75)+crsmark(40)   
//print the value of fmark
console.log(fmark)                

}
//call the function final
fnal()    
