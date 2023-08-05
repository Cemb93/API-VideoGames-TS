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
exports.gamesByName = void 0;
const VideoGamesDb_1 = require("./VideoGamesDb");
const fetch = require("node-fetch");
const { VIDEOGAMES, KEY } = process.env;
const gamesByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const EndPoint = `${VIDEOGAMES}?search=${name}&key=${KEY}`;
    try {
        const gameDb = yield (0, VideoGamesDb_1.videoGamesDb)();
        let allNames = [];
        const nameApi = yield fetch(EndPoint);
        const { results } = yield nameApi.json();
        results.map((el) => {
            var _a;
            let arrPlatforms = [];
            if (el.platforms !== null) {
                arrPlatforms = el.platforms.map((el) => el.platform.name);
            }
            allNames.push({
                _id: Number(el.id),
                name: el.name,
                released: el.released,
                image: el.background_image,
                rating: el.rating,
                platforms: arrPlatforms,
                genres: (_a = el.genres) === null || _a === void 0 ? void 0 : _a.map((el) => el.name),
            });
        });
        //* SOLUTION -> https://stackoverflow.com/questions/50234481/typescript-2-8-3-type-must-have-a-symbol-iterator-method-that-returns-an-iterato
        allNames = [...gameDb, ...allNames];
        return allNames;
    }
    catch (error) {
        console.log('No se obtuvo los nombre por:', error);
    }
});
exports.gamesByName = gamesByName;
