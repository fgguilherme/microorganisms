const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _prateleira = require("../controllers/prateleira");

/////////prateleira

  // Create a new prateleira
  router.post("/", _prateleira.create);

  // Retrieve all _prateleira
  router.get("/", _prateleira.findAll);

  // Retrieve all published _prateleira
  router.get("/search", _prateleira.findAllParam);

  // Retrieve a single prateleira with id
  router.get("/:id", _prateleira.findOne);

  // Update a prateleira with id
  router.put("/:id", _prateleira.update);

  // Delete a prateleira with id
  router.delete("/:id", _prateleira.delete);

  // Delete all _prateleira
  router.delete("/", _prateleira.deleteAll);


  app.use('/prateleira', router);

}