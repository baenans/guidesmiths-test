import express from 'express';
import cors from 'cors';

import { phonesRouter } from './routes/phones';

const app = express();

// baenans@: for dev convenience only
app.use('/f', express.static(`${__dirname}/files/`));
// Allowed hosts should be restricted in production environment
app.use(cors());

app.use('/api/phones', phonesRouter);

export { app };
