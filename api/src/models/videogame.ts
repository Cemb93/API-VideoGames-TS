import { model, Schema } from "mongoose";
import { GamesDb } from "../../../interface/Games";

export const VideoGameModel = model<GamesDb>("Videogame", new Schema<GamesDb>({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  released: {
    type: String,
    require: true
  },
  rating: {
    type: Number,
    require: true
  },
  platforms: {
    type: Array(),
    require: true
  },
  image: {
    type: String,
    require: true
  },
  genres: {
    type: Schema.Types.Array,
    // type: Schema.Types.ObjectId,
    ref: "Genre",// Nombre del modelo
  },
}, {
  versionKey: false,
  timestamps: false,
}));

// --------------------------------------------------------------------------

// const videoGameSchema = new Schema({
//   name: {
//     type: String,
//     require: true
//   },
//   description: {
//     type: String,
//     require: true
//   },
//   released: {
//     type: String,
//     require: true
//   },
//   rating: {
//     type: Number,
//     require: true
//   },
//   platforms: {
//     type: Array(),
//     require: true
//   },
//   image: {
//     type: String,
//     require: true
//   },
//   genre: {
//     type: Schema.Types.ObjectId,
//     ref: "Genre",// Nombre del modelo
//   },
// }, {
//   timestamps: false,
//   // versionKey: true,
// });

// videoGameSchema.pre('save', async function (next) {
//   await this.populate("genre");// Nombre del atributo linea 29
//   next()
// });

// export const VideoGameModel = model<GamesDb>("Videogame", videoGameSchema)

// --------------------------------------------------------------------------------

// 'use strict';
// import { Model, Sequelize } from "sequelize";
// import { GamesDb } from "../../../interface/Games";

// module.exports = (sequelize: Sequelize, DataTypes: any) => {
//   class VideoGame extends Model<GamesDb> implements GamesDb {
//     id!: string;
//     name!: string;
//     description!: string;
//     released!: string;
//     rating!: number;
//     platforms!: string[];
//     image!: string;
//     static associate(models: any) {
//       VideoGame.belongsToMany(models.genre, { through: 'Games_Genres' });
//     }
//   }
//   VideoGame.init({
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//       primaryKey: true,
//       allowNull: false,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//     released: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     rating: {
//       type: DataTypes.FLOAT,
//       allowNull: false,
//     },
//     platforms: {
//       type: DataTypes.ARRAY(DataTypes.STRING),
//       allowNull: false,
//     },
//     image: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   }, {
//     sequelize,
//     timestamps: false,
//     modelName: 'VideoGame',
//   });
//   return VideoGame;
// };