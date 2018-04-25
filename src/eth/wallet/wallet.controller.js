'use strict'

const Web3 = require('web3')
const Constants = require('../../constants')
const web3 = new Web3(Constants.WEB3);

// Create Wallet and Return Private Key to Save to Client Side
const create = (req, res) => {
    const { passphrase } = req.body
    
    const account = web3.eth.accounts.create()
    const encrypted = account.encrypt(passphrase)

    res.json({
        status: 200,
        address: account.address,
        encrypted
    })
}

module.exports = {
    create
}