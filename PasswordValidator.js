const Validator = require('./Validators');
class PasswordValidator extends Validator{
	isPassword(pass)
	{
		if(!pass || !super.isString(pass))
			return false;
		if(pass.length < 6 || pass.length > 20)
			return false;
		if(pass.indexOf('password') !==-1 || pass.indexOf('Password') !==-1)
			return false;
		return true;
	}
}
let valid = new PasswordValidator();
console.log(valid.isPassword("password111"));