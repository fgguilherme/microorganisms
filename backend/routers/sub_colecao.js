const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _sub_colecao = require("../controllers/sub_colecao");

/////////sub_colecao

  // Create a new sub_colecao
  router.post("/", _sub_colecao.create);

  // Retrieve all _sub_colecao
  router.get("/", _sub_colecao.findAll);

  // Retrieve all published _sub_colecao
  router.get("/search", _sub_colecao.findAllParam);

  // Retrieve a single sub_colecao with id
  router.get("/:id", _sub_colecao.findOne);

  // Update a sub_colecao with id
  router.put("/:id", _sub_colecao.update);

  // Delete a sub_colecao with id
  router.delete("/:id", _sub_colecao.delete);

  // Delete all _sub_colecao
  router.delete("/", _sub_colecao.deleteAll);


  app.use('/api/sub_colecao', router);

}