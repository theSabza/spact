/**
 * Application Type: Library
 * Library Handler: Validation Constraints
 * Description: File handles validation constraints
 * 
 */

//  Dependencies

// Create module to export
let _ = {};

// Names
_.name = () => {

    // Set the regex
    let regex = "[\-\'\A-Za-z0-9 ]+";

    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        'type' : 'string',
        'format' : {
            'pattern' : regex,
            'flags' : 'i',
            'message' : 'name - must match the following pattern: ' + regex
        }
    };

    return constraints;
}

// Paths
_.path = () => {

    // Set the regex
    let regex = "[\-\A-Za-z0-9]+";


    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        'type' : 'string',
        'format' : {
            'pattern' : regex,
            'flags' : 'i',
            'message' : 'path - must match the following pattern: ' + regex
        }
    };

    return constraints;

}
// Names
_.handle = () => {

    // Set the regex
    let regex = "[\-\A-Za-z0-9]+";

    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        'type' : 'string',
        'length' : {
            'minimum' : 3,
            'maximum' : 30
        },
        'format' : {
            'pattern' : regex,
            'flags' : 'i',
            'message' : 'handle - must match  the following pattern: ' + regex
        }
    };

    return constraints;
}

// RefTypes
_.refType = () => {

    // Set the regex
    let regex = "[\-\A-Za-z0-9]+";

    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        'type' : 'string',
        'format' : {
            'pattern' : regex,
            'flags' : 'i',
            'message' : 'refType - must match the following pattern: ' + regex
        }
    };

    return constraints;
}


// RefId
_.refId = () => {

    // Set the regex
    let regex = "[\-\A-Za-z0-9]+";

    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        'type' : 'string',
        'format' : {
            'pattern' : regex,
            'flags' : 'i',
            'message' : 'refId - must match the following pattern: ' + regex
        }
    };

    return constraints;
}

// _id
_._id = () => {

    // Set the regex
    let regex = "[\-\A-Za-z0-9]+";

    // Create the Constraints
    let constraints = {
        'presence' : { 
            'allowEmpty' : false
        },
        'type' : 'string',
        'format' : {
            'pattern' : regex,
            'flags' : 'i',
            'message' : '_id - must match the following pattern: ' + regex
        }
    };

    return constraints;
}

// policy version
_.policyVersion = (name = '', policyVersion='') => {

    // Set the regex
    let regex = "[\-\.\_\*\A-Za-z0-9]+";

    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        'type' : 'string',
        'format' : {
            'pattern' : regex,
            'flags' : 'i',
            'message' : name + ' : ' + policyVersion + ' : ' + 'must match the following pattern: ' + regex
        }
    };

    return constraints;
}

// Email Address
_.emailAddress = () => {

    // Create the constraints
    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        'type' : 'string',
        'email' : true
    };

    return constraints;
}

// Email Address
_.beaconID = () => {

    // Set the regex
    let regex = "[\-\A-Za-z0-9]+";

    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        'type' : 'string'//,
        // 'format' : {
        //     'pattern' : regex,
        //     'flags' : 'i',
        //     'message' : 'BeaconID - must match the following pattern: ' + regex
        // }
    };
}

// Email Address
_.uuid = () => {

    // Set the regex
    let regex = "[\-\A-Za-z0-9]+";

    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        'type' : 'string'//,
        // 'format' : {
        //     'pattern' : regex,
        //     'flags' : 'i',
        //     'message' : 'UUID - must match the following pattern: ' + regex
        // }
    };
}

// Email Address
_.beaconName = () => {

    // Set the regex
    let regex = "[\-\A-Za-z0-9]+";

    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        'type' : 'string'//,
        // 'format' : {
        //     'pattern' : regex,
        //     'flags' : 'i',
        //     'message' : 'BeaconName - must match the following pattern: ' + regex
        // }
    };
}

// Email Address
_.major = () => {

    // Set the regex
    let regex = "[\-\A-Za-z0-9]+";

    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        'type' : 'string'//,
        // 'format' : {
        //     'pattern' : regex,
        //     'flags' : 'i',
        //     'message' : 'Major - must match the following pattern: ' + regex
        // }
    };
}

// Email Address
_.minor = () => {

    // Set the regex
    let regex = "[\-\A-Za-z0-9]+";

    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        // 'type' : 'string',
        // 'format' : {
        //     'pattern' : regex,
        //     'flags' : 'i',
        //     'message' : 'Minor - must match the following pattern: ' + regex
        //}
    };
}

// Email Address
_.tx_power = () => {

    // Set the regex
    let regex = "[\-\A-Za-z0-9]+";

    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        // 'type' : 'string',
        // 'format' : {
        //     'pattern' : regex,
        //     'flags' : 'i',
        //     'message' : 'TX Power - must match the following pattern: ' + regex
        //}
    };
}

