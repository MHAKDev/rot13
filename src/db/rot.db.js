const { RotationModel } = require('../models')

/**
 * This function makes db create request to save original text
 * 
 * @param {string} content original string
 * @returns db response
 */
const save = async (content) => {
  try {
    const res = await RotationModel.create({data: content});
    return res;
  } catch(e) {
    throw new Error(e.message)
  }
}

module.exports = {
    save
  }