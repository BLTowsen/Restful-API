const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Int16Array,
        required: false
    },
    address: {
        type: Object,
        required: false
    }
});

module.exports = mongoose.model('Users', UserSchema);