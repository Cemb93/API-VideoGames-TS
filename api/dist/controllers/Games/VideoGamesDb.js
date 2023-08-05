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
exports.gamesDbById = exports.videoGamesDb = void 0;
const videogame_1 = require("../../models/videogame");
const videoGamesDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let games_DB = yield videogame_1.VideoGameModel.find();
        return games_DB;
    }
    catch (error) {
        console.log('Error en videoGamesDb por:', error);
    }
});
exports.videoGamesDb = videoGamesDb;
const gamesDbById = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id_DB = yield videogame_1.VideoGameModel.findById(_id);
        // id_DB = JSON.parse(JSON.stringify(id_DB));
        return id_DB;
    }
    catch (error) {
        console.log('Error en gamesDbById por:', error);
    }
});
exports.gamesDbById = gamesDbById;
