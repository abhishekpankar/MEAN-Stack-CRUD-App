const db = require('./dbConfig')

exports.addUser = (user) => {
    return new Promise((resolve, reject) => {
        db.Users.create(user).then(resp => {
            return resolve(resp);
        }).catch(err => {
            return reject(err);
        })
    })
}

exports.updateUser = (user) => {
    return new Promise((resolve, reject) => {
        db.Users.findByIdAndUpdate(user._id, { $set: user}).then(resp => {
            return resolve(resp);
        }).catch(err => {
            return reject(err);
        })
    })
}

exports.getUsers = () => {
    return new Promise((resolve, reject) => {
        db.Users.find({}, {__v: 0}).then(resp => {
            return resolve(resp);
        }).catch(err => {
            return reject(err);
        })
    })
}

exports.deleteUser = (userId) => {
    return new Promise((resolve, reject) => {
        db.Users.deleteOne({
            _id: userId
        }).then(resp => {
            return resolve(resp);
        }).catch(err => {
            return reject(err);
        })
    })
}