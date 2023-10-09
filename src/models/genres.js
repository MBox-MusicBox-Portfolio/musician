import db from "../modules/db";
import { DataTypes } from "sequelize";

const Genres = db.define('Genres',{
    Id: {
        type:DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    Name:{
        type:DataTypes.STRING,
        unique:true
    },
    BandId:{
        type:DataTypes.UUIDV4
    }
})