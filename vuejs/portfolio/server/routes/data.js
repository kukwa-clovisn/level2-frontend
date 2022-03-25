const express = require('express');
const userModel = require('../models/users');
const capitalizeUserName = require('../middlewares/services/capitalize');

const router = express.Router();

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


module.exports = router;