'use strict'

const web3 = require('web3')
require('dotenv').config()

module.exports = {
    HOST: process.env.HOST || '127.0.0.1',
    PORT: process.env.PORT || 3000,
    WEB3: process.env.IS_PRODUCTION ? web3.currentProvider : process.env.ETH_PROVIDER
}