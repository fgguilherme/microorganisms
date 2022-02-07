const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _microorganismo = require("../controllers/microorganismo");

/////////microorganismo

  // Create a new Tutorial
  router.post("/", _microorganismo.create);

  // Retrieve all _microorganismo
  router.get("/", _microorganismo.findAll);

  // Retrieve all published _microorganismo
  router.get("/search", _microorganismo.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _microorganismo.findOne);

  // Update a Tutorial with id
  router.put("/:id", _microorganismo.update);

  // Delete a Tutorial with id
  router.delete("/:id", _microorganismo.delete);

  // Delete all _microorganismo
  router.delete("/", _microorganismo.deleteAll);


  app.use('/api/micro', router);

}