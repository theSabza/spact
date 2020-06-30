 /**
 * Application Type: Router
 * Route Handler: Ping
 * Description: Ping Handler, useable on the router in place to give ping request anwser
 * 
 */

// Dependencies


// Create module to export
let _ = {};


// Get Request to /ping route
_.get = async (req, res) => {
    let code = 200;
    res.json({
        'ping' : 'successful',
        'status' : code,
        'timestamp' : Date.now()
    });
    // return res.status(code).json(new ResquestError(code));
};



// Export router module as _ to handle ping route and errors
module.exports = _;