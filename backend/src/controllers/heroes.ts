import { RequestHandler } from 'express';

import { Hero } from '../models/hero.model';

const mockedHeroes: Hero[] = [
  {
    id: '1',
    name: 'Superman',
    superpowers: ['Super strength', 'Flight', 'Super Senses'],
    weaknesses: ['Kryptonite'],
    img:
      'https://www.fondoswiki.com/Uploads/fondoswiki.com/Resoluciones/3728-1920x1080.jpg'
  },
  {
    id: '2',
    name: 'Wonder Woman',
    superpowers: ['Super strength', 'Durability', 'Flight', 'Super speed'],
    weaknesses: ['Herself', 'Posion'],
    img:
      'https://comicvine1.cbsistatic.com/uploads/original/9/93595/2247136-ww.jpg'
  },
  {
    id: '3',
    name: 'Batman',
    superpowers: ['Super intelligence', 'Money'],
    weaknesses: [],
    img:
      'https://i2.wp.com/antifaz.org.mx/wp-content/uploads/2019/03/Batman80.jpeg?fit=1200%2C675&ssl=1'
  }
];

export const getHeroes: RequestHandler = (req, res, next) => {
  try {
    res.json({ heroes: mockedHeroes });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const addHero: RequestHandler = (req, res, next) => {
  try {
    const heroInfo = req.body as Hero;
    const newHero = new Hero(
      heroInfo.id,
      heroInfo.name,
      heroInfo.superpowers,
      heroInfo.weaknesses,
      heroInfo.img
    );

    mockedHeroes.push(newHero);

    res
      .status(201)
      .json({ message: 'Created a new hero!', createdHero: newHero });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateHero: RequestHandler<{ id: string }> = (req, res, next) => {
  try {
    const heroId = req.params.id;
    const updatedHero = req.body as Hero;

    const heroIndex = mockedHeroes.findIndex(hero => hero.id === heroId);

    if (heroIndex < 0) {
      throw new Error('Could not find hero.');
    }

    mockedHeroes[heroIndex] = new Hero(
      mockedHeroes[heroIndex].id,
      updatedHero.name,
      updatedHero.superpowers,
      updatedHero.weaknesses,
      updatedHero.img
    );

    res.json({
      msg: 'Hero successfully updated!',
      updatedHero: mockedHeroes[heroIndex]
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteHero: RequestHandler<{ id: string }> = (req, res, next) => {
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
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
