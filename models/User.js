const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: String,
        default: 0
    },
    gender: {
        type: String, 
    },
})

module.exports = User = mongoose.model('User', UserSchema);