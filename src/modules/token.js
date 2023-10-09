import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export async function decodeJWT(token)
{
  if(token)
  {
    let decrypt = jwt.verify(token, process.env.JWT_SECRET);
    return decrypt;
  }else{
      console.error("Token is missing! Abort...");
  }
}
