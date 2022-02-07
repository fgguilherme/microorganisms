const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _pigmento = require("../controllers/pigmento");

/////////pigmento

  // Create a new Tutorial
  router.post("/", _pigmento.create);

  // Retrieve all _pigmento
  router.get("/", _pigmento.findAll);

  // Retrieve all published _pigmento
  router.get("/search", _pigmento.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _pigmento.findOne);

  // Update a Tutorial with id
  router.put("/:id", _pigmento.update);

  // Delete a Tutorial with id
  router.delete("/:id", _pigmento.delete);

  // Delete all _pigmento
  router.delete("/", _pigmento.deleteAll);


  app.use('/api/pigmento', router);

}