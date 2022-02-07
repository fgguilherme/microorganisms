const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _cor = require("../controllers/cor");

/////////cor

  // Create a new Tutorial
  router.post("/", _cor.create);

  // Retrieve all _cor
  router.get("/", _cor.findAll);

  // Retrieve all published _cor
  router.get("/search", _cor.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _cor.findOne);

  // Update a Tutorial with id
  router.put("/:id", _cor.update);

  // Delete a Tutorial with id
  router.delete("/:id", _cor.delete);

  // Delete all _cor
  router.delete("/", _cor.deleteAll);


  app.use('/api/cor', router);

}