const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _ordem = require("../controllers/ordem");

///////// Ordem

  // Create a new ordem
  router.post("/", _ordem.create);

  // Retrieve all ordem
  router.get("/", _ordem.findAll);

  // Retrieve all published ordem
  router.get("/search", _ordem.findAllParam);

  // Retrieve a single ordem with id
  router.get("/:id", _ordem.findOne);

  // Update a ordem with id
  router.put("/:id", _ordem.update);

  // Delete a ordem with id
  router.delete("/:id", _ordem.delete);

  // Delete all ordem
  router.delete("/", _ordem.deleteAll);


  app.use('/ordem', router);

}