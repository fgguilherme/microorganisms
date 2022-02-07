const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _habitat_veg = require("../controllers/habitat_veg");

  // Create a new Tutorial
  router.post("/", _habitat_veg.create);

  // Retrieve all _habitat_veg
  router.get("/", _habitat_veg.findAll);

  // Retrieve all published _habitat_veg
  router.get("/search", _habitat_veg.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _habitat_veg.findOne);

  // Update a Tutorial with id
  router.put("/:id", _habitat_veg.update);

  // Delete a Tutorial with id
  router.delete("/:id", _habitat_veg.delete);

  // Delete all _habitat_veg
  router.delete("/", _habitat_veg.deleteAll);


  app.use('/api/habitat_veg', router);

}