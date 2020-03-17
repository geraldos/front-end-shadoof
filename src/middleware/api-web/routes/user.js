const router = require('express').Router()
const controller = require('../controller/usercontroller')

router.get('/get', (req, res) => {
    controller.getUser().then(result => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/insert', (req, res) => {
    console.log(req.body)
    controller.insertUser(req.body)
        .then(result => {
            console.log(result)
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
})

router.delete('/delete', (req, res) => {
  console.log(req.body)
  controller.removeUser(req.body)
      .then(result => {
          console.log(result)
          res.json(result)
      }).catch(err => {
          res.json(err)
      })
})

module.exports = router