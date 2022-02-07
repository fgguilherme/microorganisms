const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _ordem = require("../controllers/ordem");

/////////ordem

  // Create a new Tutorial
  router.post("/", _ordem.create);

  // Retrieve all _ordem
  router.get("/", _ordem.findAll);

  // Retrieve all published _ordem
  router.get("/search", _ordem.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _ordem.findOne);

  // Update a Tutorial with id
  router.put("/:id", _ordem.update);

  // Delete a Tutorial with id
  router.delete("/:id", _ordem.delete);

  // Delete all _ordem
  router.delete("/", _ordem.deleteAll);


  app.use('/api/ordem', router);

}