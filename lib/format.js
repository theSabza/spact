/**
 * Application Type: Library
 * Library Handler: Validation Format
 * Description: File handles validation formats
 * 
 */

//  Dependencies

// Create module to export
let _ = {};

// Names
_.name = (str) => {

    // trim it
    str = str.trim();

    // Replace multiple whitespaces with single space
    str = str.replace(/ +/g, ' ');

    let lwr = str.toLowerCase();
    

    return str;
}



// Paths
_.path = (str) => {

    // trim it
    let lwr = str.toLowerCase();    

    return str;
}

// Handle
_.handle = (str) => {

    // @TODO / OPTIONAL if we want to add formatting later, it would go here
    

    return str;
}

// RefId
_.refId = (str) => {

    // @TODO / OPTIONAL if we want to add formatting later, it would go here
    

    return str;
}

// RefType
_.refType = (str) => {

    // @TODO / OPTIONAL if we want to add formatting later, it would go here
    

    return str;
}

_._id = (_id) => {

    // @TODO / OPTIONAL if we want to add formatting later, it would go here
    

    return _id;
}

_.policyVersion = (policyVersion) => {

    // @TODO / OPTIONAL if we want to add formatting later, it would go here
    

    return policyVersion;
}

_.emailAddress = (email) => {
    // @TODO / OPTIONAL if we want to add formatting later, it would go here


    return email;
}

_.beaconID = (beaconID) => {
    // @TODO / OPTIONAL if we want to add formatting later, it would go here


    return beaconID;
}

_.beaconName = (beaconName) => {
    // @TODO / OPTIONAL if we want to add formatting later, it would go here


    return beaconName;
}

_.uuid = (uuid) => {
    // @TODO / OPTIONAL if we want to add formatting later, it would go here


    return uuid;
}

_.major = (major) => {
    // @TODO / OPTIONAL if we want to add formatting later, it would go here


    return major;
}

_.minor = (minor) => {
    // @TODO / OPTIONAL if we want to add formatting later, it would go here


    return minor;
}

_.tx_power = (tx_power) => {
    // @TODO / OPTIONAL if we want to add formatting later, it would go here


    return tx_power;
}

_.transmission = (transmission) => {
    // @TODO / OPTIONAL if we want to add formatting later, it would go here


    return transmission;
}

_.freqMode = (freqMode) => {
    // @TODO / OPTIONAL if we want to add formatting later, it would go here


    return freqMode;
}

_.beaconPrimaryKey = (beaconPrimaryKey) => {
    // @TODO / OPTIONAL if we want to add formatting later, it would go here


    return beaconPrimaryKey;
}

_.distance = (distance) => {
    // @TODO / OPTIONAL if we want to add formatting later, it would go here


    return distance;
}

_.rssi = (rssi) => {
    // @TODO / OPTIONAL if we want to add formatting later, it would go here


    return rssi;
}

_.orientation = (orientation) => {
    // @TODO / OPTIONAL if we want to add formatting later, it would go here


    return orientation;
}

_.coordLat = (coordLat) => {
    // @TODO / OPTIONAL if we want to add formatting later, it would go here


    return coordLat;
}



_.coordLong = (coordLong) => {
    // @TODO / OPTIONAL if we want to add formatting later, it would go here


    return coordLong;
}


_.coordHeight = (coordHeight) => {
    // @TODO / OPTIONAL if we want to add formatting later, it would go here


    return coordHeight;
}

_.coordOrientation = (coordOrientation) => {
    // @TODO / OPTIONAL if we want to add formatting later, it would go here


    return coordOrientation;
}

_.datetimeRecorded = () => {

    return datetimeRecorded;
}

_.rssi = (rssi) => {
    // @TODO / OPTIONAL if we want to add formatting later, it would go here


    return rssi;
}

_.rssi = (rssi) => {
    // @TODO / OPTIONAL if we want to add formatting later, it would go here


    return rssi;
}

module.exports = _;