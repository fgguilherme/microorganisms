var router = require("express").Router();
module.exports = app => {
    var _auth = require("../controllers/auth");
  router.post("/api/login", _auth.login);
  router.post("/api/signup", _auth.signup);

  app.use('/', router);

}