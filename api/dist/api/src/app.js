"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const db_1 = require("./db");
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
exports.server = (0, express_1.default)();
exports.server.use(express_1.default.urlencoded({ extended: false }));
exports.server.use(express_1.default.json());
exports.server.use((0, cookie_parser_1.default)());
exports.server.use((0, morgan_1.default)("dev"));
(0, db_1.dbConexion)();
exports.server.use((0, cors_1.default)({
    origin: "*",
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
}));
exports.server.use("/", routes_1.allRoutes);
exports.server.use((err, _req, res, _next) => {
    console.log('APP typeof REQ:', typeof err);
    console.log('APP REQ:', err);
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});
// server.use(passport.initialize())
// server.use(passport.session())
// server.use(session({
//   secret: typeof process.env.SECRET_SESSION,
//   resave: false,
//   saveUninitialized: false
// }));
