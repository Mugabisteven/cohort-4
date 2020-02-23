// This is Sharon's work
//Defining a method for form Validation 
function formValidation()
{
// Declaring form elements from line5 to line14
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uadd = document.registration.address;
var ucountry = document.registration.country;
var uzip = document.registration.zip;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; 

// calling respective validation method for each element
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

//Defining userid validation method using three parameters
} function userid_validation(uid,mx,my)
{

// Declaring a variable uid
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
} 
// Defining passid validation method with parameters
function passid_validation(passid,mx,my)
{th
 // Accessing elements   
var passid_len = passid.value.length;

if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}

// Defing a function allletters with a parameter uname
function allLetter(uname)
{ 
    // Accessing elements
var letters = /^[A-Za-z]+$/;
// Check if the user name match with the leters used
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
// Defining a function alphanumeric with parameter uadd
function alphanumeric(uadd)
{
// Declaring variable letters and assigning 0-9a-zA-Z and $
var letters = /^[0-9a-zA-Z]+$/;
// Check if uadd match with leters used
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
}// Defining a function country select
function countryselect(ucountry)
{
    // Calling respective variables
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

//Defining a function allnumeric with a parameter uzip
function allnumeric(uzip)
{ 
// Declaring a variable numbers and assigning it to 0-9 and $
var numbers = /^[0-9]+$/;
// Check if unzip match with the numbers used
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
// Defining a funtion ValidateEmail with a parameter uemail
function ValidateEmail(uemail)
{
// Declaring a variable mailfort
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// Check if uemail match with the mailformat used
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
// Defining a function Validsex with parameters umsex and ufsex
 function validsex(umsex,ufsex)
{
x=0;
// Calling umsex
if(umsex.checked) 
{
x++;
// Calling ufsex
} if(ufsex.checked)
{
x++; 
}
if(x==0)
{
// If male or female is selected succesfully submit
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

