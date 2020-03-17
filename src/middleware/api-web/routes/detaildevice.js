const router = require('express').Router()
const controller = require('../controller/detaildevicecontroller')

router.get('/get', (req, res) => {
    controller.getDetailDevice(req.query.guid).then(result => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/insert', (req, res) => {
    controller.insertDetailDevice(req.body)
        .then(result => {
            console.log(result)
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
})

router.delete('/delete', (req, res) => {
    controller.removeDetailDevice().then(result => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router