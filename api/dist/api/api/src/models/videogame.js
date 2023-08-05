"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoGameModel = void 0;
const mongoose_1 = require("mongoose");
// import { GamesDb } from "../interface/IGamesDb";
exports.VideoGameModel = (0, mongoose_1.model)("Videogame", new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.Array,
        // type: Schema.Types.ObjectId,
        ref: "Genre", // Nombre del modelo
    },
}, {
    versionKey: false,
    timestamps: false,
}));
