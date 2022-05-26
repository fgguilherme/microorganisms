const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _genero = require("../controllers/genero");

///////// genero

  // Create a new gereno
  router.post("/", _genero.create);

  // Retrieve all gereno
  router.get("/", _genero.findAll);

  // Retrieve all published gereno
  router.get("/search", _genero.findAllParam);

  // Retrieve a single gereno with id
  router.get("/:id", _genero.findOne);

  // Update a gereno with id
  router.put("/:id", _genero.update);

  // Delete a gereno with id
  router.delete("/:id", _genero.delete);

  // Delete all gereno
  router.delete("/", _genero.deleteAll);


  app.use('/genero', router);

}