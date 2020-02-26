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
const hero_model_1 = __importDefault(require("../models/hero.model"));
exports.getHeroes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const heroes = yield hero_model_1.default.find((err, heroes) => {
            if (err) {
                return res.status(500).json({ msg: err.message });
            }
            else {
                return heroes;
            }
        });
        return res.json({ heroes: heroes });
    }
    catch (error) {
        return res.status(500).json({ msg: error.message });
    }
});
exports.addHero = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newHero = new hero_model_1.default(req.body);
        yield newHero.save((err) => {
            if (err) {
                return res.status(500).json({ msg: err.message });
            }
            else {
                res
                    .status(201)
                    .json({ message: 'Created a new hero!', createdHero: newHero });
            }
        });
    }
    catch (error) {
        return res.status(500).json({ msg: error.message });
    }
});
exports.updateHero = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const heroId = req.params.id;
        const updatedHero = req.body;
        yield hero_model_1.default.findByIdAndUpdate(heroId, updatedHero, (err, hero) => {
            if (err) {
                return res.status(500).json({ msg: err.message });
            }
            else {
                return res.status(201).json({
                    message: 'Hero successfully updated!',
                    createdHero: hero
                });
            }
        });
    }
    catch (error) {
        return res.status(500).json({ msg: error.message });
    }
});
exports.deleteHero = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const heroId = req.params.id;
        yield hero_model_1.default.findByIdAndRemove(heroId);
        return res.json({
            msg: 'Hero successfully deleted!'
        });
    }
    catch (error) {
        return res.status(500).json({ msg: error.message });
    }
});
