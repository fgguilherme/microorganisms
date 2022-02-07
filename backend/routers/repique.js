const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _repique = require("../controllers/repique");

/////////repique

  // Create a new Tutorial
  router.post("/", _repique.create);

  // Retrieve all _repique
  router.get("/", _repique.findAll);

  // Retrieve all published _repique
  router.get("/search", _repique.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _repique.findOne);

  // Update a Tutorial with id
  router.put("/:id", _repique.update);

  // Delete a Tutorial with id
  router.delete("/:id", _repique.delete);

  // Delete all _repique
  router.delete("/", _repique.deleteAll);


  app.use('/api/repique', router);

}