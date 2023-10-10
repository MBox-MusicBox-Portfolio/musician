import User from '../../models/user.js';
import Member from '../../models/member.js';
import Roles from '../../models/roles.js';
import BandMemberBand from '../../models/bandMemberBand.js';
import {RedisDelKey} from '../../modules/redis.js';

export async function addMember(memberObject,ctx)
{
   try{
      if(memberObject)
      {
        await Member.create({
             UserId: memberObject.UserId,
             BandId: memberObject.BandId,
             Info: memberObject.Information,
             isEdit: memberObject.IsEdit
         });

        await BandMemberBand.create({
             MembersId: await getMember(memberObject.UserId),
             BandsId: memberObject.BandId
         })
        await changeUserRole(memberObject.UserId,memberObject.RedisKey)
        ctx.status=200;
        return {
            success:true,
            value:{
               message:"New member created sucessfull"
            }
        }
      }else{
         return {
            success:false,
            value:{
               error: `[${new Date().toLocaleString()}]:` + "Musician Server [MemberController::addMemberFunction]: Empty argument. "
            }
         }
      }
   }catch(err){
      ctx.status=400
      return {
         success:false,
         value:{
            error: `[${new Date().toLocaleString()}] : Musician Server [MemberController::addMemberFunction]: Member can't be created , because: ${err}`
         }
      }
   }
}
async function getMember(userId)
{
   const memberId = await Member.findOne({where:{UserId:userId}, attributes:['Id']});
   return memberId.dataValues.Id;
}

async function changeUserRole(userId, redisKey) {
   try {
     const user = await User.findOne({ where: { Id: userId }, attributes: ['RoleId'] });
     const roleId = await Roles.findOne({ where: { Name: 'musician' }, attributes: ['Id'] });
     if (user && roleId) {
       await User.update(
         { RoleId: roleId.dataValues.Id },
         { where: { RoleId: await getUserRole('user') } }
       );
       //await user.save();
      // await deleteAuthorization(redisKey);
     } else {
       console.error('Пользователь или роль не найдены.');
     }
   } catch (err) {
     console.error(err);
   }
 }
 
async function getUserRole(rolename)
{
  const roleName= await Roles.findOne({where: {Name:'user'}, attributes:['Id']});
  return roleName.dataValues.Id
}
async function deleteAuthorization(redisKey)
{
   if(redisKey)
   {
      await RedisDelKey(redisKey);
   }else{
      console.error("I can't remove key")
   }
    
}