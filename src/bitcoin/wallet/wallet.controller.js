'use strict'

const create = (req, res) => {
    res.json({
        test: 2
    })
}

const getAddress = (req, res) => {
    res.json({
        test: 2
    })
}

module.exports = {
    create,
    getAddress
}