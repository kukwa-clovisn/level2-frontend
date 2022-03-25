const userModel = require('../../models/users');
const capitalizeUserName = require('./capitalize');
const verifyToken = require('../custom/verifyHash');
const userToken = require('../../utils/jwt');

const filterDB = async (name) => {
     try {

          filterUsername = capitalizeUserName(name);
          await userModel.findOne({
               username: filterUsername
          }, async (err, data) => {
               try {

                    if (err) {
                         res.status(403).json(err)
                         return console.log(err)
                    }

                    // id the user is not logged in,
                    if (!data) {
                         console.log(`user ${filterUsername} has no account`)
                         return res.status(401).json({
                              msg: `user ${filterUsername} has no account.`
                         })
                    }

                    // if data, compare password,
                    let result = await verifyToken(req.body.password, data.password, filterUsername);
                    console.log(data.password)

                    if (!result) {
                         res.status(401).json({
                              msg: 'unauthorized user. incorrect password'
                         })

                         return console.log('unauthorized user. incorrect password')
                    }

                    let token = userToken(data);

                    return res.status(200).json({
                         msg: "log in successful",
                         data: token
                    })
               } catch (err) {
                    res.status(403).json(err);
                    return console.log(err)
               }
          })
     } catch (err) {
          console.log(err)
     }

}



module.exports = filterDB;