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
// Handle Television delete on DELETE. 
exports.television_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await television.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle a show one view with id specified by query 
exports.television_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await television.findById( req.query.id) 
        res.render('televisiondetail',  { title: 'Television Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

// Handle building the view for creating a television. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.television_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('televisioncreate', { title: 'Television Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a television. 
// query provides the id 
exports.television_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await television.findById(req.query.id) 
        res.render('televisionupdate', { title: 'Television Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.television_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await television.findById(req.query.id) 
        res.render('televisiondelete', { title: 'Television Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 