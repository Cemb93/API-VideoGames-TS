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
exports.dbConexion = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = require("mongoose");
dotenv_1.default.config();
const { DB } = process.env;
const dbConexion = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (typeof DB === "string") {
            // const conn = await connect(DB)
            yield (0, mongoose_1.connect)(DB);
            console.log("MongoDb Conected is OK!!");
        }
    }
    catch (error) {
        console.log("Error in conection for:", error);
    }
});
exports.dbConexion = dbConexion;
//* VER DE LA DOCUMENTACION -> https://typeorm.io/
// import "reflect-metadata";
// import dotenv from 'dotenv';
// dotenv.config();
// import { DataSource } from 'typeorm';
// import { Videogames } from "./models/VideoGames";
// import { Genres } from "./models/Genres";
// const { HOST, USER, PASSWORD, DATABASE } = process.env;
// export const AppDataSource = new DataSource({
//   type: "postgres", 
//   host: HOST,
//   username: USER,
//   password: PASSWORD,
//   port: 5432,
//   database: DATABASE,
//   entities: [Videogames, Genres],
//   synchronize: true,
//   // logging: true,
// });
