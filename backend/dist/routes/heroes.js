"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const heroes_1 = require("../controllers/heroes");
const router = express_1.Router();
router.get('/', heroes_1.getHeroes);
router.post('/', heroes_1.addHero);
router.put('/:id', heroes_1.updateHero);
router.delete('/:id', heroes_1.deleteHero);
exports.default = router;
