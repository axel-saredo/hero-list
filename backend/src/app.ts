import express, { Request, Response } from 'express';
import { json } from 'body-parser';

import { connectDb } from './config/db';
import heroRoute from './routes/heroes';

const app = express();

app.use(json());

app.use('/heroes', heroRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Working!');
});

connectDb();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}...`));
