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
exports.allVideoGamesById = exports.allVideoGames = void 0;
const gamesByName_1 = require("../controllers/gamesByName");
const gamesById_1 = require("../controllers/gamesById");
const VideoGames_1 = require("../controllers/VideoGames");
const allVideoGames = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.query;
    try {
        const allGames = yield (0, VideoGames_1.videoGamesApi)();
        if (typeof name === 'string') {
            const names = yield (0, gamesByName_1.gamesByName)(name);
            if (names) {
                const filterName = names.filter((el) => {
                    return el.name.toLowerCase().includes(name.toLowerCase());
                });
                let firstNames = [];
                for (let i = 0; i < filterName.length; i++) {
                    firstNames.push(filterName[i]);
                    if (firstNames.length === 15) {
                        return res.json(firstNames);
                    }
                }
            }
            else {
                //! Si no encuentra nada que filtrar devuelve este mesaje
                return res.json({ mgs: `No existen juegos con el nombre: ${name}` });
            }
        }
        else {
            return res.status(200).json(allGames);
        }
    }
    catch (error) {
        console.log('Error en la ruta principal por:', error);
    }
});
exports.allVideoGames = allVideoGames;
const allVideoGamesById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const allIds = yield (0, gamesById_1.gamesById)(id);
        if (!allIds || allIds['name'] === undefined) {
            return res.json({ mgs: `El Juego con el ID: ${id}, no existe!` });
        }
        return res.json(allIds);
    }
    catch (error) {
        console.log('Error para tener todos los juegos por ID por:', error);
    }
});
exports.allVideoGamesById = allVideoGamesById;
