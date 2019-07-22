var express = require('express');
var router = express.Router();



const controller = require('./controller');

router.use('/token', controller.token);
router.use('/jwks', controller.jwks);


module.exports = router;
