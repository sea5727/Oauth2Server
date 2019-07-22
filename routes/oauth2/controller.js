
var OAuth2Server = require('express-oauth-server');

// var service = require('./service');
var token_model = require('./model').token_model;
var jwks_model = require('./model').jwks_model;
var oauth2 = new OAuth2Server({
    model : token_model,
  });


  
exports.token = oauth2.token();
exports.jwks = (req, res, next) => {
    console.log('jwk');
    res.json(jwks_model)
}
