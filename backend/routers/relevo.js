const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _relevo = require("../controllers/relevo");

/////////relevo

  // Create a new relevo
  router.post("/", _relevo.create);

  // Retrieve all _relevo
  router.get("/", _relevo.findAll);

  // Retrieve all published _relevo
  router.get("/search", _relevo.findAllParam);

  // Retrieve a single relevo with id
  router.get("/:id", _relevo.findOne);

  // Update a relevo with id
  router.put("/:id", _relevo.update);

  // Delete a relevo with id
  router.delete("/:id", _relevo.delete);

  // Delete all _relevo
  router.delete("/", _relevo.deleteAll);


  app.use('/api/relevo', router);

}