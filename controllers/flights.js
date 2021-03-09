const Flight = require('../models/flight');

module.exports = {
    index,
    show,
    new: newFlight,
    create
};

function index(req, res) {
    Flight.find({}, function (err, flightDocuments) {
        console.log(flightDocuments)
        res.render('flights/index', {
            flights: flightDocuments
        })
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        res.render('flights/show', {
            flight: flight
        });
    });
}

function newFlight(req, res) {
    res.render('flights/new')
}

function create(req, res) {
    req.body.nowFlying = !!req.body.nowFlying;
    let dt = new Flight().departs;
    if (!req.body.departs) {
        req.body.departs = dt;
    }


    const flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) return res.render('flights/new');
        console.log(flight, ' this is our document that we created in mongodb');
        //    redirect right back to new.ejs
        res.redirect('/flights');
    });
}