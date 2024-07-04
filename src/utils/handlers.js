const ResponseError = require('./error.js');

function handleError(error, req, res, next) {
  if (error instanceof ResponseError) {
    console.log(`[ERROR] Ocurrió un error al ejecutar la consulta: ${error.message}`);
    res.status(error.statusCode).json({ message: error.message, statusCode: error.statusCode });
  } else {
    console.log(`[ERROR] Ocurrió un error inesperado: ${error}`);
    res.status(500).json({ message: 'Ocurrió un error inesperado', statusCode: 500, errors: [error.message] });
  }
}

function handleNotFound(req, res) {
  res.status(404).json({ message: 'La dirección buscada no existe', statusCode: 404 });
}

module.exports = { handleError, handleNotFound };
