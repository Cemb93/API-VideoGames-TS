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
exports.platformsApi = void 0;
const fetch = require("node-fetch");
const { PLATFORMS, KEY } = process.env;
//! SOLO SE USA PARA CONOCER LA CANTIDAD TOTAL DE PLATAFORMAS
const platformsApi = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let platformsApi = [];
        for (let i = 0; i <= 1; i++) {
            const EndPoint = `${PLATFORMS}?key=${KEY}&page=${i}`;
            const dataApi = yield fetch(EndPoint);
            const response = yield dataApi.json();
            platformsApi.push(response);
        }
        const allPlatforms = yield Promise.all(platformsApi)
            .then((res) => res[1].results.map((el) => {
            return {
                // id: el.id,
                name: el.name,
            };
        }).sort((x, y) => {
            //* Se ordena el objeto Alfabeticamente
            return x.name.localeCompare(y.name);
        }));
        return res.json(allPlatforms);
    }
    catch (error) {
        console.log(error);
    }
});
exports.platformsApi = platformsApi;