// Email Address
_.transmission = () => {

    // Set the regex
    let regex = "[\-\A-Za-z0-9]+";

    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        'type' : 'string'//,
        // 'format' : {
        //     'pattern' : regex,
        //     'flags' : 'i',
        //     'message' : 'Transmission - must match the following pattern: ' + regex
        // }
    };
}

// Email Address
_.freqMode = () => {

    // Set the regex
    let regex = "[\-\A-Za-z0-9]+";

    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        'type' : 'string'//,
        // 'format' : {
        //     'pattern' : regex,
        //     'flags' : 'i',
        //     'message' : 'Frequency Mode - must match the following pattern: ' + regex
        // }
    };
}

// Email Address
_.beaconPrimaryKey = () => {

    // Set the regex
    let regex = "[\-\A-Za-z0-9]+";

    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        'type' : 'string'//,
        // 'format' : {
        //     'pattern' : regex,
        //     'flags' : 'i',
        //     'message' : 'Beacon Primary Key - must match the following pattern: ' + regex
        // }
    };
}

// Email Address
_.distance = () => {

    // Set the regex
    let regex = "[\-\A-Za-z0-9]+";

    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        'type' : 'string'//,
        // 'format' : {
        //     'pattern' : regex,
        //     'flags' : 'i',
        //     'message' : 'Distance - must match the following pattern: ' + regex
        // }
    };
}

// Email Address
_.rssi = () => {

    // Set the regex
    let regex = "[\-\A-Za-z0-9]+";

    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        'type' : 'string'//,
        // 'format' : {
        //     'pattern' : regex,
        //     'flags' : 'i',
        //     'message' : 'RSSI - must match the following pattern: ' + regex
        // }
    };
}
// Email Address
_.orientation = () => {

    // Set the regex
    let regex = "[\-\A-Za-z0-9]+";

    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        'type' : 'string'//,
        // 'format' : {
        //     'pattern' : regex,
        //     'flags' : 'i',
        //     'message' : 'Orientation - must match the following pattern: ' + regex
        // }
    };
}
// // Email Address
_.latitude = () => {

    // Set the regex
    let regex = "[\-\A-Za-z0-9]+";

    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        'type' : 'string'//,
        // 'format' : {
        //     'pattern' : regex,
        //     'flags' : 'i',
        //     'message' : 'Coord Latitude - must match the following pattern: ' + regex
        // }
    };
}

// // Email Address
_.longitude = () => {

    // Set the regex
    let regex = "[\-\A-Za-z0-9]+";

    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        'type' : 'string'
        // 'format' : {
        //     'pattern' : regex,
        //     'flags' : 'i',
        //     'message' : 'Coord Longitude - must match the following pattern: ' + regex
        // }
    };
}


// // Email Address
_.orientation = () => {

    // Set the regex
    let regex = "[\-\A-Za-z0-9]+";

    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        'type' : 'string'
        // 'format' : {
        //     'pattern' : regex,
        //     'flags' : 'i',
        //     'message' : 'Coord Orientation - must match the following pattern: ' + regex
        // }
    };
}

_.datetimeRecorded = () => {
    // Set the regex
    let regex = "[\-\A-Za-z0-9]+";

    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        'type' : 'string'
        // 'format' : {
        //     'pattern' : regex,
        //     'flags' : 'i',
        //     'message' : 'Coord Orientation - must match the following pattern: ' + regex
        // }
    };

}
// // Email Address
_.height = () => {

    // Set the regex
    let regex = "[\-\A-Za-z0-9]+";

    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        'type' : 'string'
        // 'format' : {
        //     'pattern' : regex,
        //     'flags' : 'i',
        //     'message' : 'Coord Height - must match the following pattern: ' + regex
        // }
    };
}

// // Email Address
_.gyroActive = () => {

    // Set the regex
    let regex = "[\-\A-Za-z0-9]+";

    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        'type' : 'string'
        // 'format' : {
        //     'pattern' : regex,
        //     'flags' : 'i',
        //     'message' : 'Gyroscope Active - must match the following pattern: ' + regex
        // }
    };
}

// // Email Address
_.gyrosValue = () => {

    // Set the regex
    let regex = "[\-\A-Za-z0-9]+";

    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        'type' : 'string',
        'format' : {
            'pattern' : regex,
            'flags' : 'i',
            'message' : 'Gyroscope Value - must match the following pattern: ' + regex
        }
    };
}

// // Email Address
_.gyroRotation = () => {

    // Set the regex
    let regex = "[\-\A-Za-z0-9]+";

    // Create the Constraints
    let constraints = {
        'presence' : { 'allowEmpty' : false},
        'type' : 'string',
        'format' : {
            'pattern' : regex,
            'flags' : 'i',
            'message' : 'Gyroscope Rotation - must match the following pattern: ' + regex
        }
    };
}

// Email Address
// _.compass = () => {

//     // Create the constraints
//     // Create the Constraints
//     let constraints = {
//         'presence' : { 'allowEmpty' : false},
//         'type' : 'string'
//     };

//     return constraints;
// }

module.exports = _;