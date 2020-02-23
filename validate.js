const validate = () => {
  //Assigning reguler expresions to elements. 
  const username = /^[a-zA-Z]{3,35}$/;
  const email = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{3}$/;
  const uage = /^[0-9]{2}$/;
  const uconatc = /^[0-9]{10}$/;
  const unation = /^[a-zA-Z]{4,35}$/;
  const unin = /^[A-Z 0-9]{14}$/;
  const uamount = /^[0-9]{7}$/;
//Declaring variables and initializing elements.
  var name = document.getElementById("nm");
  var age = document.loan.age;
  var mail = document.loan.mail;
  var contact = document.loan.contact;
  var nationality = document.loan.nationality;
  var nin = document.loan.nin;
  var amount = document.loan.amount;
//Using if funtions to check if the conditions are met.
  if (name.value.match(username)) {
    name.style.border = "2px solid green";
  } else {
    name.style.border = "2px solid red";
    document.getElementById("ename").innerHTML(`name can not be empty`);
  }

  if (age.value.match(uage)) {
    age.style.border = "2px solid green";
  } else {
    age.style.border = "2px solid red";
  }

  if (mail.value.match(email)) {
    mail.style.border = "2px solid green";
  } else {
    mail.style.border = "2px solid red";
  }

  if (contact.value.match(uconatc)) {
    contact.style.border = "2px solid green";
  } else {
    contact.style.border = "2px solid red";
  }

  if (nationality.value.match(unation)) {
    nationality.style.border = "2px solid green";
  } else {
    nationality.style.border = "2px solid red";
  }

  if (amount.value.match(uamount)) {
    amount.style.border = "2px solid green";
  } else {
    amount.style.border = "2px solid red";
  }

  if (nin.value.match(unin)) {
    nin.style.border = "2px solid green";
  } else {
    nin.style.border = "2px solid red";
  }
};
