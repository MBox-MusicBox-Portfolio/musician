import { DataTypes } from 'sequelize';
import db from '../modules/db.js';

const Song = db.define('Songs', {
    Id: {
      type: DataTypes.CHAR(36),
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Poster: {
      type: DataTypes.TEXT,
    },
    Link: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Text: {
      type: DataTypes.TEXT,
    },
    Info: {
      type: DataTypes.TEXT,
    },
    Genre: {
      type: DataTypes.TEXT,
    },
    IsBlock: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  export default Song;