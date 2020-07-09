/**
 * Application Type: Model
 * Model Handler: TOTP Tokens
 * Description: File handles all the email Tokens model (datastore and functions) for users
 * 
 */


//  Base Dependencies
const base = require('./mongo');
const {cloneDeep} = require('lodash');

// Secrets Dependencies
const secretsLib = require('./../lib/secrets');

// Model Dependencies
const EmailAddress = require('./../models/emailAddresses');
const Cryptr = require('cryptr');
const qrcode = require('qrcode');
const authenticator = require('authenticator')
// Validation Dependencies
const constraints = require('./../lib/constraints');
const format = require('./../lib/format');
const validate = require('validate.js')


// Create module to export
let _ = class extends base {}