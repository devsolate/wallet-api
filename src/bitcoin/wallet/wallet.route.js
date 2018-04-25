'use strict'

const express = require('express')
const controller = require('./wallet.controller')
const router = express.Router()

router.route('/address')
    .get(controller.getAddress);

module.exports = router