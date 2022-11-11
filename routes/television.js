var express = require('express');
const television_controlers= require('../controllers/television');
var router = express.Router();

/* GET television */ 
router.get('/', television_controlers.television_view_all_Page ); 
// GET request for one Television. 
router.get('/television/:id', television_controlers.television_detail); 
module.exports = router; 
