const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _repique = require("../controllers/repique");

/////////repique

  // Create a new repique
  router.post("/", _repique.create);

  // Retrieve all _repique
  router.get("/", _repique.findAll);

  // Retrieve all _repique
  router.get("/parents", _repique.findAllParents);

  // Retrieve all published _repique
  router.get("/search", _repique.findAllParam);

  // Retrieve a single repique with id
  router.get("/:id", _repique.findOne);

  // Update a repique with id
  router.put("/:id", _repique.update);

  // Delete a repique with id
  router.delete("/:id", _repique.delete);

  // Delete all _repique
  router.delete("/", _repique.deleteAll);


  app.use('/api/repique', router);

}