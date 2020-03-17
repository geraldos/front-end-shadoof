const model = require('../model/user')
const ObjectId = require('mongoose').Types.ObjectId

exports.getUser = async () =>
  new Promise((resolve, reject) => {
    model.find().then(res => {
      console.log(res)
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })

