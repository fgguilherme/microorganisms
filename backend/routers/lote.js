const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _lote = require("../controllers/lote");

/////////lote

  // Create a new Tutorial
  router.post("/", _lote.create);

  // Retrieve all _lote
  router.get("/", _lote.findAll);

  // Retrieve all published _lote
  router.get("/search", _lote.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _lote.findOne);

  // Update a Tutorial with id
  router.put("/:id", _lote.update);

  // Delete a Tutorial with id
  router.delete("/:id", _lote.delete);

  // Delete all _lote
  router.delete("/", _lote.deleteAll);


  app.use('/api/lote', router);

}