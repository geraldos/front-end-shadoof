const router = require('express').Router()
const controller = require('../controller/devicecontroller')
const User = require('../model/user')

router.get('/get', (req, res) => {
    controller.getDevice().then(result => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/insert', (req, res) => {
    controller.insertDevice(req.body)
        .then(result => {
            console.log(result)
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
})

router.delete('/delete', (req, res) => {
    controller.removeDevice().then(result => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router