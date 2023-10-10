import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import { getToken } from "../../middleware/isProducer.js";
import {findUser} from "../../controllers/producer/findUser.js";
import { checkAuthorization } from "../../middleware/isAuth.js";

const router = new Router();
router.use(bodyParser());

router.post('/api/musician/findUser', async (ctx) =>{ 
    if(await checkAuthorization("authUser_"+ctx.request.body.Access)){
        if(await getToken(ctx.request.body.Access) != false)
        {
            ctx.status=200;
            ctx.body=await findUser(ctx.request.body.Email, ctx);
        }else{
            ctx.body={
                success:false,
                value:{
                    error:"The requested action requires a role higher than that of the user or musician"
                }
            }
        }
   }else{
    ctx.status=403;
    ctx.body={
        success:false,
        value:{
            message:"Access denied: You need authorized!"
        }
    }  
}
})
export default router;

//