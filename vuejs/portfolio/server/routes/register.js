const express = require('express');
const {
     ResultWithContext
} = require('express-validator/src/chain');
const userModel = require('../Database/users');

const router = express.Router();
router.route('/').get((req, res) => {
     res.json({
          msg: "welcome to the register router."
     })
     userModel.find({}, (err, data) => {
          if (err) return console.log(err);
          console.log(data)
     })
}).post((req, res) => {

     let newUser = req.body.username;
     userModel.findOne({
          "username": newUser
     }, (err, data) => {
          if (err) return console.log(err);
          if (data) {

               console.log(data)
               return res.json({
                    msg: 'user already exists.',
                    data
               })
          } else {
               let data = req.body;

               res.json({
                    msg: 'user successfully logged in',
                    data
               });
               return console.log("user:", data);
          }


     })
})

module.exports = router;