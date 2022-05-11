// Controllers
import * as express from 'express';
import * as cors from 'cors';
import { Routes } from './routes';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Routes
app.use(new Routes().app);

export default app


