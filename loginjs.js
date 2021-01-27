function validateForm() {
    var firstname = document.forms["myForm"]["uname"].value;
    if (firstname == "") {
      alert("Name must be filled out");
      return false;
    }
      if(!isNaN(firstname))
  {
  alert("Please Enter Only Characters");
  document.myForm.uname.select();
  return false;
  }
  
    
  
   
  var a = document.myForm.psw.value;
  if(a=="")
  {
  alert("Please Enter Your Password");
  document.myForm.psw.focus();
  return false;
  }
  if ((a.length < 4) || (a.length > 8))
  {
  alert("Your Password must be 4 to 8 Character and should be strong");
  document.myForm.psw.select();
  return false;
  }
  if(firstname!="bhanu")
  {
  
    alert("please enter correct name");
  return false;
  }
  
  if(a!="bhanu")
  {
  
  alert("please enter correct password");
  return false;
  }
  else
  {
return true;

  }
  
  
  }