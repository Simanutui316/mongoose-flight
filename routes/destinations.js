var express = require('express');
var router = express.Router();
const destinationsCtrl = require('../controllers/destinations');


router.get('/show', destinationsCtrl.index);
router.get('/destinations/new', destinationsCtrl.new);

module.exports = router;

