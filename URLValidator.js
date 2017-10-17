const Validator = require('./Validators');
class URLValidator extends Validator{
  isURL(url){
    if(!url)
      return false;
  let ValideurlRegExp = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;
    if(ValidurlRegExp.test(url))
      return true;
    return false;
  }
}
let site = new URLValidator();
console.log("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp");