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
exports.deleteGame = void 0;
const videogame_1 = require("../models/videogame");
const deleteGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const game = yield videogame_1.VideoGameModel.findById(id);
        if ((game === null || game === void 0 ? void 0 : game.id) !== id || id.length < 24) {
            throw Error(`El juego no existe.`);
        }
        else {
            yield videogame_1.VideoGameModel.findByIdAndDelete(id);
            return res.status(200).json({ msg: `El juego: ${game.name.toUpperCase()}, ha sido eliminado.`, game });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(404).json({ error: error.message, });
        }
    }
});
exports.deleteGame = deleteGame;
