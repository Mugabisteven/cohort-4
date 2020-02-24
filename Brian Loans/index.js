/**
 * Define a function to validate the form
 */
function validateForm() {
  //Prevent the form from reloading  on submit
  event.preventDefault();

  //Declare the variables to store the element values
  let username = document.getElementById("username");
  let useremail = document.getElementById("useremail");
  let phonenumber = document.getElementById("phonenumber");
  let useraddress = document.getElementById("useraddress");
  let account_number = document.getElementById("account_number");
  let loan_amount = document.getElementById("loan_amount");
  let issuing_date = document.getElementById("issuing_date");
  let installment = document.getElementById("installment");
  let start_date = document.getElementById("start_date");
  let collateral = document.getElementById("collateral");
  let loan_justification = document.getElementById("loan_justification");
  let terms = document.getElementsByName("terms");
  /**
   * Call the respective validation methods of the elements
   */
  if (validateUsername(username)) {
    if (validateuseremail(useremail)) {
      if (validatePhoneNumber(phonenumber)) {
        if (validateUserAddress(useraddress)) {
          if (validateAccountNumber(account_number)) {
            if (validateLoanAmount(loan_amount)) {
              if (validateDate(issuing_date)) {
                if (validateInstallment(installment, loan_amount)) {
                  if (validateStartDate(start_date, issuing_date)) {
                    if (validateCollateral(collateral)) {
                      if (validateJustification(loan_justification)) {
                        validateTerms(terms);
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
  return true;
}
//Incase errors occur, warn the user
let errors_element = document.getElementById("errors");
errors_element.style.color = "red";

function validateUsername(username) {
  let username_length = username.value.length;

  if (username_length < 5 || username_length > 10) {
    username.focus();
    errors_element.innerHTML =
      "The user name should be between 5 and 10 character";
    return false;
  } else {
    return true;
  }
}

function validateuseremail(useremail) {
  let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (useremail.value.match(email_regex)) {
    return true;
  } else {
    useremail.focus();
    errors_element.innerHTML = "Enter a valid email address";
    return false;
  }
}

function validatePhoneNumber(phonenumber) {
  let phonenumber_length = phonenumber.value.length;

  if (phonenumber_length !== 10) {
    phonenumber.focus();
    errors_element.innerHTML = "Enter a valid phone number of 10 digits";
    return false;
  } else return true;
}

function validateUserAddress(useraddress) {
  let useraddress_length = useraddress.value.length;

  if (useraddress_length < 10) {
    useraddress.focus();
    errors_element.innerHTML = "User address should be more than 10 characters";
    return false;
  } else {
    return true;
  }
}

function validateAccountNumber(account_number) {
  let account_number_length = account_number.value.length;
  //typeof +account_number.value !== "number" &&
  if (account_number_length < 10) {
    account_number.focus();
    errors_element.innerHTML = "Enter a valid account number";
  } else return true;
}

function validateLoanAmount(loan_amount) {
  let loan_amount_value = loan_amount.value;

  if (+loan_amount_value < 1000000 || +loan_amount_value > 50000000) {
    loan_amount.focus();
    errors_element.innerHTML =
      "You can take a loan between 1,000,000 and 50,000,000";
    return false;
  } else {
    return true;
  }
}

function validateDate(issuing_date) {
  if (issuing_date.value === "") {
    issuing_date.focus();
    errors_element.innerHTML = "Select the loan issuing date";
    return false;
  } else {
    let user_date = new Date(issuing_date.value);
    let today = new Date();

    console.log();
    if (user_date < today) {
      issuing_date.focus();
      errors_element.innerHTML =
        "Loan can only offered today or in the future.";
      return false;
    } else {
      return true;
    }
  }
}

function validateInstallment(installment, loan_amount) {
  let installment_value = installment.value;
  let loan_amount_value = +loan_amount.value;

  if (installment_value <= 0.25 * loan_amount_value) {
    installment.focus();
    errors_element.innerHTML =
      "The installment amount should be more than a quarter of the loan amount";
    return false;
  } else {
    return true;
  }
}

function validateStartDate(start_date, issuing_date) {
  if (start_date.value == "") {
    issuing_date.focus();
    errors_element.innerHTML = "Select the installment start date";
  } else {
    let start_date_value = new Date(start_date.value);
    let issuing_date_value = new Date(issuing_date.value);

    if (start_date_value < issuing_date_value) {
      start_date.focus();
      errors_element.innerHTML =
        "You cannot restart repayment before taking loan";
      return false;
    }
    return true;
  }
}

function validateCollateral(collateral) {
  if (collateral.value !== "") {
    return true;
  } else {
    collateral.focus();
    errors_element.innerHTML = "Collateral is required";
    return false;
  }
}

function validateJustification(loan_justification) {
  let loan_justification_length = loan_justification.value.length;

  if (loan_justification_length < 2) {
    loan_justification.focus();
    errors_element.innerHTML = "A justification is required for a loan";
    return false;
  } else return true;
}

function validateTerms(terms) {
  for (let term = 0; term < terms.length; term++) {
    if (term.value == "disagree") {
      let submit_btn = document.getElementById("btn_submit");
      submit_btn.setAttribute("disabled", true);
      errors_element.innerHTML = "You should agree to the terms and conditions";
      return false;
    } else {
      return true;
    }
  }
}

/*
 *Add an event listner to the submit button
 *Validate the form when user clicks the submit button
 */
const button = document.getElementById("btn_submit");
button.addEventListener("click", validateForm);
