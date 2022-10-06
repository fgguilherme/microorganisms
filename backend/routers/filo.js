const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _filo = require("../controllers/filo");

/////////filo

  // Create a new Tutorial
  router.post("/", _filo.create);

  // Retrieve all _filo
  router.get("/", _filo.findAll);

  // Retrieve all published _filo
  router.get("/search", _filo.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _filo.findOne);

  // Update a Tutorial with id
  router.put("/:id", _filo.update);

  // Delete a Tutorial with id
  router.delete("/:id", _filo.delete);

  // Delete all _filo
  router.delete("/", _filo.deleteAll);


  app.use('/api/filo', router);

}