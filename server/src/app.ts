import express from 'express';

const app = express();

// baenans@: for dev convenience only
app.use('/f', express.static(`${__dirname}/files/`));

export { app };
