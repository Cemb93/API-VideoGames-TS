import { model, Schema } from "mongoose";
import { GenerosApi } from "../../../interface/Games";

export const genreModel = model<GenerosApi>("Genre", new Schema<GenerosApi>({
  name: {
    type: String,
    require: true
  },
  videoGames: {
    type: Schema.Types.Array,
    // type: Schema.Types.ObjectId,
    ref: "Videogame",// Nombre del modelo
  },
}, {
  timestamps: false,
}));

//? ---------------------------------------------------------------

// const genreSchema = new Schema({
//   name: {
//     type: String,
//     require: true
//   },
//   videoGame: {
//     // type: Schema.Types.ObjectId,
//     type: String,
//     ref: "Videogame",// Nombre del modelo
//   },
// }, {
//   timestamps: false,
//   // versionKey: true,
// });

// genreSchema.pre('save', async function (next) {
//   await this.populate("videoGame");// Nombre del atributo linea 9
//   next()
// });

// export const genreModel = model<GenerosApi>("Genre", genreSchema)

//? --------------------------------------------------------------

// 'use strict';

// import { Model, Sequelize } from "sequelize";
// import { GenerosApi } from "../../../interface/Games";

// module.exports = (sequelize: Sequelize, DataTypes: any) => {
//   class Genre extends Model<GenerosApi> implements GenerosApi {
//     id!: number;
//     name!: string;
//     static associate(models: any) {
//       Genre.belongsToMany(models.VideoGame, { through: 'Games_Genres' });
//     }
//   }
//   Genre.init({
//     name: {
//       type: DataTypes.STRING,
//     }
//   }, {
//     sequelize,
//     timestamps: false,
//     modelName: 'genre',
//   });
//   return Genre;
// };