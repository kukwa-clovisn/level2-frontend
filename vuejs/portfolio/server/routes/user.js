const express = require('express');

const router = express.Router();

router.put('/', (req, res) => {
     console.log(req.body)
     res.json(req.body)
})


module.exports = router;