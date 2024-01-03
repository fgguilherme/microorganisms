const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _posicao = require("../controllers/posicao");

/////////posicao

  // Create a new posicao
  router.post("/", _posicao.create);

  // Retrieve all _posicao
  router.get("/", _posicao.findAll);

  // Retrieve all published _posicao
  router.get("/search", _posicao.findAllParam);

  // Retrieve a single posicao with id
  router.get("/:id", _posicao.findOne);

  // Update a posicao with id
  router.put("/:id", _posicao.update);

  // Delete a posicao with id
  router.delete("/:id", _posicao.delete);

  // Delete all _posicao
  router.delete("/", _posicao.deleteAll);


  app.use('/posicao', router);

}