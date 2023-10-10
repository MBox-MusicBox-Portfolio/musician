import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import { getToken } from "../../middleware/isProducer.js";
import { checkAuthorization } from "../../middleware/isAuth.js";
import { deleteMemberUser } from "../../controllers/producer/deleteMember.js";

const router = new Router();
router.use(bodyParser());

router.post('/api/musician/deleteMember', async (ctx)=>{
 try{ 
    if(await checkAuthorization("authUser_"+ctx.request.body.Token,ctx)){
        if(await getToken(ctx.request.body.Token) != false)
        {
           ctx.status=200;
           ctx.body = await deleteMemberUser({Token: ctx.request.body.Token,
                                              UserId: ctx.request.body.UserId});                          
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
}catch(err){
    ctx.status=500;
    ctx.body={
        success: false,
        value: {
           error: `[${new Date().toLocaleString()}] : Musician Server [CreateMember Controller]: Server exception: ${err}`
        }
    };
}})

export default router;