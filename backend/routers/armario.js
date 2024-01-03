const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _armario = require("../controllers/armario");

/////////armario

  // Create a new armario
  router.post("/", _armario.create);

  // Retrieve all _armario
  router.get("/", _armario.findAll);

  // Retrieve all published _armario
  router.get("/search", _armario.findAllParam);

  // Retrieve a single armario with id
  router.get("/:id", _armario.findOne);

  // Update a armario with id
  router.put("/:id", _armario.update);

  // Delete a armario with id
  router.delete("/:id", _armario.delete);

  // Delete all _armario
  router.delete("/", _armario.deleteAll);


  app.use('/armario', router);

}