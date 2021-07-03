const express = require('express')
const router = express.Router()

router.get("/about" ,function(req, res){
    res.render("pages/about",{page: 'about'});
  });

  
  module.exports = router