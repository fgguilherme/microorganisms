const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _substrato = require("../controllers/substrato");

/////////substrato

  // Create a new substrato
  router.post("/", _substrato.create);

  // Retrieve all _substrato
  router.get("/", _substrato.findAll);

  // Retrieve all published _substrato
  router.get("/search", _substrato.findAllParam);

  // Retrieve a single substrato with id
  router.get("/:id", _substrato.findOne);

  // Update a substrato with id
  router.put("/:id", _substrato.update);

  // Delete a substrato with id
  router.delete("/:id", _substrato.delete);

  // Delete all _substrato
  router.delete("/", _substrato.deleteAll);


  app.use('/substrato', router);

}