const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _habitat = require("../controllers/habitat");

  // Create a new habitat
  router.post("/", _habitat.create);

  // Retrieve all _habitat
  router.get("/", _habitat.findAll);

  // Retrieve all published _habitat
  router.get("/search", _habitat.findAllParam);

  // Retrieve a single habitat with id
  router.get("/:id", _habitat.findOne);

  // Update a habitat with id
  router.put("/:id", _habitat.update);

  // Delete a habitat with id
  router.delete("/:id", _habitat.delete);

  // Delete all _habitat
  router.delete("/", _habitat.deleteAll);


  app.use('/api/habitat', router);

}