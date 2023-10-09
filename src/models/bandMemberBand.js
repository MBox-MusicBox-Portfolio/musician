'use strict'
import Member from '../models/member.js'
import Band from '../models/band.js';
import db from '../modules/db.js'
import {DataTypes} from 'sequelize';

const BandMemberBand = db.define('BandMemberBand',{
    BandsId:{
        type:DataTypes.UUIDV4
    },
    MembersId:{
        type:DataTypes.UUIDV4
    }
},{
    tableName: 'BandMemberBand' 
});

Band.belongsToMany(Member, { through: BandMemberBand, foreignKey: 'BandsId' });
Member.belongsToMany(Band, { through: BandMemberBand, foreignKey: 'MembersId' });

export default BandMemberBand;
