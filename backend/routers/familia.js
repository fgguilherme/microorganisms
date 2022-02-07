const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _familia = require("../controllers/familia");

/////////familia

  // Create a new Tutorial
  router.post("/", _familia.create);

  // Retrieve all _familia
  router.get("/", _familia.findAll);

  // Retrieve all published _familia
  router.get("/search", _familia.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _familia.findOne);

  // Update a Tutorial with id
  router.put("/:id", _familia.update);

  // Delete a Tutorial with id
  router.delete("/:id", _familia.delete);

  // Delete all _familia
  router.delete("/", _familia.deleteAll);


  app.use('/api/familia', router);

}