'use strict'

const express = require('express')
const router = express.Router()

router.use('/wallet', require('./wallet/wallet.route'))

module.exports = router