const express = require('express')
const router = express.Router()

router.get('/user', (req, res) => res.send('Hello World!'))
router.post('/user', (req, res) => res.send('Hello World!'))
router.delete('/user', (req, res) => res.send('Hello World!'))
router.put('/user', (req, res) => res.send('Hello World!'))

module.exports = router