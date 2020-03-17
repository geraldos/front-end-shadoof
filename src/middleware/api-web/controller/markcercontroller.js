const model = require('../model/marker')

exports.getMarker = () =>
  new Promise((resolve, reject) => {
    model.find().then(res => {
      console.log(res)
      console.log(res[0].user_location)
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })

exports.insertMarker = (data) =>
  new Promise((resolve, reject) => {
    model.create(data)
    .then((res) => {
      resolve({
        mac: data.mac,
        devicename: data.devicename,
        devicetype: data.devicetype,
        err: false,
        msg: 'Berhasil'
      })
    }).catch((err) => {
      resolve({
        err: true,
        msg: 'Gagal'
      })
    })

exports.removeMarker = (data) =>
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