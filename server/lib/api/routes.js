"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express = require("express");
const api_controller_1 = require("./controllers/api.controller");
class Routes {
    constructor(app = express.Router()) {
        this.app = app;
        //Routes
        app.use('/api', new api_controller_1.ApiController().app);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map