const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _substrato = require("../controllers/substrato");

/////////substrato

  // Create a new Tutorial
  router.post("/", _substrato.create);

  // Retrieve all _substrato
  router.get("/", _substrato.findAll);

  // Retrieve all published _substrato
  router.get("/search", _substrato.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _substrato.findOne);

  // Update a Tutorial with id
  router.put("/:id", _substrato.update);

  // Delete a Tutorial with id
  router.delete("/:id", _substrato.delete);

  // Delete all _substrato
  router.delete("/", _substrato.deleteAll);


  app.use('/api/substrato', router);

}