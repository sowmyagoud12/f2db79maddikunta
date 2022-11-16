var express = require('express');
const television_controlers= require('../controllers/television');
var router = express.Router();

/* GET television */ 
router.get('/', television_controlers.television_view_all_Page ); 
// GET request for one Television. 
router.get('/television/:id', television_controlers.television_detail);
/* GET detail costume page */ 
router.get('/detail', television_controlers.television_view_one_Page); 
/* GET create costume page */ 
router.get('/create', television_controlers.television_create_Page); 
module.exports = router; 
