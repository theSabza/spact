/**
 * Application Type: Router
 * Route Handler: Users
 * Description: File handles all the routes (requests and responses) for users
 * 
 */

// Dependencies
const Spact = require('./../models/spact');

// Model Dependencies
// const EmailAddress = require('./../models/emailAddresses');
// const EmailToken = require('./../models/emailTokens');
// const Path = require('./../models/paths')

// Process Dependencies
const PayloadError = require('./../errors/payload');
const { get } = require('lodash');


// Routing Files


// Create module to export
let _ = {};


// POST requests
_.post = async (req, res) => {
    
    try {

        // Instantiate a new user. Either pulls a user by ID, or pulls a user in default data
        let spact = new Spact();
        // console.log('.1')

        // Defaults for the validation process
        let key = false;
        let msg = false;
        // let policyName = false;

        // Set DOB Year
        key = 'beaconID';
        msg = await spact.setBeaconID(get(req.body, key));
        if(msg) return res.status(400).json(new PayloadError(key, msg)); 
        console.log('Routes | Spact.js | 1' + msg)

        key = 'uuid';
        msg = await spact.setUUID(get(req.body, key));
        if(msg) return res.status(400).json(new PayloadError(key, msg)); 
        console.log('Routes | Spact.js | 2' + msg)

        key = 'beaconName';
        msg = await spact.setBeaconName(get(req.body, key));
        if(msg) return res.status(400).json(new PayloadError(key, msg)); 
        console.log('Routes | Spact.js | 3' + msg)

        key = 'major';
        msg = await spact.setMajor(get(req.body, key));
        if(msg) return res.status(400).json(new PayloadError(key, msg)); 
        console.log('Routes | Spact.js | 4' + msg)

        key = 'minor';
        msg = await spact.setMinor(get(req.body, key));
        if(msg) return res.status(400).json(new PayloadError(key, msg)); 
        console.log('Routes | Spact.js | 5' + msg)

        key = 'tx_power';
        msg = await spact.setTx_power(get(req.body, key));
        if(msg) return res.status(400).json(new PayloadError(key, msg)); 
        console.log('Routes | Spact.js | 6' + msg)

        key = 'transmission';
        msg = await spact.setTransmission(get(req.body, key));
        if(msg) return res.status(400).json(new PayloadError(key, msg)); 
        console.log('Routes | Spact.js | 7' + msg)

        key = 'freqMode';
        msg = await spact.setFreqMode(get(req.body, key));
        if(msg) return res.status(400).json(new PayloadError(key, msg));
        console.log('Routes | Spact.js | 8' + msg) 

        key = 'beaconPrimaryKey';
        msg = await spact.setBeaconPrimaryKey(get(req.body, key));
        if(msg) return res.status(400).json(new PayloadError(key, msg)); 
        console.log('Routes | Spact.js | 9' + msg)

        key = 'distance';
        msg = await spact.setDistance(get(req.body, key));
        if(msg) return res.status(400).json(new PayloadError(key, msg)); 
        console.log('Routes | Spact.js | 10' + msg) 

        key = 'rssi';
        msg = await spact.setRSSI(get(req.body, key));
        if(msg) return res.status(400).json(new PayloadError(key, msg));  
        console.log('Routes | Spact.js | 11' + msg)

        key = 'orientation';
        msg = await spact.setOrientation(get(req.body, key));
        if(msg) return res.status(400).json(new PayloadError(key, msg)); 
        console.log('Routes | Spact.js | 12' + msg) 

        key = 'coord';
        msg = await spact.setCoord(get(req.body, key));
        if(msg) return res.status(400).json(new PayloadError(key, msg)); 
        console.log('Routes | Spact.js | 13' + msg)  

        // Save the new email in dynamo, only if such an email doesn't exist
        let doNotUpdate = true;
        
        let result = await spact.save();
    
        // let record = await spact.load(this._id);
        console.log(result)

        // Return the filtered data
        res.json(result);


    } catch (err) {
        // console.log(500);
        // console.log(err);
        console.log("Routes: spect.js | Line : 72 | Logging: Faliure to run ");
        res.sendStatus(500).end(); 
    }
}


// // Get Request to /ping route
// _.get = async (req, res) => {
//     let code = 200;
//     res.json({
//         'ping' : 'successful',
//         'status' : code,
//         'timestamp' : Date.now()
//     });
//     // return res.status(code).json(new ResquestError(code));
// };

_.getAll = async (req, res) => {

    try {

        // Defaults for the validation process
        let key = false;
        let msg = false;

        
        // Instantiate a new new based onn the string requested
        key = '_id';
        console.log(req.query)
        let spact = new Spact(get(req.query, key));
        
        if(spact.err) { return res.status(400).json(new QueryError(key, spact.err));}

        // Sync the object with the data from the database
        let result = await spact.loadAll();
        
        if(spact.err) { return res.status(404).json(new RequestError(404));}


        // Retrieve the data for it, filtered by what should be visible to the public
        let record = await spact.getRecordByRole('public');

        // Return the filtered data
        res.json(record)



    } catch (err) {
        res.sendStatus(500).end();
    }
}





// Export router module as _ to handle ping route and errors
module.exports = _;