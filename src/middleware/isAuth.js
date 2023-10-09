'user strict'
import  {RedisExistKey} from '../modules/redis.js'

export async function checkAuthorization(redisKey)
{
  if(await RedisExistKey(redisKey) === true)
  {
     return true;
  }else{
     return false;
  }  
}