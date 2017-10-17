const Validator = require('./Validators');
class EmailValidator extends Validator{
  isEmail(email){
    if(!email)
      return false;
    let ValidemailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,})+$/;
    if(ValidemailRegExp.test(email))
      return true;
    return false;
  }
}
let email = new EmailValidator();
console.log(email.isEmail("vahe@."));
console.log(email.isEmail("vahehakobyanv@gmail.com"));