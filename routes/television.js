var express = require('express');
const television_controlers= require('../controllers/television');
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET television */ 
router.get('/', television_controlers.television_view_all_Page ); 
// GET request for one Television. 
router.get('/television/:id', television_controlers.television_detail);
/* GET detail costume page */ 
router.get('/detail', television_controlers.television_view_one_Page); 
/* GET create costume page */ 
router.get('/create', television_controlers.television_create_Page); 
/* GET create update page */ 
router.get('/update',secured, television_controlers.television_update_Page);
/* GET delete costume page */ 
router.get('/delete', television_controlers.television_delete_Page); 
module.exports = router; 
