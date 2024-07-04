const ResponseError = require('../../utils/error.js');

function checkBody(req, res, next) {
  try {
    const data = req.body;
    if (!data.length) {
      throw new ResponseError('La longitud de la contraseña es requerida', 400);
    }
    if (data.length < 8 || data.length > 50) {
      throw new ResponseError('La longitud de la contraseña debe ser entre 8 y 50', 400);
    }
    if (!data.upper && !data.lower && !data.symbol && !data.number) {
      throw new ResponseError('La configuración debe tener por lo menos un elemento entre letras mayúsculas o minúsculas, símbolos o números', 400);
    }
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { checkBody };
