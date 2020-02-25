"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hero_model_1 = require("../models/hero.model");
const mockedHeroes = [
    {
        id: '1',
        name: 'Superman',
        superpowers: ['Super strength', 'Flight', 'Super Senses'],
        weaknesses: ['Kryptonite'],
        img: 'https://www.fondoswiki.com/Uploads/fondoswiki.com/Resoluciones/3728-1920x1080.jpg'
    },
    {
        id: '2',
        name: 'Wonder Woman',
        superpowers: ['Super strength', 'Durability', 'Flight', 'Super speed'],
        weaknesses: ['Herself', 'Posion'],
        img: 'https://comicvine1.cbsistatic.com/uploads/original/9/93595/2247136-ww.jpg'
    },
    {
        id: '3',
        name: 'Batman',
        superpowers: ['Super intelligence', 'Money'],
        weaknesses: [],
        img: 'https://i2.wp.com/antifaz.org.mx/wp-content/uploads/2019/03/Batman80.jpeg?fit=1200%2C675&ssl=1'
    }
];
exports.getHeroes = (req, res, next) => {
    try {
        res.json({ heroes: mockedHeroes });
    }
    catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
exports.addHero = (req, res, next) => {
    try {
        const heroInfo = req.body;
        const newHero = new hero_model_1.Hero(heroInfo.id, heroInfo.name, heroInfo.superpowers, heroInfo.weaknesses, heroInfo.img);
        mockedHeroes.push(newHero);
        res
            .status(201)
            .json({ message: 'Created a new hero!', createdHero: newHero });
    }
    catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
exports.updateHero = (req, res, next) => {
    try {
        const heroId = req.params.id;
        const updatedHero = req.body;
        const heroIndex = mockedHeroes.findIndex(hero => hero.id === heroId);
        if (heroIndex < 0) {
            throw new Error('Could not find hero.');
        }
        mockedHeroes[heroIndex] = new hero_model_1.Hero(mockedHeroes[heroIndex].id, updatedHero.name, updatedHero.superpowers, updatedHero.weaknesses, updatedHero.img);
        res.json({
            msg: 'Hero successfully updated!',
            updatedHero: mockedHeroes[heroIndex]
        });
    }
    catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
exports.deleteHero = (req, res, next) => {
    try {
        const heroId = req.params.id;
        const heroIndex = mockedHeroes.findIndex(hero => hero.id === heroId);
        if (heroIndex < 0) {
            throw new Error('Could not find hero.');
        }
        mockedHeroes.splice(heroIndex, 1);
        res.json({
            msg: 'Hero successfully deleted!'
        });
    }
    catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
