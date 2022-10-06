const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _variedade = require("../controllers/variedade");

/////////variedade

  // Create a new variedade
  router.post("/", _variedade.create);

  // Retrieve all _variedade
  router.get("/", _variedade.findAll);

  // Retrieve all published _variedade
  router.get("/search", _variedade.findAllParam);

  // Retrieve a single variedade with id
  router.get("/:id", _variedade.findOne);

  // Update a variedade with id
  router.put("/:id", _variedade.update);

  // Delete a variedade with id
  router.delete("/:id", _variedade.delete);

  // Delete all _variedade
  router.delete("/", _variedade.deleteAll);


  app.use('/api/variedade', router);

}