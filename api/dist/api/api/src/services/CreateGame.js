"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVideoGame = void 0;
const videogame_1 = require("../models/videogame");
// import { GamesDb } from "../../interface/IGamesDb";
const createVideoGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const game = req.body;
    try {
        const newGame = yield videogame_1.VideoGameModel.create({
            name: game.name,
            description: game.description,
            released: game.released,
            image: game.image || "https://cdn2.thedogapi.com/images/B12BnxcVQ.jpg",
            rating: game.rating,
            platforms: game.platforms,
            genres: game.genres
        });
        return res.json({ mgs: "Video Juegos creado", newGame });
    }
    catch (error) {
        console.log("Error en POST por:", error);
    }
});
exports.createVideoGame = createVideoGame;
