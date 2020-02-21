//Defining a function with a name formValidation
function formValidation()
{
//From line 5 to line 13, access form elements e.g uid, via form attribute e.g userid
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uadd = document.registration.address;
var ucountry = document.registration.country;
var uzip = document.registration.zip;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; 

/* From line 16 to 40, Validate the different form elements with different given conditions
---for return false,if the conditions are not fulfilled, the form will not be submitted */
if(userid_validation(uid,5,12))
{
if(passid_validation(passid,7,12))
{
if(allLetter(uname))
{
if(alphanumeric(uadd))
{ 
if(countryselect(ucountry))
{
if(allnumeric(uzip))
{
if(ValidateEmail(uemail))
{
if(validsex(umsex,ufsex))
{
}
} 
}
} 
}
}
}
}
return false;
} 
//Defining method,userid_Validation passing three parameters
function userid_validation(uid,mx,my)
{
// Assigning  uid.value.length to variable  uid_len  to store length
var uid_len = uid.value.length;
/* Putting conditions for variable uid_len, calling the parameters used above
--A statement to check whether the user_id length is between mx & my or == 0 */

if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
//Make an alert when  the condition is not fulfilled with a popup
alert("User Id should not be empty / length be between "+mx+" to "+my);
//Focus 
uid.focus();
//Returning false or true accordingly
return false;
}
return true;
}

//Defining method,pass_Validation passing three parameters

function passid_validation(passid,mx,my)
{
//Declaring a variable passid_len to store password length   
var passid_len = passid.value.length;
//A statement to check whether the passid_len length is between mx & my or == 0
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
//Make an alert when  the condition is not fulfilled with a popup
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
//Returning false or true accordingly
return false;
}
return true;
}
//Defining a method to access the value of the object allLetter and one parameter
function allLetter(uname)
{ 
//Declaring a variable letters that stores the regular expression that will be matched against
var letters = /^[A-Za-z]+$/;
//A statement to check whether the username matches the regular expression
if(uname.value.match(letters))
{
//Returning true 
return true;
}
else
{
//Make an alert when  the condition is not fulfilled with a popup    
alert('Username must have alphabet characters only');
uname.focus();
//Returning false 
return false;
}
}
//Defining method,alphanumeric with  parameter uadd
function alphanumeric(uadd)
{ 
//Declaring a variable letters that stores the regular expression that will be matched against    
var letters = /^[0-9a-zA-Z]+$/;
//A statement to check whether the address matches the regular expression
if(uadd.value.match(letters))
{
//Returning true
return true;
}
else
{
//Make an alert when  the condition is not fulfilled with a popup  
alert('User address must have alphanumeric characters only');
uadd.focus();
//Returning false
return false;
}
}
//Defining method,countryselect with  parameter ucountry
function countryselect(ucountry)
{
//A statement to check whether the value input matches "Default"
if(ucountry.value == "Default")
{
//Make an alert when  the condition is not fulfilled with a popup
alert('Select your country from the list');
ucountry.focus();
//Returning false
return false;
}
else
{
//Returning true
return true;
}
}
//Defining method,allnumeric with  parameter uzip
function allnumeric(uzip)
{ 
//Declaring a variable numbers that stores the regular expression that will be matched against    
var numbers = /^[0-9]+$/;
//A statement to check whether the value input matches numbers
if(uzip.value.match(numbers))
{
//Returning true
return true;
}
else
{
//Make an alert when the condition is not fulfilled with a popup
alert('ZIP code must have numeric characters only');
uzip.focus();
//Returning false
return false;
}
}
//Defining method,alphanumeric with  parameter uadd
function ValidateEmail(uemail)
{
//It is a regular expression......... done during buffer
//Declaring a variable mailformat that stores the regular expression that will be matched against 
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//A statement to check whether the value input matches mailformat
if(uemail.value.match(mailformat))
{
//Returning true
return true;
}
else
{
//Make an alert when  the condition is not fulfilled with a popup
alert("You have entered an invalid email address!");
uemail.focus();
//Returning false
return false;
}
} 
//Defining a method passing different parameters 
function validsex(umsex,ufsex)
{
x=0;
/* From line 184 to 191, Statements to check if the option male/female has been checked 
but not both with increaments of 1 */
if(umsex.checked) 
{
x++;
} if(ufsex.checked)
{
x++; 
}
if(x==0)
{
//Make an alert when the condition is not fulfilled with a popup
alert('Select Male/Female');
umsex.focus();
//returning false
return false;
}
else
{
//Alert message observed when all conditions have been fulfilled
alert('Form Succesfully Submitted');
window.location.reload()
return true;
}
}