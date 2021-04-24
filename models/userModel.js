const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, 'A user must have a name'],
        unique: true
    },
    Password: {
        type: String,
        required: [true, 'A user must have a password']
    },

}, { versionKey: false });

const User = mongoose.model('User', userSchema);

module.exports = User;
