/**
 * Application Type: Model
 * Model Handler: Users
 * Description: File handles all the user model (datastore and functions) for users
 * 
 */


//  Base Dependencies
const base = require('./mongo');
const {cloneDeep} = require('lodash');

// Security Dependencies
const zxcvbn = require('zxcvbn');
const bcrypt = require('bcryptjs');
// Model Dependencies


// Validation Dependencies
const constraints = require('./../lib/constraints');
const format = require('./../lib/format');
const validate = require('validate.js');

// Other Deependencies
const moment = require('moment');



// Create model to export to app
let _ = class extends base {

    // Load a user, or create a new user with default values
    // Set Defaults using the parent base  class (models/mongo.js)
    /**
     * constructor() function will set the default value by initiating the constructor inside of the base class (models/mongo.js) class 
     * 
     *      constructor() {
     *          this.created = Date.now()
     *          this._id = uuidv4();
     *      }
     * 
     * 
     */
    constructor(spectId = false) {
        super();

        // If a userId is set, load the userData from the DB
        if(spectId) {
            // @TODO 
            let msg = validate.single(_id, constraints.beaconID());

            if(msg) {            
                this.err = msg;
            } else {            
                this._id = format._id(spectId);
            }

            // spectData = load()
        } else {

            // Inherit all defaults using the parent base  class (models/mongo.js) and use is as 'super' e.g super.save()

            // Now set the default user data
            this.created = Date.now()
            this.beaconID = null;
            this.datetimeRecorded = null;
            this.uuid = null;
            this.beaconName = null;
            this.major = null;
            this.minor = null
            this.tx_power = null;
            this.transmission = null;
            this.freqMode=null;
            this.distance = null;
            this.rssi = null;
            this.beaconPrimaryKey = null;
            this.orientation = null;
            this.coord = {
                'latitude': null,
                'longitude': null,
                'orientation': null,
                'height': null,
            }
            this.gyroscope = {
                'x': {
                    active: null,
                    value: null,
                    rotation: null
                },
                'y': {
                    active: null,
                    value: null,
                    rotation: null
                },
                'z': {
                    active: null,
                    value: null,
                    rotation: null
                },
                'xneg': {
                    active: null,
                    value: null,
                    rotation: null
                },
                'yneg': {
                    active: null,
                    value: null,
                    rotation: null
                },
                'zneg': {
                    active: null,
                    value: null,
                    rotation: null
                },
            }
            // this.compass = {
            //     'fromNorth': null,
            //     'tilt': null,

            // }


            this.internal = {};
        }
    }



    // Load this data from the  email verfication table on mongodb
    async load() {
        // emailVerification -> collection in mongodb
        await super.load('spact-data');
    }

    // Load this data from the  email verfication table on mongodb
    async loadAllDataInCollection() {
        // emailVerification -> collection in mongodb
        await super.loadAllDataInCollection('spact-data');
    }

    // Save this data from the  email verfication table on mongodb
    async save() {
        // emailVerification -> collection in mongodb

        await super.save('spact-data');
    }


    // async dataID () {

    // }

    async setBeaconID (beaconID) {
        try {

            // Get the validation message, if any
            let msg = validate.single(beaconID, constraints.beaconID());
            
            // if the validation passes, format the input accordingly
            if(!msg) {
                this.beaconID = format.beaconID(beaconID);
            }
            
            return msg;
            
        } catch (err) {
            console.log(err)
            throw( new Error(err));
        }
    }

    async setUUID (uuid) {
        try {

            // Get the validation message, if any
            let msg = validate.single(uuid, constraints.uuid());
            
            // if the validation passes, format the input accordingly
            if(!msg) {
                this.uuid = format.uuid(uuid);
            }
            
            return msg;
            
        } catch (err) {
            console.log(err)
            throw( new Error(err));
        }
    }

    async setDatetimeRecorded (datetimeRecorded) {
        try {

            // Get the validation message, if any
            let msg = validate.single(datetimeRecorded, constraints.datetimeRecorded());
            
            // if the validation passes, format the input accordingly
            if(!msg) {
                this.datetimeRecorded = format.datetimeRecorded(datetimeRecorded);
            }
            
            return msg;
            
        } catch (err) {
            console.log(err)
            throw( new Error(err));
        }
    }

    async setBeaconName (beaconName) {
        try {

            // Get the validation message, if any
            let msg = validate.single(beaconName, constraints.beaconName());
            
            // if the validation passes, format the input accordingly
            if(!msg) {
                this.beaconName = format.beaconName(beaconName);
            }
            
            return msg;
            
        } catch (err) {
            console.log(err)
            throw( new Error(err));
        }
    }
    async setMajor (major) {
        try {

            // Get the validation message, if any
            let msg = validate.single(major, constraints.major());
            
            // if the validation passes, format the input accordingly
            if(!msg) {
                this.major = format.major(major);
            }
            
            return msg;
            
        } catch (err) {
            console.log(err)
            throw( new Error(err));
        }
    }
    async setMinor (minor) {
        try {

            // Get the validation message, if any
            let msg = validate.single(minor, constraints.minor());
            
            // if the validation passes, format the input accordingly
            if(!msg) {
                this.minor = format.minor(minor);
            }
            
            return msg;
            
        } catch (err) {
            console.log(err)
            throw( new Error(err));
        }
    }
    async setTx_power (tx_power) {
        try {

            // Get the validation message, if any
            let msg = validate.single(tx_power, constraints.tx_power());
            
            // if the validation passes, format the input accordingly
            if(!msg) {
                this.tx_power = format.tx_power(tx_power);
            }
            
            return msg;
            
        } catch (err) {
            console.log(err)
            throw( new Error(err));
        }
    }
    async setTransmission (transmission) {
        try {

            // Get the validation message, if any
            let msg = validate.single(transmission, constraints.transmission());
            
            // if the validation passes, format the input accordingly
            if(!msg) {
                this.transmission = format.transmission(transmission);
            }
            
            return msg;
            
        } catch (err) {
            console.log(err)
            throw( new Error(err));
        }
    }
    async setFreqMode (freqMode) {
        try {

            // Get the validation message, if any
            let msg = validate.single(freqMode, constraints.freqMode());
            
            // if the validation passes, format the input accordingly
            if(!msg) {
                this.freqMode = format.freqMode(freqMode);
            }
            
            return msg;
            
        } catch (err) {
            console.log(err)
            throw( new Error(err));
        }
    }

    async setBeaconPrimaryKey(beaconPrimaryKey) {
        try {

            // Get the validation message, if any
            let msg = validate.single(beaconPrimaryKey, constraints.beaconPrimaryKey());
            
            // if the validation passes, format the input accordingly
            if(!msg) {
                this.beaconPrimaryKey = format.beaconPrimaryKey(beaconPrimaryKey);
            }
            
            return msg;
            
        } catch (err) {
            console.log(err)
            throw( new Error(err));
        }
    }
    async setDistance (distance) {
        try {

            // Get the validation message, if any
            let msg = validate.single(distance, constraints.distance());
            
            // if the validation passes, format the input accordingly
            if(!msg) {
                this.distance = format.distance(distance);
            }
            
            return msg;
            
        } catch (err) {
            console.log(err)
            throw( new Error(err));
        }
    }
    async setRSSI (rssi) {
        try {

            // Get the validation message, if any
            let msg = validate.single(rssi, constraints.rssi());
            
            // if the validation passes, format the input accordingly
            if(!msg) {
                this.rssi = format.rssi(rssi);
            }
            
            return msg;
            
        } catch (err) {
            console.log(err)
            throw( new Error(err));
        }
    }
    async setOrientation (orientation) {
        try {

            // Get the validation message, if any
            let msg = validate.single(orientation, constraints.orientation());
            
            // if the validation passes, format the input accordingly
            if(!msg) {
                this.orientation = format.orientation(orientation);
            }
            
            return msg;
            
        } catch (err) {
            console.log(err)
            throw( new Error(err));
        }
    }
    async setCoord (coord) {
        try {
            if (coord.latitude) {
                // Get the validation message, if any
                let msg = validate.single(coord.latitude, constraints.latitude());
                // if the validation passes, format the input accordingly
                if(!msg) {
                    this.coord.latitude = format.coordLat(coord.latitude);
                    
                } else {
                    return msg;
                }
            }

            if (coord.longitude) {
                // Get the validation message, if any
                let msg = validate.single(coord.longitude, constraints.longitude());
                // if the validation passes, format the input accordingly
                if(!msg) {
                    this.coord.longitude = format.coordLong(coord.longitude);
                    
                } else {
                    return msg;
                }
            }

            if (coord.orientation) {
                // Get the validation message, if any
                let msg = validate.single(coord.orientation, constraints.orientation());
                // if the validation passes, format the input accordingly
                if(!msg) {
                    this.coord.orientation = format.coordOrientation(coord.orientation);
                    
                } else {
                    return msg;
                }
            }

            if (coord.height) {
                // Get the validation message, if any
                let msg = validate.single(coord.height, constraints.height());
                // if the validation passes, format the input accordingly
                if(!msg) {
                    this.coord.height = format.coordHeight(coord.height);
                    
                } else {
                    return msg;
                }
            }

            
    
            
        } catch (err) {
            console.log(err)
            throw( new Error(err));
        }
    }
    // async gyroscope (gyroscope) {}
    // async compass (compass) {}
   




    // Get the record filtered by the role of the requester
    async getRecordByRole(role) {

        try {

            // Do a deep clone of the record
            let record = cloneDeep(this);

            // Delete properties based on the requester's role
            switch(role) {
                case 'public' :
                    delete record.created;
                    delete record.updated;
                break
            }

            return record;

        } catch (err) {

            throw( new Error(err));
        }
    }





    



}



module.exports = _;