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
exports.gamesById = void 0;
const VideoGamesDb_1 = require("./VideoGamesDb");
const fetch = require("node-fetch");
const { VIDEOGAMES, KEY } = process.env;
const gamesById = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (typeof _id === 'string' && _id.length === 24) {
            const idDb = yield (0, VideoGamesDb_1.gamesDbById)(_id);
            return idDb;
        }
        else {
            const EndPoint = `${VIDEOGAMES}/${_id}?key=${KEY}`;
            const idApi = yield fetch(EndPoint);
            const res = yield idApi.json();
            let arrPlataforms = [];
            let arrGenres = [];
            if ((res.platforms && res.genres) !== undefined) {
                arrPlataforms = res.platforms.map((el) => el.platform.name);
                arrGenres = res.genres.map((el) => el.name);
            }
            const game = {
                _id: res.id,
                name: res.name,
                image: res.background_image,
                released: res.released,
                rating: res.rating,
                platforms: arrPlataforms,
                genres: arrGenres,
                description: res.description_raw,
            };
            return game;
        }
    }
    catch (error) {
        console.log('Error en gamesById por:', error);
    }
});
exports.gamesById = gamesById;
//* ORM => TYPEORM
// export const gamesById = async (id: string | number) => {
//   try {
//     if (typeof id === 'string' && id.includes('-')) {
//       let idDb = await Videogames.findOneBy({ id });
//       return idDb;
//     } else {
//       let idApi = fetch(`${VIDEOGAMES}/${id}?key=${KEY}`).then((res: any) => res.json());
//       //* DSTRUCTURANDO EL OBJETO
//       const { name, background_image, released, rating, platforms, genres, description_raw } = await idApi;
//       const game = {
//         id,
//         name,
//         image: background_image,
//         released,
//         rating,
//         platforms: platforms.map((el: PlatformsApi) => el.platform.name),
//         genres: genres.map((el: GenerosApi) => el.name),
//         description: description_raw,
//       };
//       return game;
//     }
//   } catch (error) {
//     console.log('Error en gamesById por:', error);
//   }
// }
