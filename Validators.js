module.exports = class Validator
{
  isString(str)
  {
    if(!str.length)
    {
       return false;
    }
    if(typeof str === 'string')
    {
      return true;
    }
    else
      return false;
  }
  isNumber(num) {
    if(typeof num ==='number')
    {
      return true;
    }
      return false;
  }
   isInteger(num) {
     if(typeof num ==='number')
     {
       num = num.toString();
       for(let i = 0; i < num.length;++i)
       {
         if(num.charCodeAt(i) < 48 || num.charCodeAt(i) > 57)
         {
           return false;
         }
       }
        return true;
     }
     return false;
   }
   isFloat(num) {
     if(typeof num ==='number')
     {
       num = num.toString();
       for(let i = 0; i < num.length-1;++i)
       {
         if(num.charCodeAt(i)===46 )
         {
           return true;
         }
       }
        return false;
     }
     return false;
   }
    isSpecialSymbol(sym)
    {
      if(!sym)
      {
        return false;
      }
      if(typeof sym === 'number')
      {
        return false;
      }
      if(typeof sym ==='object')
      {
        return false;
      }
      for(let ix = 0; ix < sym.length; ++ix)
      {
        if((sym.charCodeAt(ix) >= 48 && sym.charCodeAt(ix) <= 57) ||(sym.charCodeAt(ix) >= 65 && sym.charCodeAt(ix) <= 90) || (sym.charCodeAt(ix) >=97 && sym.charCodeAt(ix) <=122))
        {
          return false;
        }
      }
      return true;
    }
   isDate(d)
   {
     if(typeof d.getMonth === 'function')
     {
       return true;
     }
     return false;
   }
}


