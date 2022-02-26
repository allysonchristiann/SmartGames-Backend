const Platform = require("../models/Platform");

module.exports = {
  async index(req, res) {
    try {
      const platform = await Platform.findAll({
        attributes: ["id", "name"],
      });

      res.status(200).send(platform);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
