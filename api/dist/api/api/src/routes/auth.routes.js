"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authGoogle = void 0;
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
exports.authGoogle = (0, express_1.Router)();
exports.authGoogle.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({
            error: false,
            message: "successfull",
            user: req.user,
        });
    }
    else {
        res.status(403).json({
            error: true,
            message: "No authorized",
        });
    }
});
exports.authGoogle.get("/login/failed", (req, res) => {
    res.status(401).json({
        error: true,
        message: "Login in failure",
    });
});
exports.authGoogle.get("/auth/google/callback", passport_1.default.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed"
}));
exports.authGoogle.get("/google", passport_1.default.authenticate("google", {
    scope: ["profile", "email"]
}));
exports.authGoogle.get("/logout", (req, res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL);
});
