var television = require('../models/television'); 
 
// List of all television 
exports.television_list = async function(req, res) { 
    try{ 
        theTelevision = await television.find(); 
        res.send(theTelevision); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// VIEWS 
// Handle a show all view 
exports.television_view_all_Page = async function(req, res) { 
    try{ 
        theTelevision = await television.find(); 
        res.render('television', { title: 'Television Search Results', results: theTelevision }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific Television. 
exports.television_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Television detail: ' + req.params.id); 
}; 
 
// Handle Television create on POST. 
exports.television_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Television create POST'); 
}; 
 
// Handle Television delete form on DELETE. 
exports.television_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Television delete DELETE ' + req.params.id); 
}; 
 
// Handle Television update form on PUT. 
exports.television_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Television update PUT' + req.params.id); 
}; 