const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _borda = require("../controllers/borda");

/////////borda

  // Create a new borda
  router.post("/", _borda.create);

  // Retrieve all _borda
  router.get("/", _borda.findAll);

  // Retrieve all published _borda
  router.get("/search", _borda.findAllParam);

  // Retrieve a single borda with id
  router.get("/:id", _borda.findOne);

  // Update a borda with id
  router.put("/:id", _borda.update);

  // Delete a borda with id
  router.delete("/:id", _borda.delete);

  // Delete all _borda
  router.delete("/", _borda.deleteAll);


  app.use('/api/borda', router);

}