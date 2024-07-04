const { UPPER, LOWER, SYMBOL, NUMBER } = require('../../utils/constants.js');

function getPossibleCharacters(data) {
  let characters = '';
  if (data.upper && data.upper) {
    characters += UPPER;
  }
  if (data.lower && data.lower) {
    characters += LOWER;
  }
  if (data.symbol && data.symbol) {
    characters += SYMBOL;
  }
  if (data.number && data.number) {
    characters += NUMBER;
  }
  return characters;
}

function generatePassword(length, characters) {
  let password = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }
  return password;
}

function getPassword(data) {
  let characters = getPossibleCharacters(data);
  let password = generatePassword(data.length, characters);
  return password;
}

module.exports = { getPassword };
