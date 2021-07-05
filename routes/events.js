const express = require("express")
const router = express.Router()
const Event = require('../models/Event')
const { check, validationResult } = require('express-validator');
const moment = require('moment'); // require
moment().format(); 


router.get('/events/create', (req,res)=> {

    res.render('pages/create',{
        errors:req.flash('errors')
    })
})
// save event to db

router.post('/events/create',[
    check('title').isLength({min: 5}).withMessage('title shoud be more than 5'),
    check('description').isLength({min: 5}).withMessage('description shoud be more than 5'),
    check('date').isLength({min: 5}).withMessage('date shoud be more than 5'),
    check('location').isLength({min: 5}).withMessage('location shoud be more than 5')

],(req,res)=> {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        req.flash( 'errors',errors.array())
        res.redirect('/events/create')
    }else{
        let newEvent = new Event({
            title:req.body.title,
            description: req.body.description,
            date :req.body.date,
            location : req.body.location,
            created_at: Date.now()
        })
        
        newEvent.save((err)=>{
            if (!err) {
                console.log("envent was added")
                req.flash('info','The event was created successfuly')
                res.redirect('/')  
            }else{
                console.log(err)
            }
            
    
        })
    }
})

//edit router
router.get('/events/edit/:id', (req,res)=> {
    Event.findOne({_id: req.params.id}, (err,event)=> {
      
        if(!err) {
            
         res.render('pages/edit', {
             event: event,
             eventDate: moment(event.data).format('YYYY-MM-DD')
         })
   
        } else {
            console.log(err)
        }
     
     })
})
//update the form 
router.post('/update', (req,res)=> {

})


  module.exports = router 
