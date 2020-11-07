const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const picSchema = new Schema({
    // we'll probably want to set this to Date.now() or something
    date: {
        type: date,
        required: true,

    },
    picture: {
        type: Image,
        required: true
    }
});

module.exports = mongoose.model("pic", picSchema);