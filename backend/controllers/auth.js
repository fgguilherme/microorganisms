'use strict';
const User = require('./users');
const db = require("../models");
const UserModel = db.models.users;
const Op = db.Sequelize.Op;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
  User.create(req, res, next);
};

exports.login = (req, res) => {
  // console.log(req.body)
  UserModel.findAll({ where: {email:req.body.email} })
  .then(data => {
    // res.send(data);
    if (data.length == 0) {
      return res.status(401).json({
        error: 'User not found!'
      });
    } else if(bcrypt.compareSync(req.body.passwd,data[0].passwd)){
      const token = jwt.sign(
        { userId: data[0].iduser },
        'RANDOM_TOKEN_SECRET');
      res.status(200).json({
        iduser: data[0].iduser,
        email: data[0].email,
        isMaster: data[0].isMaster,
        token: token
      });
    }else{
      // console.log(user)
      return res.status(401).json({
        error: 'Incorrect password!'
      });
    }
  })
}

exports.renew = (req, res) => {
  console.log("CALLED RENEW")
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      const token = jwt.sign(
        { userId: req.body.userId },
        'RANDOM_TOKEN_SECRET');
      res.status(200).json({
        userId: req.body.userId,
        token: token
      });
    }
  } catch {
    res.status(403).json({
      error: new Error('Unauthorized')
    });
  }
}

exports.getUserIdByToken = (req) => {
  let userId
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    userId = decodedToken.userId;
  } catch {
    
  }
  return userId;
}
