/**
 * HTTP Server file to run the application server
 */

// Dependencies
const express = require('express');
const express_graphql = require('express-graphql')
const router = require('./router');

var {buildSchema} = require('graphql')

const app = express();
const docs = express() // the sub app for documentations

// -------------------------- GraphQL Schema ---------- //


const winston = require('winston');
const expressWinston = require('express-winston');

// -------------------------- Setting Manual Port ----------------------------- //
const port = 6100;

// -------------------------- Setting Up Express Static Page Serving ---------- //


// var options = {
//     dotfiles: 'ignore',
//     etag: false,
//     extensions: ['htm', 'html'],
//     index: false,
//     maxAge: '1d',
//     redirect: false,
//     setHeaders: function (res, path, stat) {
//       res.set('x-timestamp', Date.now())
//     }
//   }
  
//   app.use(express.static('public', options))

  
// create module to export
let _ = {};


// Load the server
_.start = async (secrets) => {
    

    try {

        // Start the app server
        app.listen(port);

        // Log the status of the server
        console.log('Application listening on port: ' + port);

        // Log the secret data received
        // console.log("Here are the secrets", secrets);

        return true
    } catch (err) {

        throw( new Error(err));
    }
    
};

// Middlewares

// Set the app logger - Winston & Express-Winston
// app.use(expressWinston.logger({
//     'transports' : [
//         new winston.transports.Console()
//     ]
// }));


// Set the app router (Meaning: App should use 'router' for all of the paths)



// Parse all request as JSON. Use json middleware
app.use(express.json());

// Setting up a static path for serving static files
app.use('/', express.static('documentations'))



// docs.get('/', function (req, res) {
//     console.log(docs.mountpath) // /admin
//     res.send('API Documentation Homepage')
//   })
// docs.use(express.json());
// docs.use('/docs', express.static('documentations'))


app.use('/', router);




// Export App Server module as _ to run in index.js entry point
module.exports = _;