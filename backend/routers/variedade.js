const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _variedade = require("../controllers/variedade");

/////////variedade

  // Create a new Tutorial
  router.post("/", _variedade.create);

  // Retrieve all _variedade
  router.get("/", _variedade.findAll);

  // Retrieve all published _variedade
  router.get("/search", _variedade.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _variedade.findOne);

  // Update a Tutorial with id
  router.put("/:id", _variedade.update);

  // Delete a Tutorial with id
  router.delete("/:id", _variedade.delete);

  // Delete all _variedade
  router.delete("/", _variedade.deleteAll);


  app.use('/api/variedade', router);

}