const { RotationService } = require('../services')

/**
 * 
 * @param req the request object from where payload is taken 
 * @param res response object
 * 
 * payload body is expected to contain a string (UTF-8)
 * first string is encrypted over rot13 algorithm
 * then the original string is saved in db
 * 
 * @response response is the rot13 cipher in the form of a plain text
 */
const convert = async (req, res) => {
  const content = req.body;
  try {
    if (typeof content === 'string') {
      const rot13 = RotationService.encrypt(content);
      await RotationService.saveOriginal(content);
      res.send(rot13);
    } else {
      res.status(400).json({error: true, status: 400, message: 'Payload is expected to be plain text of string type!'});
    }
  } catch(e) {
    res.status(500).json({error: true, status: 500, message: 'Error while saving rotation!'});
  }
}

module.exports = {
  convert
}