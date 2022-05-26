const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _hospedeiro = require("../controllers/hospedeiro");

  // Create a new hospedeiro
  router.post("/", _hospedeiro.create);

  // Retrieve all _hospedeiro
  router.get("/", _hospedeiro.findAll);

  // Retrieve all published _hospedeiro
  router.get("/search", _hospedeiro.findAllParam);

  // Retrieve a single hospedeiro with id
  router.get("/:id", _hospedeiro.findOne);

  // Update a hospedeiro with id
  router.put("/:id", _hospedeiro.update);

  // Delete a hospedeiro with id
  router.delete("/:id", _hospedeiro.delete);

  // Delete all _hospedeiro
  router.delete("/", _hospedeiro.deleteAll);


  app.use('/hospedeiro', router);

}