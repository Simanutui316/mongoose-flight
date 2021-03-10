var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.post('/flights/:id/tickets', ticketsCtrl.create);
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
router.get('/flights/:flightId/tickets/:ticketId', ticketsCtrl.addToFlight)

module.exports = router;