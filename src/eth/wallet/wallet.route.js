'use strict'

const express = require('express')
const controller = require('./wallet.controller')
const router = express.Router()

router.route('/create')
    .post(controller.create);

module.exports = router