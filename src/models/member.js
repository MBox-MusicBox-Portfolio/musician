'use strict'
import User from '../models/user.js'
import db from '../modules/db.js'
import {DataTypes} from 'sequelize';

const Member = db.define('Members',{
    Id:{
        primaryKey:true,
        defaultValue: DataTypes.UUIDV4,
        type:DataTypes.UUIDV4
    },
    UserId:{
        type:DataTypes.UUIDV4
    },
    Info:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    isEdit:{
        type:DataTypes.BOOLEAN,
        defaultValue: true
    }
}) 

Member.belongsTo(User);
User.hasMany(Member);

export default Member;