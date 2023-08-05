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
