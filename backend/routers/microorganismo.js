const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _microorganismo = require("../controllers/microorganismo");

/////////microorganismo

  // Create a new microorganismo
  router.post("/", _microorganismo.create);

  // Retrieve all _microorganismo
  router.get("/", _microorganismo.findAll);

  // Retrieve all published _microorganismo
  router.get("/search", _microorganismo.findAllParam);

  // Retrieve a single microorganismo with id
  router.get("/:id", _microorganismo.findOne);

  // Update a microorganismo with id
  router.put("/:id", _microorganismo.update);

  // Delete a microorganismo with id
  router.delete("/:id", _microorganismo.delete);

  // Delete all _microorganismo
  router.delete("/", _microorganismo.deleteAll);


  app.use('/api/microorganismo', router);

}