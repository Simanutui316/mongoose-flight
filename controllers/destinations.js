const Flight = require('../models/flight')

module.exports = {

    show,
    create

};

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        res.render('flights/show', {
            flight: flight
        });
    });
}

function create(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        flight.destinations.push(req.body)
        flight.save(function (err) {
            res.redirect(`/flights/${flight._id}`)
        })
    })
}