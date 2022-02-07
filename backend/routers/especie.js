const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _especie = require("../controllers/especie");

/////////especie

  // Create a new Tutorial
  router.post("/", _especie.create);

  // Retrieve all _especie
  router.get("/", _especie.findAll);

  // Retrieve all published _especie
  router.get("/search", _especie.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _especie.findOne);

  // Update a Tutorial with id
  router.put("/:id", _especie.update);

  // Delete a Tutorial with id
  router.delete("/:id", _especie.delete);

  // Delete all _especie
  router.delete("/", _especie.deleteAll);


  app.use('/api/especie', router);

}