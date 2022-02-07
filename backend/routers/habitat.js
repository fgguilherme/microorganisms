const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _habitat = require("../controllers/habitat");

  // Create a new Tutorial
  router.post("/", _habitat.create);

  // Retrieve all _habitat
  router.get("/", _habitat.findAll);

  // Retrieve all published _habitat
  router.get("/search", _habitat.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _habitat.findOne);

  // Update a Tutorial with id
  router.put("/:id", _habitat.update);

  // Delete a Tutorial with id
  router.delete("/:id", _habitat.delete);

  // Delete all _habitat
  router.delete("/", _habitat.deleteAll);


  app.use('/api/habitat', router);

}