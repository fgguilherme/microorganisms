const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _repique_has_repique = require("../controllers/repique_has_repique");

  // Create a new repique_has_repique
  router.post("/", _repique_has_repique.create);

  // Retrieve all _repique_has_repique
  router.get("/", _repique_has_repique.findAll);

  // Retrieve all published _repique_has_repique
  router.get("/search", _repique_has_repique.findAllParam);

  // Retrieve a single repique_has_repique with id
  router.get("/:id", _repique_has_repique.findOne);

  // Update a repique_has_repique with id
  router.put("/:id", _repique_has_repique.update);

  // Delete a repique_has_repique with id
  router.delete("/:id", _repique_has_repique.delete);

  // Delete all _repique_has_repique
  router.delete("/", _repique_has_repique.deleteAll);


  app.use('/api/repique_has_repique', router);

}