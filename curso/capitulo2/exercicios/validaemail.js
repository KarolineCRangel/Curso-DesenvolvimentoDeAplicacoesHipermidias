function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
      
  console.log(validateEmail('karoline@gmail.com')); 
  console.log(validateEmail('karolinr@gmail')); 
  console.log(validateEmail('gmail.com.com')); 
  console.log(validateEmail('gmail'));
