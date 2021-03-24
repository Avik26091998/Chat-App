const express = require('express')
const Router = express.Router()

Router.get('/', (req, res, next) => {
    res.send('Server Running')
})

module.exports = Router