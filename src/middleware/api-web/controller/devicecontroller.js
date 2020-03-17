const model = require('../model/device')

exports.getDevice = () =>
  new Promise((resolve, reject) => {
    model.find().then(res => {
      console.log(res)
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })

exports.insertDevice = (data) =>
  new Promise((resolve, reject) => {
    model.create(data)
    .then((res) => {
      resolve({
        err: false,
        msg: 'Berhasil'
      })
    }).catch((err) => {
      resolve({
        err: true,
        msg: 'Gagal'
      })
    })

exports.removeDevice = (data) =>
    new Promise((resolve, reject) => {
      model.remove(data)
      .then((res) => {
        resolve({
          err: false,
          msg: 'Berhasil'
        })
      }).catch((err) => {
        resolve({
          err: true,
          msg: 'Gagal'
        })
      })
    })
  })