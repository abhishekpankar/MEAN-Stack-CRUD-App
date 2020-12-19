const userDao = require('../model/users');

exports.addUser = (user) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await userDao.addUser(user);
            return resolve('User Added');
        } catch (err) {
            return reject(err);
        }
    })
}

exports.updateUser = (user) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await userDao.updateUser(user);
            return resolve('User Updated');
        } catch (err) {
            return reject(err);
        }
    })
}

exports.getUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await userDao.getUsers();
            return resolve(response);
        } catch (err) {
            return reject(err);
        }
    })
}

exports.deleteUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await userDao.deleteUser(userId);
            return resolve('User Deleted');
        } catch (err) {
            return reject(err);
        }
    })
}