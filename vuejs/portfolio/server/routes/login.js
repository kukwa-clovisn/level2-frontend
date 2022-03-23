const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../Database/users');
const verifyToken = require('../middlewares/verifyHash');
const capitalizeUserName = require('../middlewares/services/capitalize')


const router = express.Router()

router.post('/', (req, res) => {

     let logName = capitalizeUserName(req.body.username)
     userModel.findOne({
          username: logName
     }, async (err, data) => {
          try {

               if (err) {
                    res.status(403).json(err)
                    return console.log(err)
               }
               // id the user is not logged in,
               if (!data) {
                    console.log(`user ${logName} has no account`)
                    return res.status(401).json({
                         msg: `user ${logName} has no account.`
                    })
               }

               // if data, compare password,
               let result = await verifyToken(req.body.password, data.password, logName);
               console.log(data.password)

               if (!result) {
                    res.status(401).json({
                         msg: 'unauthorized user. incorrect password'
                    })

                    return console.log('unauthorized user. incorrect password')
               }


               return res.status(200).json({
                    msg: "log in successful",
                    data
               })
          } catch (err) {
               res.status(403).json(err);
               return console.log(err)
          }
     })
})


module.exports = router;