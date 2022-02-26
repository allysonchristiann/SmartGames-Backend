const Sequelize = require("sequelize");
const dbconfig = require("../config/database");

const Game = require("../models/Game");
const Store = require("../models/Store");
const Platform = require("../models/Platform");

const connection = new Sequelize(dbconfig);

Game.init(connection);
Store.init(connection);
Platform.init(connection);

Game.associate(connection.models);
Store.associate(connection.models);
Platform.associate(connection.models);