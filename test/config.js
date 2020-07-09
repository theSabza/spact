/**
 * Configuration for the test runner
 * 
 */

//  Dependencies


// Create a module to export
let _ = {};

// Set the request url

_.url = 'http://localhost:6100';

// Set the bucket for the sanbox emails (from AWS S3 Bucket)
_.sandboxEmailBucket = 'sabza-incoming-email-sandbox';

// Set the email domain for test emails (from AWS mailgun)
_.sandboxEmailDomain = '@sandbox8fac053607344aa98055a61f31876d24.mailgun.org'

// Set the urlencoded subject of the email-verification email 
_.emailKeys = {
    'emailVerification' : 'you%20Sabza%20Confirmation%Code.json'
}

// Email Verification Timeout
_.emailVerificationTimeout = 10*60*2; // 2 minutes


module.exports = _;

