import { model, Schema } from "mongoose";
import { GenerosApi } from "../../../interface/IGames";

export const genreModel = model<GenerosApi>("Genre", new Schema<GenerosApi>({
  name: {
    type: String,
    require: true
  },
}, {
  versionKey: false,
  timestamps: false,
}));
