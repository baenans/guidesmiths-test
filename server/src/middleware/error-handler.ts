import express, { Request, Response, NextFunction } from 'express';
import { HTTPError } from '../errors/http-error';

const errorHandler = (
  err: HTTPError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof HTTPError) {
    res.status(err.statusCode).send({ message: err.message });
  }
  console.error(err);
  res.status(400).send({ message: 'Something went wrong' });
};

export { errorHandler };
