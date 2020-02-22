//Defining a method to validate the registration form.
function formValidation()
{
//Acccessing the registration form elements using the form name and the name of the element.
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uadd = document.registration.address;
var ucountry = document.registration.country;
var uzip = document.registration.zip;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex;
/*
Calling validation functions for the elements of the forms respectively.
*/ 
if(userid_validation(uid,5,12)){
 	if(passid_validation(passid,7,12)){
 		if(allLetter(uname)){
 			if(alphanumeric(uadd)){
 				if(countryselect(ucountry)){
 					if(allnumeric(uzip)){
 						if(ValidateEmail(uemail)){
 							if(validsex(umsex,ufsex)){
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
// Defining a method that takes in the user input for userid and validaes that it is within mx and my.
 function userid_validation(uid,mx,my)
{

var uid_len = uid.value.length;
//An if statement that prompts an alert if the value of userid is empty or not within mx and my.
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}

return true;
}
//Defining a method that validates a password filled by the applicant is within the specified range mx and my.
function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}


//Defining a method that validates all username characters are alphabet characters.
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}
//Defining a method that validates the useraddress characters contain aplhabets and numbers.
function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}
//Defining a method that validates that the user has entered a country. 
function countryselect(ucountry)
{
if(ucountry.value == "Default")
{
alert('Select your country from the list');
ucountry.focus();
return false;
}
else
{
return true;
}
}
//Defining a method that validates that the ZIP code has numeric characters only.
function allnumeric(uzip)
{ 
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
return true;
}
else
{
alert('ZIP code must have numeric characters only');
uzip.focus();
return false;
}
}
//Defining a method that validates that the email address entered is valid.
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
} 
//Defining a method that shows that one of the check boxes is checked.
function validsex(umsex,ufsex)
{
x=0;

if(umsex.checked) 
{
x++;
} 
if(ufsex.checked)
{
x++; 
}
if(x==0)
{
alert('Select Male/Female');
umsex.focus();
return false;
}
else
{
alert('Form Succesfully Submitted');
window.location.reload()
return true;
}
}