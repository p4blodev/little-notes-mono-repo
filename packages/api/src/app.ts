import express, { Express } from 'express';
import cors from 'cors';
import { ROUTES, usersRouter, loginRouter, notesRouter } from './controllers';
import { errorHandler } from './utils/middleware';
import { connectDB } from './db';
import path from 'path';

connectDB();
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../app/build')));
app.use(ROUTES.LOGIN, loginRouter);
app.use(ROUTES.NOTES, notesRouter);
app.use(ROUTES.USERS, usersRouter);

// app.use(unknownEndpoint);
app.use(errorHandler);

export default app;
