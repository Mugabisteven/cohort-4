

//Defining function with a name validate
function validate()
{
//Accessing form elements via form attribute
    var uloan = document.loan.loantype;
    var uamount = document.loan.amount;
    var ufnameid=document.loan.firstname;
    var ulnameid = document.loan.lastname;
    var uemail = document.loan.email;
    var unin = document.loan.nin;
    var uadd = document.loan.address;
    var uadd2 = document.loan.address2;
    var ucity = document.loan.city; 
    var uzip = document.loan.zip; 
    var ures = document.loan.residencest; 
    var utres = document.loan.timeres; 
    var ussnum = document.loan.ssnum; 
    var umsex = document.loan.msex;
    var ufsex = document.loan.fsex; 
//Validating different form elements from line 23 to 65
    if(loantypevalidation(uloan))
    {
    if(amountvalidation(uamount))
    {
    if(firstname_validation(ufnameid,4,12))
    {
    if(lastname_validation(ulnameid,3,12))
    {
    if(validateEmail(uemail))
    {
    if(validate_nin(unin))
    {
    if(alphanumeric(uadd))
    {
    if(alphanum(uadd2))
    {
    if(cityselect(ucity))
    {
    if(allnumeric(uzip))
    {
    if(residencest_val(ures))
    {
    if(validate_utres(utres))
    {
    if(allnum(ussnum))
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
    }
    }
    }
    }
    }
    }
    return false;
}
//Defining a method to access the value of the object loantypevalidation and parameter
function loantypevalidation(uloan)
{
//Statement to check whether the value input matches "Default"
    if (uloan.value=="Default")
    {
//Make an alert when  the condition is not fulfilled with a popup
        alert('Select loan type from the list');
        uloan.focus();
        return false;
    }
    else
    {
        return true;
    }
}
//Defining a method to access the value of the object amountvalidation and parameter
function amountvalidation(uamount)
{
//Declaring a variable numbers that stores the regular expression that will be matched against    
    var numbers = /^[0-9]+$/;
//Statement to check whether the value input matches numbers    
    if(uamount.value.match(numbers))
    {
    return true;
    }
    else
    {
//Make an alert when  the condition is not fulfilled with a popup
    alert('Amount must have numeric characters only');
    uamount.focus();
    return false;
    }
}
//Defining a method to access the value of the object firstname_validation and 3 parameters
function firstname_validation(ufnameid,mx,my)
{
//Declaring a variable ufnameid_len to store firstname length 
    var ufnameid_len = ufnameid.value.length;
//A statement to check whether ufnameid_len between mx &n length i my or == 0    
    if (ufnameid_len == 0 || ufnameid_len >= my || ufnameid_len < mx)
    {
//Make an alert when  the condition is not fulfilled with a popup        
    alert("Firstname should not be empty / length be between "+mx+" to "+my);
    ufnameid.focus();
    return false;
    }
    return true;
}

//Defining a method to access the value of the object lastname_validation and 3 parameters
function lastname_validation(ulnameid,max,min)
{
//Declaring a variable ulnameid_len to store lastname length 
    var ulnameid_len = ulnameid.value.length;
//A statement to check whether ulnameid_len between max &n length i min or == 0    
    if (ulnameid_len == 0 || ulnameid_len >= min || ulnameid_len < max)
    {
//Make an alert when  the condition is not fulfilled with a popup 
    alert("Lastname should not be empty / length be between "+max+" to "+min);
    ulnameid.focus();
    return false;
    }
    return true;
}
//Defining a method to access the value of the object validateEmail and parameter
function validateEmail(uemail)
{
//Declaring a variable numbers that stores the regular expression that will be matched against   
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//Statement to check whether the value input matches mailformat
    if(uemail.value.match(mailformat))
    {
    return true;
    }
    else
    {
//Make an alert when  the condition is not fulfilled with a popup 
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
    }
}
//Defining a method to access the value of the object validate_nin and a parameter
function validate_nin(unin)
{ 
//Declaring a variable numbers that stores the regular expression that will be matched against
    var letters = /^[0-9a-zA-Z]+$/;
//Statement to check whether the value input matches letters
    if(unin.value.match(letters))
    {
    return true;
    }
    else
    {
//Make an alert when  the condition is not fulfilled with a popup 
    alert('NIN must have alphanumeric characters only');
    unin.focus();
    return false;
    }
}
//Defining a method to access the value of the object alphanumeric and a parameter
function alphanumeric(uadd)
{ 
//Declaring a variable numbers that stores the regular expression that will be matched against
    var letters = /^[0-9a-zA-Z]+$/;
//Statement to check whether the value input matches letters
    if(uadd.value.match(letters))
    {
    return true;
    }
    else
    {
//Make an alert when  the condition is not fulfilled with a popup 
    alert('Address 1 must have alphanumeric characters only');
    uadd.focus();
    return false;
    }
}
//Defining a method alphanum with a parameter
function alphanum(uadd2)
{ 
//Declaring a variable numbers that stores the regular expression that will be matched against
    var letters = /^[0-9a-zA-Z]+$/;
//Statement to check whether the value input matches letters
    if(uadd2.value.match(letters))
    {
    return true;
    }
    else
    {
//Make an alert when  the condition is not fulfilled with a popup  
    alert('Address 2 must have alphanumeric characters only');
    uadd2.focus();
    return false;
    }
}
//Defining a method cityselect with a parameter
function cityselect(ucity)
{
//Declaring a variable numbers that stores the regular expression that will be matched against
    var letters = /^[A-Za-z]+$/;
//Statement to check whether the value input matches letters
    if(ucity.value.match(letters))
    {
    return true;
    }
    else
    {
//Make an alert when  the condition is not fulfilled with a popup 
    alert('City must have alphabet characters only');
    ucity.focus();
    return false;
    }
}
//Defining a method to access the value of the object allnumeric and a parameter
function allnumeric(uzip)
{ 
//Declaring a variable numbers that stores the regular expression that will be matched against
    var numbers = /^[0-9 :]+$/;
//Statement to check whether the value input matches numbers
    if(uzip.value.match(numbers))
    {
    return true;
    }
    else
    {
//Make an alert when  the condition is not fulfilled with a popup 
    alert('ZIP code must have numeric characters only');
    uzip.focus();
    return false;
    }
}
//Defining a method to access the value of the object residencest_val and a parameter
function residencest_val(ures)
{
//Declaring a variable numbers that stores the regular expression that will be matched against
    var letters = /^[A-Za-z]+$/;
//Statement to check whether the value input matches letters
    if(ures.value.match(letters))
    {
    return true;
    }
    else
    {
//Make an alert when  the condition is not fulfilled with a popup 
    alert('Residence status must have alphabet characters only');
    ures.focus();
    return false;
    }
}
//Defining a method to access the value of the object validate_utres and a parameter
function validate_utres(utres)
{
//Declaring a variable numbers that stores the regular expression that will be matched against
    var numbers = /^[0-9]+$/;
//Statement to check whether the value input matches numbers
    if(utres.value.match(numbers))
    {
    return true;
    }
    else
    {
//Make an alert when  the condition is not fulfilled with a popup 
    alert('Time at residence must have alphabet characters only');
    utres.focus();
    return false;
    }
}

//Defining a method to access the value of the object allnum and a parameter
function allnum(ussnum)
{ 
//Declaring a variable numbers that stores the regular expression that will be matched against
    var letters = /^[0-9a-zA-Z]+$/;
//Statement to check whether the value input matches letters
    if(ussnum.value.match(letters))
    {
    return true;
    }
    else
    {
//Make an alert when  the condition is not fulfilled with a popup 
    alert('Social Security number must have alphanumeric characters only');
    ussnum.focus();
    return false;
    }
}
//Defining a method passing different parameters 
function validsex(umsex,ufsex)
{
    x=0;
/* From line 300 to 310, Statements to check if the option male/female has been checked 
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
//Make an alert when  the condition is not fulfilled with a popup 
    alert('Select Male/Female');
    umsex.focus();
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