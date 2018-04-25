'use strict'

const express = require('express')
const router = express.Router()

router.use('/bitcoin', require('./bitcoin/bitcoin.route'))
router.use('/eth', require('./eth/eth.route'))

module.exports = router