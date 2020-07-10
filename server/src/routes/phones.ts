import express, { Request, Response } from 'express';

const router = express.Router();
const phones = require('../data/phones.json');

router.get('/', (req: Request, res: Response) => {
  res.send(phones);
});

export { router as phonesRouter };
