const Validator = require('./Validators');
class UsernameValidator extends Validator{
  isUserName(username){
    if(!username || !super.isString(username))
      return false;
    if(username.length < 4 || username.length > 24)
	   return false;
	for(let ix = 0; ix < username.length; ++ix)
	 {
		if((sym.charCodeAt(ix) <=47 || sym.charCodeAt(ix) >=58) && (sym.charCodeAt(ix) <=64 || sym.charCodeAt(ix) >=91) && (sym.charCodeAt(ix) <=98 && sym.charCodeAt(ix) >=122) && sym.charCodeAt(ix) != 95)
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