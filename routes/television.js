var express = require('express');
const television_controlers= require('../controllers/television');
var router = express.Router();

/* GET costumes */ 
router.get('/', television_controlers.television_view_all_Page ); 
module.exports = router; 
