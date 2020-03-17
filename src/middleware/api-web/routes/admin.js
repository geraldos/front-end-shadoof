const admin = require('express').Router()
const admincontroller = require('../controller/admincontroller')

//registeruser
admin.post('/register',async(req,res)=>{
    admincontroller.registeradmin(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
  })

admin.post('/login', (req, res) => {
    admincontroller.loginadmin(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = admin