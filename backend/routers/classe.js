const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _classe = require("../controllers/classe");

/////////classe

  // Create a new Tutorial
  router.post("/", _classe.create);

  // Retrieve all _classe
  router.get("/", _classe.findAll);

  // Retrieve all published _classe
  router.get("/search", _classe.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _classe.findOne);

  // Update a Tutorial with id
  router.put("/:id", _classe.update);

  // Delete a Tutorial with id
  router.delete("/:id", _classe.delete);

  // Delete all _classe
  router.delete("/", _classe.deleteAll);


  app.use('/api/classe', router);

}