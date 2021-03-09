const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationsSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
        type: Date
    }



});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Delta', 'Southwest', 'United', 'Hawaiian']
    },
    airport: {
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN', 'SEA', 'HNL'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function () {
            let oneYearFromNow = new Date();
            return oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
        }

    },
    nowFlying: Boolean,
    destinations: [destinationsSchema]

})


// Compile the schema into a model and export it
module.exports = mongoose.model('flight', flightSchema);