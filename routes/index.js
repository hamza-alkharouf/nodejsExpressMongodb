const express = require('express')
const router = express.Router()
const Event = require('../models/Event')

const about=require('./about')
const image=require('./image')

router.use(about)
router.use(image)

/* GET home page. */
// index page
router.get('/', function(req, res) {
  
  
  Event.find({}, (err,events)=> {
    //     res.json(events)
         let chunk = []
         let chunkSize = 3
         for (let i =0 ; i < events.length ; i+=chunkSize) {
             chunk.push(events.slice( i, chunkSize + i))
         }
         var mascots = [
          { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
          { name: 'Tux', organization: "Linux", birth_year: 1996},
          { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
        ];
        var tagline = "No programming concept is complete without a cute animal mascot.";
      
         //res.json(chunk)
         res.render('pages/index', {
          mascots: mascots,
          tagline: tagline,
          chunk : chunk
        })
     })

    })


// show single event
router.get('/:id', (req,res)=> {
  Event.findOne({_id: req.params.id}, (err,event)=> {
      
     if(!err) {
         
      res.render('pages/event', {
          event: event
      })

     } else {
         console.log(err)
     }
  
  })

})



module.exports = router