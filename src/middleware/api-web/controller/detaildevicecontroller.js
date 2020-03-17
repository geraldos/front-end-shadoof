const model = require('../model/detaildevice')

exports.getDetailDevice = (guid) =>
  new Promise((resolve, reject) => {
    model.find({'guid': guid}).then(res => {
      console.log(res)
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })

exports.insertDetailDevice = (data) =>
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

exports.removeDetailDevice = (data) =>
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