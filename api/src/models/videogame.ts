'use strict';
import { Model } from "sequelize";
import { Generos, IVideoGames, Platforms } from "../interface";

module.exports = (sequelize: any, DataTypes: any) => {
  class VideoGame extends Model<IVideoGames> implements IVideoGames {
    id!: string;
    name!: string;
    description!: string;
    released!: string;
    rating!: number;
    platforms!: Platforms[]
    // genres!: Generos[]
    background_image!: string
    static associate(models: any) {
      VideoGame.belongsToMany(models.Genre, { through: 'Games_Genres' });
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
    background_image: {
      type: DataTypes.STRING,
      // allowNull: false,
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'VideoGame',
  });
  return VideoGame;
};