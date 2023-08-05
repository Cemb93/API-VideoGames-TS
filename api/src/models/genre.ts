import { model, Schema } from "mongoose";
import { GenerosApi } from "../../../interface/Games";

export const genreModel = model<GenerosApi>("Genre", new Schema<GenerosApi>({
  name: {
    type: String,
    require: true
  },
}, {
  versionKey: false,
  timestamps: false,
}));
