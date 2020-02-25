import { Router } from 'express';

import {
  addHero,
  getHeroes,
  updateHero,
  deleteHero
} from '../controllers/heroes';

const router = Router();

router.get('/', getHeroes);
router.post('/', addHero);
router.put('/:id', updateHero);
router.delete('/:id', deleteHero);

export default router;
