const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _especie = require("../controllers/especie");

/////////especie

  // Create a new especie
  router.post("/", _especie.create);

  // Retrieve all _especie
  router.get("/", _especie.findAll);

  // Retrieve all published _especie
  router.get("/search", _especie.findAllParam);

  // Retrieve a single especie with id
  router.get("/:id", _especie.findOne);

  // Update a especie with id
  router.put("/:id", _especie.update);

  // Delete a especie with id
  router.delete("/:id", _especie.delete);

  // Delete all _especie
  router.delete("/", _especie.deleteAll);


  app.use('/especie', router);

}