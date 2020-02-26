"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
exports.HeroSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    superpowers: { type: Array, required: true },
    weaknesses: { type: Array, required: true },
    img: { type: String, required: true }
});
const Hero = mongoose_1.default.model('Hero', exports.HeroSchema);
exports.default = Hero;
