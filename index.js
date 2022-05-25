var showPass = document.forms["myFormSign"]["showpass"].value;

function clearErrors() {
  var errors = document.getElementsByClassName("formError")
  for (let item of errors) {
    item.innerHTML = "";
  }
}

function validateForm() {
  var returnVal = true;
  clearErrors();
  console.log("hello");
  var email = document.forms["myFormSign"]["sfemail"].value;
  console.log(email)
  var fname = document.forms["myFormSign"]["sfname"].value;
  var flname = document.forms["myFormSign"]["sflname"].value;
  var pass = document.forms["myFormSign"]["sfpass"].value;
  var cpass = document.forms["myFormSign"]["sfcpass"].value;


  //Validation
  if (fname.length < 3 || fname.length > 15) {
    setError("fname", "*Character Range 3 to 15");
    returnVal = false;
  }
  if (flname.length < 3 || flname.length > 15) {
    setError("lname", "*Character Range 3 to 15");
    returnVal = false;
  }
  if (!validateEmail(email)) {
    setError("email", "Email Incorrect");
    returnVal = false;
  }

  if (!validateName(fname)) {
    setError("fname", "*Enter letters only");
    returnVal = false;
  }
  if (!validateName(flname)) {
    setError("lname", "*Enter letters only");
    returnVal = false;
  }
  if (pass.length < 8 || pass.length > 20) {
    setError("pass", "*Enter characters between 8 to 20");
    returnVal = false;
  }
  if (!validatePass(pass)) {
    setError("pass", "Password needs characters, symbol and numbers");
    returnVal = false;
  }
  if (cpass !== pass) {
    setError("cpass", "Password and Confirm Password does not match.");
    returnVal = false;
  }

  return returnVal;


}

//Functions
function setError(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName("formError")[0].innerHTML = error;
}


function validateName(valName) {
  var re = /^[a-zA-Z\s]+$/;
  return re.test(valName);
}

function validateEmail(valEmail) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(valEmail);
}

function validatePass(valPass) {
  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(valPass);
}
