const api = require('express').Router();
const con = require('../controllers/index.js');

api.route('/passwords').post(con.postPassword).all(con.allMethods);

module.exports = api;
