function handleError(error, req, res, next) {
  console.log(`[ERROR] Ocurrió un error inesperado: ${error}`);
  res.status(500).json({ message: 'Ocurrió un error inesperado', statusCode: 500, errors: [error.message] });
}

function handleNotFound(req, res, next) {
  res.status(404).json({ message: 'La dirección buscada no existe', statusCode: 404 });
}

module.exports = { handleError, handleNotFound };
