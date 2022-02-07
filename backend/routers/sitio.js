const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _sitio = require("../controllers/sitio");

  // Create a new Tutorial
  router.post("/", _sitio.create);

  // Retrieve all _sitio
  router.get("/", _sitio.findAll);

  // Retrieve all published _sitio
  router.get("/search", _sitio.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _sitio.findOne);

  // Update a Tutorial with id
  router.put("/:id", _sitio.update);

  // Delete a Tutorial with id
  router.delete("/:id", _sitio.delete);

  // Delete all _sitio
  router.delete("/", _sitio.deleteAll);


  app.use('/api/sitio', router);

}