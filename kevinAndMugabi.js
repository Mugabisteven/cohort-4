//Defining an object formvalidation
function formValidation()
{
    //Accessing form elements by name
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uadd = document.registration.address;
var ucountry = document.registration.country;
var uzip = document.registration.zip;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex;
/**
 * Calling methods and passing values into parameters
 * Checking all input elements
 */
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
 * Defining a method with 3 parameters
 * Checking if the user id value length
 * is zero, greater than or equal to my
 * or less than mx
 */
function userid_validation(uid,mx,my)
{
    
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
//Reject the form submition to server
return false;
}
//otherwise allow submit
return true;
}
/**
 * Defining a method with 3 parameters
 * checking if passid_len is 0,
 * greater than or equal to my and
 * less than mx
 */

function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
//Reject form submittion to server
return false;
}
//Otherwise allow submit to server
return true;
}
/**
 * Defining a method with a parameters
 * checking if Username has alphabet characters only
 */
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
//Allow submit to server
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
//Reject form submittion to server
return false;
}
}
/**
 * Defining a method with a parameters
 * checking if User address has alphabetnumeric characters only
 */
function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
//Allow form submittion to server
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
//Reject form submittion to server
return false;
}
}
/**
 * Defining a method with a parameters
 * checking if country has been selected.
 */
function countryselect(ucountry)
{
if(ucountry.value == "Default")
{
alert('Select your country from the list');
ucountry.focus();
//Reject form submittion to server
return false;
}
else
{
//Allow form submittion to server
return true;
}
}
/**
 * Defining a method with a parameters
 * checking if Zip code has numeric characters only.
 */
function allnumeric(uzip)
{ 
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
//Allow form submittion to server
return true;
}
else
{
alert('ZIP code must have numeric characters only');
uzip.focus();
//Reject form submittion to server
return false;
}
}
/**
 * Defining a method with a parameters
 * checking if User email matches the mail format.
 */
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
/**
 * Defining a method with two parameters
 * checking if User geneder has been selected.
 */
} function validsex(umsex,ufsex)
{
x=0;

if(umsex.checked) 
{
x++;
} if(ufsex.checked)
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
