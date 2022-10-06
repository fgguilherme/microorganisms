const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _microorganismo_has_imagem_macro = require("../controllers/microorganismo_has_imagem_macro");

  // Create a new microorganismo_has_imagem_macro
  router.post("/", _microorganismo_has_imagem_macro.create);

  // Retrieve all _microorganismo_has_imagem_macro
  router.get("/", _microorganismo_has_imagem_macro.findAll);

  // Retrieve all published _microorganismo_has_imagem_macro
  router.get("/search", _microorganismo_has_imagem_macro.findAllParam);

  // Retrieve a single microorganismo_has_imagem_macro with id
  router.get("/:id", _microorganismo_has_imagem_macro.findOne);

  // Update a microorganismo_has_imagem_macro with id
  router.put("/:id", _microorganismo_has_imagem_macro.update);

  // Delete a microorganismo_has_imagem_macro with id
  router.delete("/:id", _microorganismo_has_imagem_macro.delete);

  // Delete all _microorganismo_has_imagem_macro
  router.delete("/", _microorganismo_has_imagem_macro.deleteAll);


  app.use('/api/imagem_macro', router);

}