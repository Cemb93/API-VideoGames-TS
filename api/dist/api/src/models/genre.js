"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genreModel = void 0;
const mongoose_1 = require("mongoose");
exports.genreModel = (0, mongoose_1.model)("Genre", new mongoose_1.Schema({
    name: {
        type: String,
        require: true
    },
}, {
    versionKey: false,
    timestamps: false,
}));
