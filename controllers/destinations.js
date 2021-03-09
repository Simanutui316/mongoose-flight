const Flight = require('../models/flight')

module.exports = {

    show,

};

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        res.render('flights/show', {
            flight: flight
        });
    });
}