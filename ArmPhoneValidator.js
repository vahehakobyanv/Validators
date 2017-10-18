const Validator = require('./Validators');
class ArmPhoneValidator extends Validator{
  isArmPhoneNumberValid(number){
    if(!number)
      return false;
    let ValidNumberRegExp = /^(093\d{6}|095\d{6}|077\d{6}|055\d{6}|094\d{6}|098\d{6}|091\d{6}|099\d{6}|041\d{6}|043\d{6}|010\d{6}|[+]374\d{8}|[+]37410\d{6})$/;
    if(ValidNumberRegExp.test(number))
      return true;
    return false;
  }
}
let number = new ArmPhoneValidator();
console.log(number.isArmPhoneNumberValid("+37495037865"));
console.log(number.isArmPhoneNumberValid("+374666666661"));