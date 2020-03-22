const express = require('express')
const PessoaControler = require('../controllers/PessoaControler')
const router = express.Router()

router.get('/', PessoaControler.index)

module.exports = router