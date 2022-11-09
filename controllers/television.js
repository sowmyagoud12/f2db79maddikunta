var television = require('../models/television'); 
 
// List of all Costumes 
exports.television_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Television list'); 
}; 
 
// for a specific Costume. 
exports.television_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Television detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.television_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Television create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.television_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Television delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.television_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Television update PUT' + req.params.id); 
}; 