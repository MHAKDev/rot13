const { RotationDb } = require('../db')
const { stringRotator } = require('../utils/rot-converter')

/**
 * Save the original text in db
 * 
 * @param {string} content original string 
 * @returns the db response after saving it into the db
 */
const saveOriginal = async (content) => {
  try {
    return await RotationDb.save(content)
  } catch(e) {
    throw new Error(e.message)
  }
}

/**
 * Encrypting the plain text into rot13 cypher
 * 
 * @param {string} inputString the orignal input string
 * @returns the rot13 cipher in the form of a plain text
 */
const encrypt = (inputString) => {
  const cypher = stringRotator(inputString);
  return cypher;
}

module.exports = {
  saveOriginal,
  encrypt
}