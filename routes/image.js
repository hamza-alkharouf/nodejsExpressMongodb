const express = require('express')
const router = express.Router()


  router.get("/image" ,function(req, res){
    res.render("pages/image",{page: 'image'});
  });
  
  module.exports = router