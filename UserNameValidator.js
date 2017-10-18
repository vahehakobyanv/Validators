const Validator = require('./Validators');
class UsernameValidator extends Validator{
  isUserName(username){
    if(!username || !super.isString(username))
      return false;
    if(username.length < 4 || username.length > 24)
	   return false;
	for(let ix = 0; ix < username.length; ++ix)
	 {
		if((username.charCodeAt(ix) <=47 || username.charCodeAt(ix) >=58) && (username.charCodeAt(ix) <=64 || username.charCodeAt(ix) >=91) && (username.charCodeAt(ix) <=98 && username.charCodeAt(ix) >=122) && username.charCodeAt(ix) != 95)
		{
			return false;
		}
	 }
	 return true;
  }
}
let valid = new UsernameValidator();
console.log(valid.isUserName("username"));
console.log(valid.isUserName("Vahe Hakobyan"));