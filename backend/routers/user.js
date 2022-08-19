const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _user = require("../controllers/users");

/////////user

  // Create a new user
  router.post("/", _user.create);

  // Retrieve all _user
  router.get("/", _user.findAll);

  // Retrieve all published _user
  router.get("/search", _user.findAllParam);

  // Retrieve a single cor with id
  router.get("/:id", _user.findOne);

  // Update a cor with id
  router.put("/:id", _user.update);

  // Delete a cor with id
  router.delete("/:id", _user.delete);

  // Delete all _user
  router.delete("/", _user.deleteAll);


  app.use('/user', router);

}