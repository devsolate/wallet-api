'use strict'

const express = require('express')
const controller = require('./eth.controller')
const router = express.Router()

router.route('/create')
    .post(controller.create)

router.route('/balance/:address')
    .get(controller.balance)

router.route('/sent')
    .post(controller.sent)

module.exports = router