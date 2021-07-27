function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
      
  console.log(validateEmail('texto@texto.com')); 
  console.log(validateEmail('texto@texto')); 
  console.log(validateEmail('texto.com')); 
  console.log(validateEmail('texto'));