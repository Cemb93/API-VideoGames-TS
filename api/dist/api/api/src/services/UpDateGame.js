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
exports.upDateGame = void 0;
const videogame_1 = require("../models/videogame");
// import { GamesDb } from "../../interface/IGamesDb";
const upDateGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const game = req.body;
    try {
        const current = yield videogame_1.VideoGameModel.findById(id);
        if ((current === null || current === void 0 ? void 0 : current.id) !== id) {
            throw Error('El juego no existe.');
        }
        else {
            yield videogame_1.VideoGameModel.findByIdAndUpdate(id, game);
            return res.json({ msg: `El juego ha sido actualizado.`, game });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            return res.json({ error: error.message, });
        }
    }
});
exports.upDateGame = upDateGame;
