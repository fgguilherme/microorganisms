const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _cor = require("../controllers/cor");

/////////cor

  // Create a new cor
  router.post("/", _cor.create);

  // Retrieve all _cor
  router.get("/", _cor.findAll);

  // Retrieve all published _cor
  router.get("/search", _cor.findAllParam);

  // Retrieve a single cor with id
  router.get("/:id", _cor.findOne);

  // Update a cor with id
  router.put("/:id", _cor.update);

  // Delete a cor with id
  router.delete("/:id", _cor.delete);

  // Delete all _cor
  router.delete("/", _cor.deleteAll);


  app.use('/api/cor', router);

}