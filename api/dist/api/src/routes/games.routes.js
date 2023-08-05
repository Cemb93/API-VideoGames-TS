"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerGames = void 0;
const express_1 = require("express");
const VideoGames_1 = require("../services/VideoGames");
const Generos_1 = require("../controllers/Generos");
const CreateGame_1 = require("../services/CreateGame");
const UpDateGame_1 = require("../services/UpDateGame");
const Delete_1 = require("../services/Delete");
const Plataformas_1 = require("../controllers/Plataformas");
exports.routerGames = (0, express_1.Router)();
const VIDEOGAMES = '/videogames';
const GENRES = '/genres';
const PLATFORMS = '/platforms';
exports.routerGames.post(VIDEOGAMES, CreateGame_1.createVideoGame);
exports.routerGames.get(VIDEOGAMES, VideoGames_1.allVideoGames);
exports.routerGames.get(`${VIDEOGAMES}/:id`, VideoGames_1.allVideoGamesById);
exports.routerGames.put(`${VIDEOGAMES}/:id`, UpDateGame_1.upDateGame);
exports.routerGames.delete(`${VIDEOGAMES}/:id`, Delete_1.deleteGame);
exports.routerGames.get(GENRES, Generos_1.genresApi);
//! SOLO SE USA PARA CONOCER LA CANTIDAD TOTAL DE PLATAFORMAS
exports.routerGames.get(PLATFORMS, Plataformas_1.platformsApi);