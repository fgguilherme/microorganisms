const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _referencia = require("../controllers/referencia");

/////////referencia

  // Create a new Tutorial
  router.post("/", _referencia.create);

  // Retrieve all _referencia
  router.get("/", _referencia.findAll);

  // Retrieve all published _referencia
  router.get("/search", _referencia.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _referencia.findOne);

  // Update a Tutorial with id
  router.put("/:id", _referencia.update);

  // Delete a Tutorial with id
  router.delete("/:id", _referencia.delete);

  // Delete all _referencia
  router.delete("/", _referencia.deleteAll);


  app.use('/api/referencia', router);

}