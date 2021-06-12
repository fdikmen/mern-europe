const express = require('express')
const router = express.Router()

const isAuth = require('../helpers/isAuth')

router.get('/user', (req, res) => res.send('Hello World!'))
router.post('/user',isAuth, (req, res) => res.send('Hello World!'))
router.delete('/user', (req, res) => res.send('Hello World!'))
router.put('/user', (req, res,next) => {
    const user=false;
    if (user) {
        res.send("Hello world PUT Method")
    } else {
        return next({status:404,message:'This user was not found.'})
    }
})

module.exports = router