'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const Constants = require('./src/constants')
const router = require('./src/router')
const Logger = require('./src/utils/logger')

app.use(bodyParser.json())
app.use('/api', router)

app.listen(Constants.PORT, () => {
    Logger.info(`Application listen on: https://localhost:${Constants.PORT}`)
})