'use strict';

import { Model, Sequelize } from "sequelize";
import { GenerosApi } from "../interface";

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Genre extends Model<GenerosApi> implements GenerosApi {
    id!: number;
    name!: string;
    static associate(models: any) {
      Genre.belongsToMany(models.VideoGame, { through: 'Games_Genres' });
    }
  }
  Genre.init({
    name: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'genre',
  });
  return Genre;
};