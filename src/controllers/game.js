const Game = require("../models/Game");

module.exports = {
  async index(req, res) {
    try {
      const game = await Game.findAll({
        attributes: ["id", "name", "description", "price", "image"],
        include: [
          {
            association: "Stores",
            attributes: ["id", "place", "latitude", "longitude"],
            through: { attributes: [] },
          },
          {
            association: "Platforms",
            attributes: ["id", "name"],
            through: { attributes: [] },
          },
        ],
      });
      res.status(200).send(game);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async find(req, res) {
    const gameId = req.params.id;
    try {
      const game = await Game.findByPk(gameId, {
        attributes: ["id", "name", "description", "price", "image"],
        include: [
          {
            association: "Stores",
            attributes: ["id", "place", "latitude", "longitude"],
            through: { attributes: [] },
          },
          {
            association: "Platforms",
            attributes: ["id", "name"],
            through: { attributes: [] },
          },
        ],
      });
      res.status(200).send(game);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  async update(req, res) {
    const gameId = req.params.id;

    try {
      const game = await Game.findByPk(gameId);

      game.discount = 20;

      const discountValue = (game.discount * game.price) / 100;

      game.price = game.price - discountValue;

      game.save();

      res.status(200).send(game);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
