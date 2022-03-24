const express = require('express');
const userModel = require('../Database/users');

const router = express.Router();

router.get('/', (req, res) => {
     // userModel
     res.json(req.body)
     console.log(req.body)
})


module.exports = router;