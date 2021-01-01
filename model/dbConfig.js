const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = {
    Users: mongoose.model('User', new Schema({
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        phoneNumber: {type: Number, required: true},
        profileImage: {type: String, required: true}
    }))
}