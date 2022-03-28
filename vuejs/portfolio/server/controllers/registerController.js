const userModel = require("../models/users");

// const bcrypt = require("bcrypt");

const hashFunc = require('../middlewares/hash');

const capitalizeUserName = require('../middlewares/capitalize');

const {
     validationResult
} = require('express-validator')


module.exports = {
     post: (req, res) => {
          let checkError = validationResult(req);
          if (!checkError.isEmpty()) {
               let msg = "";
               for (let i = 0; i < checkError.errors.length; i++) {
                    msg += checkError.errors[i].msg;
               }
               console.log(checkError.errors);
               res.status(401).json({
                    msg,
               });
          }

          let newEmail = req.body.email;

          let newUser = capitalizeUserName(req.body.username);

          /**
           * checking if user alredy exist with same name
           */
          userModel.findOne({
                    username: newUser,
               },
               async (err, data) => {
                    try {
                         if (err) {
                              res.status(403).json(err)
                              return console.log(err);
                         }
                         if (data) {

                              return res.json({
                                   msg: ` user ${req.body.username} already has an account.`
                              });
                         }
                         /**
                          * checking if a user already exist with the same email
                          */
                         await userModel.findOne({
                              email: newEmail
                         }, async (err, data) => {
                              try {

                                   if (err) {
                                        res.status(401).json(err)
                                        return console.log(err)
                                   }

                                   if (data) {
                                        console.log(data)
                                        let resp = {
                                             username: data.username,
                                             email: data.email,
                                             userImage: "",
                                             profileImage: "",
                                             todos: [],
                                        }

                                        res.status(401).json({
                                             msg: `user email ${req.body.email} already has an account.`,
                                             data: resp
                                        })
                                        return console.log(`email ${req.body.email} already has an account.`)
                                   }

                                   // capitalizing the username
                                   let registeredName = capitalizeUserName(req.body.username);

                                   /**
                                    * hashing password
                                    */

                                   let userKey = await hashFunc(req.body.password);


                                   console.log(registeredName);

                                   // defining user to be stored in database
                                   let user = {
                                        username: registeredName,
                                        email: req.body.email,
                                        password: userKey,
                                        userImage: "",
                                        profileImage: "",
                                        todos: [],
                                        BMI: []
                                   }

                                   let {
                                        password,
                                        ...response
                                   } = user;

                                   //     storing user in database
                                   await userModel.create(user);

                                   /**
                                    * return a response with the user data
                                    */
                                   res.json({
                                        msg: "user successfully registered. signup successful",
                                        data: response,
                                   });

                                   return console.log("user:", user);
                              } catch (err) {

                                   console.log(err)
                                   return res.status(403).json(err);
                              }
                         })
                    } catch (err) {
                         console.log(err)
                    }



               }
          ).select('-password')
     }

}