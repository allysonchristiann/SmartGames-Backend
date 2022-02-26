"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stores",
      [
        {
          place: "Tamboré",
          latitude: -23.506093876913297,
          longitude: -46.83500068403224,
        },
        {
          place: "União",
          latitude: -23.54068495951624,
          longitude: -46.76593946622028,
        },
        {
          place: "Iguatemi",
          latitude: -23.50477029611507,
          longitude: -46.8487484401651,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stores", null);
  },
};
