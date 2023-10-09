import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import { getToken } from "../../middleware/isProducer.js";
import {addMember} from "../../controllers/producer/addMember.js"
import { checkAuthorization } from "../../middleware/isAuth.js";

const router = new Router();
router.use(bodyParser());
router.post('/api/musician/createMember', async (ctx) =>{
    console.log("Token:" + ctx.request.body.Token)
   if(await checkAuthorization("authUser_"+ctx.request.body.Token)){
        if(await getToken(ctx.request.body.Token))
        {
           ctx.status=200;

        }else{

        }
   }else{
    ctx.status=403;
    /*
    ctx.body = await getResponse(false,{
        access: "Access denied: You need authorized! "
    });*/
    ctx.body={
        success:false,
        value:{
            message:"Access denied: You need authorized!"
        }
    }
   }   
})

export default router;