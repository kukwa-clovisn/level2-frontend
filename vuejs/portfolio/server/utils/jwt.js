const jwt = require('jsonwebtoken')

const createUserToken = (data) => {
     return jwt.sign({
               id: data.id,
               username: data.username,
               email: data.email,
               profileImg: data.profileImg,
               userImage: data.userImage,
               todos: data.todos,
               BMI: data.BMI
          },
          process.env.user_login_token, {
               expiresIn: process.env.tokenLife,
          }
     )
}


module.exports = createUserToken;