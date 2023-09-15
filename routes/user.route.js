const express = require('express')
const { getMusicAPI } = require('../controllers/user.controller')
const router = express.Router()

router.get("/myAPI", getMusicAPI)


module.exports = router