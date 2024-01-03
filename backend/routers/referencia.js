const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _referencia = require("../controllers/referencia");

/////////referencia

  // Create a new referencia
  router.post("/", _referencia.create);

  // Retrieve all _referencia
  router.get("/", _referencia.findAll);

  // Retrieve all published _referencia
  router.get("/search", _referencia.findAllParam);

  // Retrieve a single referencia with id
  router.get("/:id", _referencia.findOne);

  // Update a referencia with id
  router.put("/:id", _referencia.update);

  // Delete a referencia with id
  router.delete("/:id", _referencia.delete);

  // Delete all _referencia
  router.delete("/", _referencia.deleteAll);


  app.use('/referencia', router);

}