import { RequestHandler } from 'express';

import Hero, { IHero } from '../models/hero.model';

export const getHeroes: RequestHandler = async (req, res, next) => {
  try {
    const heroes = await Hero.find((err: Error, heroes: IHero[]) => {
      if (err) {
        return res.status(500).json({ msg: err.message });
      } else {
        return heroes;
      }
    });
    return res.json({ heroes: heroes });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const addHero: RequestHandler = async (req, res, next) => {
  try {
    const newHero = new Hero(req.body);

    await newHero.save((err: Error) => {
      if (err) {
        return res.status(500).json({ msg: err.message });
      } else {
        res
          .status(201)
          .json({ message: 'Created a new hero!', createdHero: newHero });
      }
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const updateHero: RequestHandler<{ id: string }> = async (
  req,
  res,
  next
) => {
  try {
    const heroId = req.params.id;
    const updatedHero = req.body as IHero;

    await Hero.findByIdAndUpdate(
      heroId,
      updatedHero,
      (err: Error, hero: any) => {
        if (err) {
          return res.status(500).json({ msg: err.message });
        } else {
          return res.status(201).json({
            message: 'Hero successfully updated!',
            createdHero: hero
          });
        }
      }
    );
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const deleteHero: RequestHandler<{ id: string }> = async (
  req,
  res,
  next
) => {
  try {
    const heroId = req.params.id;
    await Hero.findByIdAndRemove(heroId);

    return res.json({
      msg: 'Hero successfully deleted!'
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
