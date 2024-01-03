const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _sitio = require("../controllers/sitio");

  // Create a new sitio
  router.post("/", _sitio.create);

  // Retrieve all _sitio
  router.get("/", _sitio.findAll);

  // Retrieve all published _sitio
  router.get("/search", _sitio.findAllParam);

  // Retrieve a single sitio with id
  router.get("/:id", _sitio.findOne);

  // Update a sitio with id
  router.put("/:id", _sitio.update);

  // Delete a sitio with id
  router.delete("/:id", _sitio.delete);

  // Delete all _sitio
  router.delete("/", _sitio.deleteAll);


  app.use('/sitio', router);

}