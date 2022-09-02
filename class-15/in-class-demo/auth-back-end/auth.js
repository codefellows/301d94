'use strict';

// jwt - JSON web token (pronounced JOT)
const jwt = require('jsonwebtoken');

// jwks - JSON web key set (pronounced Ja-wicks)
const jwksClient = require('jwks-rsa');

// the jwks uri come Auth0 account page -> advanced settings -> Endpoints -> 0auth -> JSON Web Key Set
const client = jwksClient({
  jwksUri: process.env.JWKS_URI
});

// from the jsonwebtoken docs
// https://www.npmjs.com/package/jsonwebtoken
// (search for auth0)
function getKey(header, callback){
  client.getSigningKey(header.kid, function(err, key) {
    var signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

// function to verify the user on our route
// this is just how we do it
function verifyUser (req, errorFirstOrUserCallback) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    // the docs
    jwt.verify(token, getKey, {}, errorFirstOrUserCallback)
  } catch (error) {
    errorFirstOrUserCallback('not authorized')
  }
}

module.exports = verifyUser;
