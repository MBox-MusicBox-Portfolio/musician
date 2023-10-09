import User from "../../models/user.js";

export async function findUser(email)
{
    let user = await User.findOne({where: {Email: email}, attributes:['Name', 'Avatar','Email']});
    if (user) {
        return {
            success: true,
            value: {
                user: user
            }
        };
    } else {
        return {
            success: false,
            value: {
                user: "User doesn't exist"
            }
        };
    }
}