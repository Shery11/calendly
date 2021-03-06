"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Controllers
const express = require("express");
const cors = require("cors");
const routes_1 = require("./routes");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
// Routes
app.use(new routes_1.Routes().app);
exports.default = app;
//# sourceMappingURL=api.js.map