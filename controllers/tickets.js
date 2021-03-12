const Ticket = require('../models/tickets');
const Flight = require('../models/flight');


module.exports = {
  create,
  new: newTicket,
  plusOne
};

function plusOne(req, res) {
  console.log('this is working')
  Flight.findById(req.params.flightId, function (err, flight) {

    flight.tickets.push(req.params.ticketId);
    flight.save(function (err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

function create(req, res) {
  req.body.flight = req.params.id
  Ticket.create(req.body, function (err, ticket) {
    res.redirect(`./flights/${req.params.id}`);
  });
}

function newTicket(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render('flights/tickets/new', {
      title: 'Add Ticket', flight
    });
  });
}