const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../Database/users');
const verifyToken = require('../middlewares/verifyHash');
const capitalizeUserName = require('../middlewares/services/capitalize')


const router = express.Router()

router.get('/data/name/:username', (req, res) => {
     filterName = capitalizeUserName(req.params.username)
     console.log(filterName)
     userModel.findOne({
          username: filterName
     }, (err, data) => {
          if (err) {
               res.status(404).json(err)
               return console.log(err)
          }
          if (!data) {
               res.status(200).json({
                    msg: 'no data found',
                    data: []
               })
               return console.log('no data found')
          }

          res.status(200).json(data);
          return console.log(data);
     })
})

router.route('/data/:id').get((req, res) => {

     userModel.findOne({
          _id: req.params.id
     }, (err, data) => {
          if (err) {
               res.status(404).json(err)
               return console.log(err)
          }
          if (!data) {
               res.status(200).json({
                    msg: 'no data found',
                    data: []
               })
               return console.log('no data found')
          }

          res.status(200).json(data);
          return console.log(data);
     })

}).post(async (req, res) => {
     console.log(req.body)
     console.log(req.params.id)
     todoItems = req.body.data;
     console.log(todoItems)
     await userModel.findByIdAndUpdate(req.params.id, {
          todos: todoItems
     }, (err, data) => {
          if (err) {
               res.status(404).json(err)
               return console.log(err)
          }

          res.status(200).json(data)
          return console.log("updated user: ", data);
     })
})


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

               let logInUser = {
                    id: data.id,
                    username: data.username,
                    email: data.email,
                    profileImg: data.profileImg,
                    userImage: data.userImage,
                    todos: data.todos,
                    BMI: data.BMI
               }
               return res.status(200).json({
                    msg: "log in successful",
                    data: logInUser
               })
          } catch (err) {
               res.status(403).json(err);
               return console.log(err)
          }
     })
})


module.exports = router;