//Defining form validation 
function formValidation()
{
    //Declare the various form variables as listed from line 5 to 13
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uadd = document.registration.address;
var ucountry = document.registration.country;
var uzip = document.registration.zip;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; 

////Invoking various parameterized functions as listed from line 16 to 40
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
// Variables validation and retun if false
return false;
//Defining the method userid_validation with parameters uid, mx, my
} function userid_validation(uid,mx,my)
{
    //Defining the length of the userid and returns false if 0
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
    //Alert false when empty and when exceeds the defined length
alert("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
}
//Defining the method passid_validation with parameter passid,mx,my
function passid_validation(passid,mx,my)
{
    //Defines the password length and returns false if 0
var passid_len = passid.value.length;
//Checking whether the passid_len falls between the parameters my and mx
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
    //Alert when the password length condition is not met
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}
//Defining the method allLetter with parameter uname
function allLetter(uname)
{ 
  //Defining the variable alphabet characters to meet the specified condition  
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
    //Alert if the condition above is not met
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}
//Defining the method alphanumeric with parameter uadd
function alphanumeric(uadd)
{ 
    //Checking alphanumeric characters
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
    //Alert if the condition above of alphanumeric characters is not met
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}
//Defining the method countryselect with parameter ucountry
function countryselect(ucountry)
{
if(ucountry.value == "Default")
{
    //Alert if condition is not met
alert('Select your country from the list');
ucountry.focus();
return false;
}
else
{
    //If no return value is specified, true is assumed
return true;
}
}
//Defining the method allnumeric with parameter uzip
function allnumeric(uzip)
{
    //Checking the zipcode range of numeric characters 
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
return true;
}
else
{
    //Alert if condition is not met
alert('ZIP code must have numeric characters only');
uzip.focus();
return false;
}
}
//Defining a validated user email
function ValidateEmail(uemail)
{
    //The characters that define the mail format
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
    //Return true if the mail format specified matches
return true;
}
else
{
    //Alert if condition is not met
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
//Defining the sex
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
    //Alert when the condition is not met
alert('Select Male/Female');
umsex.focus();
return false;
}
else
{
    //Alert for all conditions successfuly met
alert('Form Succesfully Submitted');
window.location.reload()
return true;
}
}