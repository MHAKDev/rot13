const express = require('express')
const router = express.Router()
const { RotationController } = require('../controllers');

router.post('/convert', RotationController.convert)

module.exports = router