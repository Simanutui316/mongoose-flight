const Destination = require('../models/destination');


module.exports = {
    index,
    show,
    new: newDestination,
    create
};

function show(req, res) {
    Destination.findById(req.params.id, function (err, destination) {
        res.render('destinations/show', { title: 'Destination Detail', destination });
    });
}