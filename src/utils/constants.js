require('dotenv').config();
const env = process.env;

const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = UPPER.toLowerCase();
const SYMBOL = ',.;:_{}[]()^-+*/%=#&¡!¿?';
const NUMBER = '0123456789';

module.exports = {
  // Configuración de la aplicación
  PORT: env.PORT || '3000',

  // Constantes
  UPPER,
  LOWER,
  SYMBOL,
  NUMBER
};
