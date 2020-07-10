import express, { Request, Response } from 'express';
import cors from 'cors';

import { errorHandler } from './middleware/error-handler';
import { HTTPError } from './errors/http-error';
import { phonesRouter } from './routes/phones';

const app = express();

// baenans@: for dev convenience only
app.use('/f', express.static(`${__dirname}/files/`));
// Allowed hosts should be restricted in production environment
app.use(cors());

app.use('/api/phones', phonesRouter);
app.all('*', () => {
  throw new HTTPError('Not found', 404);
});

app.use(errorHandler);

export { app };
