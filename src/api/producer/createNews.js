import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import {createNews} from '../../controllers/common/createNews.js'
import { getToken } from "../../middleware/isProducer.js";
import { checkAuthorization } from "../../middleware/isAuth.js";

const router = new Router();
router.use(bodyParser());

router.post('/api/musician/createNews', async (ctx)=>{
    try{
        ctx.status=200;
        /*
        if(await checkAuthorization("authUser_"+ctx.request.body.Token,ctx)){
            if(await getToken(ctx.request.body.Token) != false)
            {
               ctx.status=200;
               ctx.body=await createNews({Name:ctx.request.body.Name,
                                          AuthorId:ctx.request.body.BandId,
                                          MemberId:ctx.request.body.MemberId,
                                          Poster: ctx.request.body.Poster,
                                          Link: ctx.request.body.Link,
                                          Text: ctx.request.body.Text}, ctx);
            }else{
               ctx.body={
                   success:false,
                   value:{
                       error:`[${new Date().toLocaleString()}] : Musician Server [CreateNews API]: The requested action requires a role higher than that of user. Server exception` 
                    }
                }
             }
        }else{
         ctx.status=403;
         ctx.body={
             success:false,
             value:{
               error:`[${new Date().toLocaleString()}] : Musician Server [CreateNews API]: The requested action requires a role higher than that of user.`   
             }
         }
        }   */
    }catch(err){
        ctx.status=500;
        ctx.body={
            success: false,
            value: {
               error: `[${new Date().toLocaleString()}] : Musician Server [CreateNews API]: Server exception: ${err}`
            }
        };
    
    }})

export default router;