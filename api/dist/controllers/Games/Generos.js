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
exports.genresApi = void 0;
const genre_1 = require("../../models/genre");
const fetch = require("node-fetch");
const { GENRES, KEY } = process.env;
const genresApi = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const genreDb = yield genre_1.genreModel.find();
        const EndPoint = `${GENRES}?key=${KEY}`;
        if (!genreDb.length) {
            const dataApi = yield fetch(EndPoint);
            const { results } = yield dataApi.json();
            let genresApi = results.map((el) => {
                return {
                    // id: el.id,
                    name: el.name,
                };
            });
            genresApi = yield genre_1.genreModel.create(genresApi);
            return res.json(genresApi);
        }
        else {
            return res.json(genreDb);
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.genresApi = genresApi;
// export const genresApi = async (_req: Request, res: Response) => {
//   try {
//     const genreDb = await Genres.find();
//     if (!genreDb.length) {
//       const dataApi = await fetch(`${GENRES}?key=${KEY}`).then((res: any) => res.json());
//       let genresApi = dataApi.results.map((el: GenerosApi) => {
//         return {
//           id: el.id,
//           name: el.name,
//         };
//       });
//       genresApi = await Genres.save(genresApi);
//       return res.json(genresApi);
//     } else {
//       return res.json(genreDb);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
