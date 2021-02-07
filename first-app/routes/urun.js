const express = require('express')
const router = express.Router();

const path = require('path');

router.get('/urun',(req,res,next) => {
    res.sendFile(path.join(__dirname,'../','views','urun.html'))
});

module.exports = router;