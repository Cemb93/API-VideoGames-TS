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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoGamesApi = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
//* FETCH WITH NODE.JS => https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined
const fetch = require("node-fetch");
const VideoGamesDb_1 = require("./VideoGamesDb");
dotenv_1.default.config();
const { VIDEOGAMES, KEY } = process.env;
const videoGamesApi = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const gameDb = yield (0, VideoGamesDb_1.videoGamesDb)();
        let pagesOfApi = [];
        for (let i = 1; i <= 5; i++) {
            const EndPoint = `${VIDEOGAMES}?key=${KEY}&page=${i}`;
            const dataApi = yield fetch(EndPoint);
            const response = yield dataApi.json();
            pagesOfApi.push(response);
        }
        const gamesOfApi = yield Promise.all(pagesOfApi)
            .then((res) => {
            let pages = [];
            for (let i = 0; i < res.length; i++) {
                pages = pages.concat(res[i].results);
            }
            return pages.map((el) => {
                var _a;
                return {
                    _id: el.id,
                    name: el.name,
                    released: el.released,
                    image: el.background_image,
                    rating: el.rating,
                    platforms: el.platforms.map((el) => el.platform.name),
                    genres: (_a = el.genres) === null || _a === void 0 ? void 0 : _a.map((el) => el.name),
                };
            });
        });
        //* SOLUTION -> https://stackoverflow.com/questions/50234481/typescript-2-8-3-type-must-have-a-symbol-iterator-method-that-returns-an-iterato
        pagesOfApi = [...gameDb, ...gamesOfApi];
        // pagesOfApi = [...<[]>gameDb, ...(gamesOfApi as [])]
        return pagesOfApi;
    }
    catch (error) {
        console.log("Error en videoGamesApi por:", error);
    }
});
exports.videoGamesApi = videoGamesApi;
// export const videoGamesApi = async () => {
//   try {
//     let gameDb = await videoGamesDb();
//     // console.log('DB:', gameDb)
//     let pagesOfApi = [];
//     if (typeof VIDEOGAMES === "string" && typeof KEY === "string") {
//       for (let i = 0; i <= 1; i++) {
//         pagesOfApi.push(
//           await fetch(`${VIDEOGAMES}?key=${KEY}&page=${i}`).then(
//             (data: any) => data.json()
//           ).catch((error: string) => console.log('Error en la API por:', error))
//         );
//       }
//       let gamesOfApi = await Promise.all(pagesOfApi).then((res: any) => res[1].results.map((el: GamesApi) => {
//         return {
//           id: el.id,
//           name: el.name,
//           released: el.released,
//           image: el.background_image,
//           rating: el.rating,
//           platforms: el.platforms.map((el: PlatformsApi) => el.platform.name),
//           genres: el.genres.map((el: GenerosApi) => el.name),
//         }
//       }));
//       gamesOfApi = gameDb?.concat(gamesOfApi)
//       return gamesOfApi;
//     }
//   } catch (error) {
//     console.log("Error en videoGamesApi por:", error);
//   }
// };
