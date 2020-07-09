/*
 * Primary Application - Core API
 * Starting Server End Point : index.js
 * 
 */

const secrets = require('./lib/secrets');
const mongo = require('./lib/mongo');
const server = require('./lib/server');
const emailSender = require('./workers/emailSender');

// const secrets = require('./ApiDocs/secrets')


// Create module to export
let _ = {};

// Start the application using the run method
_.run = async () => {
    
    try {
        // Load the secret data
        let secretData = await secrets.load();

        // secretData = secrets;

        // console.log(secretData);

        // Start the mongo db server
        await mongo.start(secretData);

        // console.log(secretData)
        // Start the server
        await server.start(secretData);

        // Start the background workers
        // await emailSender.start();

        return true;
    } catch (err) {
        console.log(err)
    }
};

// Start itself
_.run();

// Export the Module (Primarily for testing use)
module.exports = _;