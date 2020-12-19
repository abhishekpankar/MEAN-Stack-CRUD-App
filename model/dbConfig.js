const mongoose = require('mongoose');
const config = require('../utils/config');
const Schema = mongoose.Schema;

mongoose.connect(config.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err) => {
    if (err) {
        throw err;
    }
    console.log('Databse Connected');
});

module.exports = {
    Users: mongoose.model('User', new Schema({
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        phoneNumber: {type: Number, required: true},
        profileImage: {type: String, required: true}
    }))
}