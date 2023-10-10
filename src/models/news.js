import Bands from "./band.js"
import Member from "./member.js";
import db from "../modules/db.js";
import { DataTypes } from "sequelize";

const News = db.define('News',{
    Id:{
        primaryKey:true,
        type:DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4
    },
    Name:{
        type:DataTypes.TEXT,
    },
    AuthorId:{
        type:DataTypes.UUIDV4,
        references:{
            model: 'Bands',
            key:'Id'
        }
    },
    MemberId:{
        type:DataTypes.UUIDV4,
        references:{
            model: 'Member',
            key:'Id'
        }
    },
    Poster:{
        type:DataTypes.TEXT
    },
    Link:{
        type:DataTypes.TEXT
    },
    Text:{
        type:DataTypes.TEXT
    }
});

//News.belongsTo(Member, { foreignKey: 'MemberId'});
//News.belongsTo(Bands, { foreignKey: 'AuthorId'});
//Bands.hasMany(News);

export default News;