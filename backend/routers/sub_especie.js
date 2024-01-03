const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _sub_especie = require("../controllers/sub_especie");

/////////sub_especie

  // Create a new sub_especie
  router.post("/", _sub_especie.create);

  // Retrieve all _sub_especie
  router.get("/", _sub_especie.findAll);

  // Retrieve all published _sub_especie
  router.get("/search", _sub_especie.findAllParam);

  // Retrieve a single sub_especie with id
  router.get("/:id", _sub_especie.findOne);

  // Update a sub_especie with id
  router.put("/:id", _sub_especie.update);

  // Delete a sub_especie with id
  router.delete("/:id", _sub_especie.delete);

  // Delete all _sub_especie
  router.delete("/", _sub_especie.deleteAll);


  app.use('/sub_especie', router);

}