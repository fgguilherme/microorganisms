const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _anexos = require("../controllers/anexos");

  // Create a new anexos
  router.post("/", _anexos.create);

  // Retrieve all _anexos
  router.get("/", _anexos.findAll);

  // Retrieve all published _anexos
  router.get("/search", _anexos.findAllParam);

  // Retrieve a single anexos with id
  router.get("/:id", _anexos.findOne);

  // Update a anexos with id
  router.put("/:id", _anexos.update);

  // Delete a anexos with id
  router.delete("/:id", _anexos.delete);

  // Delete all _anexos
  router.delete("/", _anexos.deleteAll);


  app.use('/anexos', router);

}