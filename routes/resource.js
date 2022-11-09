var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var television_controller = require('../controllers/television'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a television.  
router.post('/television', television_controller.television_create_post); 
 
// DELETE request to delete television. 
router.delete('/television/:id', television_controller.television_delete); 
 
// PUT request to update television. 
router.put('/television/:id', television_controller.television_update_put); 
 
// GET request for one television. 
router.get('/television/:id', television_controller.television_detail); 
 
// GET request for list of all television items. 
router.get('/television', television_controller.television_list); 
 
module.exports = router;