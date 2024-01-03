const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _reino = require("../controllers/reino");

/////////reino

  // Create a new Tutorial
  router.post("/", _reino.create);

  // Retrieve all _reino
  router.get("/", _reino.findAll);

  // Retrieve all published _reino
  router.get("/search", _reino.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _reino.findOne);

  // Update a Tutorial with id
  router.put("/:id", _reino.update);

  // Delete a Tutorial with id
  router.delete("/:id", _reino.delete);

  // Delete all _reino
  router.delete("/", _reino.deleteAll);


  app.use('/reino', router);

}