'use strict'

const express = require('express')
const router = express.Router()

router.use('/bitcoin', require('./bitcoin/bitcoin.route'))

module.exports = router