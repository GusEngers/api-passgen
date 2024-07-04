const ResponseError = require('../../utils/error.js');
const middlewares = require('../middlewares/index.js');
const services = require('../services/index.js');

function generatePassword(req, res, next) {
  try {
    const data = req.body;
    const password = services.getPassword(data);
    res.status(201).json({ password });
  } catch (error) {
    next(error);
  }
}

function allMethods(req, res, next) {
  try {
    throw new ResponseError('Método no aceptado', 406);
  } catch (error) {
    next(error);
  }
}

module.exports = { postPassword: [middlewares.checkBody, generatePassword], allMethods };
