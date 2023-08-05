"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allRoutes = void 0;
const express_1 = require("express");
const games_routes_1 = require("./games.routes");
const auth_routes_1 = require("./auth.routes");
exports.allRoutes = (0, express_1.Router)();
exports.allRoutes.use(games_routes_1.routerGames);
exports.allRoutes.use(auth_routes_1.authGoogle);
