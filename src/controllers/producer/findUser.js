import User from "../../models/user.js";

export async function findUser(email,ctx)
{
    try{
        let user = await User.findOne({where: {Email: email}, attributes:['Id','Name', 'Avatar','Email']});
        if (user) {
            ctx.status=200;
            return{
                success: true,
                value: {
                    user: user
                }
            };
        } else {
            ctx.status=403;
            return {
                success: false,
                value: {
                    user: "User doesn't exist"
                }
            };
        }     
    }catch(err){
        ctx.status=500;
        return {
            success: false,
            value: {
                error: `[${new Date().toLocaleString()}] : Musician Server [FindUser Controller]: Server exception: ${err}`
            }
        };
    }
}