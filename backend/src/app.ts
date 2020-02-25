import express, { Request, Response } from 'express';

import { connectDb } from './config/db';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Working!');
});

connectDb();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}...`));
