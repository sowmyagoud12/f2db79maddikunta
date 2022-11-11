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

// Handle Costume create on POST. 
exports.television_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new television(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"tele_name":"Visio", "size":"90 inch", "cost":"800"} 
    document.tele_name = req.body.tele_name;    
    document.size = req.body.size;
    document.cost = req.body.cost;  
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific Television. 
exports.television_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await television.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
//Handle Costume update form on PUT. 
exports.television_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await television.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.tele_name)  
               toUpdate.tele_name = req.body.tele_name; 
        if(req.body.size) toUpdate.size = req.body.size; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
                
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
}; 
// Handle Television delete form on DELETE. 
exports.television_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Television delete DELETE ' + req.params.id); 
}; 
 
