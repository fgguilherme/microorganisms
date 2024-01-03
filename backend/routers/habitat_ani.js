const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _habitat_ani = require("../controllers/habitat_ani");

  // Create a new habitat_ani
  router.post("/", _habitat_ani.create);

  // Retrieve all _habitat_ani
  router.get("/", _habitat_ani.findAll);

  // Retrieve all published _habitat_ani
  router.get("/search", _habitat_ani.findAllParam);

  // Retrieve a single habitat_ani with id
  router.get("/:id", _habitat_ani.findOne);

  // Update a habitat_ani with id
  router.put("/:id", _habitat_ani.update);

  // Delete a habitat_ani with id
  router.delete("/:id", _habitat_ani.delete);

  // Delete all _habitat_ani
  router.delete("/", _habitat_ani.deleteAll);


  app.use('/habitat_ani', router);

}