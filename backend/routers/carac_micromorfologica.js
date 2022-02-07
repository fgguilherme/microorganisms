const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _carac = require("../controllers/carac_micromorfologica");

/////////carac

  // Create a new Tutorial
  router.post("/", _carac.create);

  // Retrieve all _carac
  router.get("/", _carac.findAll);

  // Retrieve all published _carac
  router.get("/search", _carac.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _carac.findOne);

  // Update a Tutorial with id
  router.put("/:id", _carac.update);

  // Delete a Tutorial with id
  router.delete("/:id", _carac.delete);

  // Delete all _carac
  router.delete("/", _carac.deleteAll);


  app.use('/api/caracmicro', router);

}