const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _familia = require("../controllers/familia");

///////// familia

  // Create a new familia
  router.post("/", _familia.create);

  // Retrieve all familia
  router.get("/", _familia.findAll);

  // Retrieve all published familia
  router.get("/search", _familia.findAllParam);

  // Retrieve a single familia with id
  router.get("/:id", _familia.findOne);

  // Update a familia with id
  router.put("/:id", _familia.update);

  // Delete a familia with id
  router.delete("/:id", _familia.delete);

  // Delete all familia
  router.delete("/", _familia.deleteAll);


  app.use('/familia', router);

}