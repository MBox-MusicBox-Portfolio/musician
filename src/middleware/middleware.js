import {getToken} from '../middleware/isProducer.js';
import { checkAuthorization } from '../middleware/isAuth.js';
import { getResponse } from '../controllers/common/getResponse.js';

export async function runMiddleware(request,ctx)
{
    if(await checkAuthorization("authUser_"+request))
    {
        if (await getToken(request))
        {
            return true;
        }else{
            ctx.status=403;
            ctx.body = await getResponse(false,{
                value:{
                    permission: "Denied action! Your role needs to be of a higher level than that of a musician"
                }
            });
        }
        
    }else{
        ctx.status=403;
        ctx.body = await getResponse(false,{
            value:{
                authorization: "You need authorization"
            }
        });
    }
}
