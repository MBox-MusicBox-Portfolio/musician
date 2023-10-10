import Member from "../../models/member.js";

export async function deleteMemberUser(user)
{
  if(user)
  {
    try{
        const memberId = await Member.findOne({where:{UserId: user}, attributes:['Id']});
        await Member.destroy({
           where:{
               Id:memberId.dataValues.Id
           }
        });
     }catch(err){
        return {
            success:false,
            value:{
                error: `[${new Date().toLocaleString()}]:` + "Musician Server [MemberController::DeleteMemberUser]: User can't delete ..."
            }
        }
    }
 }else{
    return {
        success:false,
        value:{
            error: `[${new Date().toLocaleString()}]:` + "Musician Server [MemberController::DeleteMemberUser]: User not found..."
        }
    }
 }
}
