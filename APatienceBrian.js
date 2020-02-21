/**
Defining method for form validation
**/
function formValidation()
{
/**
Declaring variables to store form data
**/
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uadd = document.registration.address;
var ucountry = document.registration.country;
var uzip = document.registration.zip;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; 

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

/**
Defining a parameterised method userid_ validation
**/
function userid_validation(uid,mx,my)
{
//Declaring a variable to store length of user_id
var uid_len = uid.value.length;
//Checks for whether the user_id.length is between mx & my or == 0 
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
//If false alert user with a pop-up message
alert("User Id should not be empty / length be between "+mx+" to "+my);
//And focus on the input field
uid.focus();
//Returns false
return false;
}
//Returns false
return true;
}

/**
Defining parameterised method passid_validation
**/
function passid_validation(passid,mx,my)
{
//Declaring a variable to store length of password
var passid_len = passid.value.length;
//Checks for whether the password.length is between mx & my or == 0 
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
//If false alert user with a pop-up message
alert("Password should not be empty / length be between "+mx+" to "+my);
//And focus on the input field
passid.focus();
//Returns false
return false;
}
//Returns false
return true;
}

/**
Defining parameterised method to validate username
**/
function allLetter(uname)
{ 
//Declaring a variable to store a regex defining an all-letter pattern
var letters = /^[A-Za-z]+$/;
//Checks if the username matchs the regular expression
if(uname.value.match(letters))
{
//Returns true
return true;
}
else
{
//Alerts user with pop-up message
alert('Username must have alphabet characters only');
//And focus on the input field
uname.focus();
//Returns false
return false;
}
}

/**
Defining parameterised method to validate useraddress
**/
function alphanumeric(uadd)
{ 
//Declaring a variable to store a regex defining alphanumeric pattern
var letters = /^[0-9a-zA-Z]+$/;
//Checks if the useraddress matchs the regular expression
if(uadd.value.match(letters))
{
//Returns true
return true;
}
else
{
//Warn user with pop-up message
alert('User address must have alphanumeric characters only');
//And focus on the input field
uadd.focus();
//Returns false
return false;
}
}

/**
Defining parameterised method to validate country
**/
function countryselect(ucountry)
{
//Checks if the returned input value matches "Default"
if(ucountry.value == "Default")
{
//If true warn user with pop-up message
alert('Select your country from the list');
//And focus on the input field
ucountry.focus();
//Returns false
return false;
}
else
{
//Returns true
return true;
}
}

/**
Defining parameterised method to validate zip code
**/
function allnumeric(uzip)
{ 
//Declaring a variable to store a regex defining numeric pattern
var numbers = /^[0-9]+$/;
//Checking whether the zip code value matches
if(uzip.value.match(numbers))
{
//Returns true
return true;
}
else
{
//Warn user with pop-up
alert('ZIP code must have numeric characters only');
//And focus on the input field
uzip.focus();
//Else return false
return false;
}
}

/**
Defining parameterised method to validate email
**/
function ValidateEmail(uemail)
{
//Declaring a variable to store a regex defining an email pattern
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//Checks if the email value matches
if(uemail.value.match(mailformat))
{
//Returns true
return true;
}
else
{
//Warns the user with a pop-up message
alert("You have entered an invalid email address!");
//And focus on the input field
uemail.focus();
//Else return false
return false;
}
} 

/**
Defining parameterised method to validate gender
**/
function validsex(umsex,ufsex)
{
//Declaring a variable x
x=0;
//Checks if male option is chosen
if(umsex.checked) 
{
//Increaments variable x by 1
x++;
} 
//Checks if female option is chosen
if(ufsex.checked)
{
//Increaments variable x by 1
x++; 
}
/**
Checks if variable x==0 
Then warns the user with pop-up message
And focus on the input field then return false
Else alert user with a success pop-up message & return true
**/
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