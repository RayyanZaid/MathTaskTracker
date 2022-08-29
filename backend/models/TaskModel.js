const mongoose = require('mongoose');


const Schema = mongoose.Schema;


// mongoose enforces this schema
// so the title can't be anything besides a string b/c of mongoose
const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    numTimesCompleted: {
        type: Number,
        required: true
    }

}, {timestamps: true})

module.exports = mongoose.model('Task', taskSchema);

