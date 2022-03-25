const express = require('express');
const userModel = require('../models/users');
const capitalizeUserName = require('../middlewares/services/capitalize')
const userToken = require('../utils/jwt');
const verifyToken = require('../middlewares/custom/verifyHash')

const router = express.Router()

router.post('/', (req, res) => {

     let findUser = capitalizeUserName(req.body.username);

     userModel.findOne({
          username: findUser
     }, async (err, data) => {
          try {

               if (err) {
                    res.status(403).json(err)
                    return console.log(err)
               }

               // id the user is not logged in,
               if (!data) {
                    console.log(`user ${findUser} has no account`)
                    return res.status(401).json({
                         msg: `user ${findUser} has no account.`
                    })
               }

               // if data, compare password,
               let result = await verifyToken(req.body.password, data.password, findUser);
               console.log(data.password)

               if (!result) {
                    res.status(401).json({
                         msg: 'unauthorized user. incorrect password'
                    })

                    return console.log('unauthorized user. incorrect password')
               }

               let token = userToken(req.body);
               console.log(token)

               return res.status(200).json({
                    msg: "log in successful",
                    token
               })

          } catch (err) {
               res.status(403).json(err);
               return console.log(err)
          }
     })
})


module.exports = router;