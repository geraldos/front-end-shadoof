const router = require('express').Router()
const controller = require('../controller/markcercontroller')

router.get('/get', (req, res) => {
    controller.getMarker().then(result => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/insert', (req, res) => {
    console.log(req.body)
    controller.insertMarker(req.body)
        .then(result => {
            console.log(result)
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
})

router.delete('/delete', (req, res) => {
    controller.removeMarker().then(result => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router