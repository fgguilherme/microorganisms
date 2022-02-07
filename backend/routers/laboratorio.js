const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _laboratorio = require("../controllers/laboratorio");

/////////laboratorio

  // Create a new Tutorial
  router.post("/", _laboratorio.create);

  // Retrieve all _laboratorio
  router.get("/", _laboratorio.findAll);

  // Retrieve all published _laboratorio
  router.get("/search", _laboratorio.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _laboratorio.findOne);

  // Update a Tutorial with id
  router.put("/:id", _laboratorio.update);

  // Delete a Tutorial with id
  router.delete("/:id", _laboratorio.delete);

  // Delete all _laboratorio
  router.delete("/", _laboratorio.deleteAll);


  app.use('/api/lab', router);

}