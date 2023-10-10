'use strict'
import { decodeJWT } from '../modules/token.js';

export async function getToken(token,ctx)
{
  if(token)
  {
    let decodeToken= await decodeJWT(token);
    console.log(decodeToken);
     if(await checkUserRole(decodeToken) === true){
        return true;  
     }else if(checkUserRole(decodeToken) === false){
        return false;
     }
  }
}

export async function checkUserRole(decodeToken)
{
   if (decodeToken.Roles !== "producer")
   {
       return false;
   }else if(decodeToken.Roles !== "musician")
   {
      return false;
   }else{
        console.log(`[${new Date().toLocaleString()}] : CheckUserRole [Middleware]: Ok`);
        return true;
   }
}