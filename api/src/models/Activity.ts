'use strict';
import { Model } from "sequelize";
import { Activities, Season } from "../../../types/Countries";

module.exports = (sequelize: any, DataTypes: any) => {
  class activitie extends Model<Activities> implements Activities {
    id!: number;
    name!: string;
    difficulty!: number;
    duration!: string;
    season!: Season;
    static associate(models: any) {
      activitie.belongsToMany(models.countrie, { through: "Countries_Activities" });
    }
  }
  activitie.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    season: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'activitie',
  });
  return activitie;
};