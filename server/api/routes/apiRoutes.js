'use strict';
module.exports = function (app) {
    var apiList = require('../controllers/apiController');

    // api Routes
    app.route('/api/login')
        .post(apiList.login);

    app.route('/api/signup')
        .post(apiList.signup);

    app.route('/api/addUserData')
        .post(apiList.addUserData);

    app.route('/api/updateUserData')
        .post(apiList.updateUserData);

    app.route('/api/deleteUserData')
        .post(apiList.deleteUserData);

    app.route('/api/userDataList')
        .get(apiList.userDataList);
};
