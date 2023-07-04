'use strict';
import { Model } from "sequelize";
import { CountriesApi } from "../../../interface/Countries";
import { NameCoutry } from "../../../types/Countries";

module.exports = (sequelize: any, DataTypes: any) => {
  class countrie extends Model<CountriesApi> implements CountriesApi {
    cca3!: string;
    name!: NameCoutry;
    flags!: string[];
    continents!: string[];
    capital!: string[];
    subregion!: string;
    area!: number;
    population!: number;
    static associate(models: any) {
      countrie.belongsToMany(models.activitie, { through: "Countries_Activities" });
    }
  }
  countrie.init({
    cca3: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flags: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continents: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER,
    },
    population: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    timestamps: false,
    modelName: 'countrie',
  });
  return countrie;
};