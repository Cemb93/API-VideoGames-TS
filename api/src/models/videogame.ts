'use strict';
import { Model, Sequelize } from "sequelize";
import { GamesDb } from "../interface";

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class VideoGame extends Model<GamesDb> implements GamesDb {
    id!: string;
    name!: string;
    description!: string;
    released!: string;
    rating!: number;
    platforms!: string[];
    image!: string;
    static associate(models: any) {
      VideoGame.belongsToMany(models.genre, { through: 'Games_Genres' });
    }
  }
  VideoGame.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    released: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    timestamps: false,
    modelName: 'VideoGame',
  });
  return VideoGame;
};