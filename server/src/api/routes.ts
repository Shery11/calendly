
import * as express from 'express';
import { ApiController } from './controllers/api.controller';

export class Routes {

    constructor(
        public app = express.Router()
    ) {

        //Routes
        app.use('/api', new ApiController().app);
    }

}