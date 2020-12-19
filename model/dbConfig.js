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
        firstname: {type: String, required: true},
        lastname: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        phoneNumber: {type: String, required: true},
        profileImage: {type: String, required: true}
    }))
}