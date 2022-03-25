const express = require("express");
const userModel = require("../models/users");
const bcrypt = require("bcrypt");
const hashFunc = require('../middlewares/custom/hash');
const capitalizeUserName = require('../middlewares/services/capitalize');
const {
     check,
     validationResult
} = require("express-validator");

const router = express.Router();

router.post('/',
     [
          check("username")
          .not()
          .isEmpty()
          .withMessage("username can not be empty or only numbers")
          .trim()
          .escape(),
          check("password")
          .isLength({
               min: 5,
          })
          .trim()
          .escape()
          .withMessage("password should contain at least 5 characters"),
          check("email").isEmail() /*.normalizeEmail(),*/
     ],
     async (req, res) => {
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

          let newUser = req.body.username;
          let newEmail = req.body.email;
          /**
           * checking if user alredy exist with same name
           */
          userModel.findOne({
                    username: newUser,
               },
               (err, data) => {
                    if (err) {
                         res.status(403).json(err)
                         return console.log(err);
                    }
                    if (data) {

                         let resp = {
                              username: data.username,
                              email: data.email,
                              userImage: "",
                              profileImage: "",
                              todos: [],
                              BMI: []
                         }
                         return res.json({
                              msg: ` user ${req.body.username} already has an account.`,
                              data: resp
                         });
                    }
                    /**
                     * checking if a user already exist with the same email
                     */
                    userModel.findOne({
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
                              userModel.create(user);

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


               }
          );
     }
);

module.exports = router;