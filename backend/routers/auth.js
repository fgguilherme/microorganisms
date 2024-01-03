var router = require("express").Router();
module.exports = app => {
    var _auth = require("../controllers/auth");
  router.post("/login", _auth.login);
  router.post("/signup", _auth.signup);

  app.use('/', router);

}