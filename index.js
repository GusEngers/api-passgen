const app = require('./src/app.js');
const { PORT } = require('./src/utils/constants.js');

function main() {
  try {
    app.listen(PORT, () => {
      console.log(`[INFO] Servidor iniciado correctamente en el puerto ${PORT}`);
    });
  } catch (error) {
    console.log(`[ERROR] Error al iniciar el servidor: ${error}`);
  }
}

main();
