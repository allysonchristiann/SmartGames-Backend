const express = require("express");

const gameController = require("./controllers/game");
const storeController = require("./controllers/store");
const platformController = require("./controllers/platform");

const routes = express.Router();

routes.get("/game", gameController.index);
routes.get("/game/:id", gameController.find);
routes.put("/game/:id", gameController.update);

routes.get("/store", storeController.index);
routes.get("/store/:id", storeController.find);

routes.get("/platform", platformController.index);

module.exports = routes;
