const Admin = require('../model/admin')
var bcrypt = require('bcrypt')
const response = require('../configdb/response')

process.env.SECRET_KEY

exports.registeradmin = (data) =>
  new Promise((resolve, reject) => {
    Admin.findOne({
      email: data.email
    }).then((admin) => {
      if (admin) {
        reject(response.errorResponse('E-Mail has been used'))
      } else {
        bcrypt.hash(data.password, 10, (err, hash) => {
          data.password = hash
          Admin.create(data)
            .then(() => {
              resolve(response.suksesResponse('Register Success'))
            }).catch(() => {
              reject(response.errorResponse('Registration Failed'))
            })
        })
      }
    })
  })

exports.loginadmin = (data) => 
  new Promise((resolve, reject) => {
    Admin.findOne({
      email: data.email
      }).then(admin => {
        if (admin) {
          if(bcrypt.compareSync(data.password, admin.password)) {
            resolve(Object.assign(response.suksesResponse('Login Success'),{
              admin: admin
            }))
          } else {
            reject(response.errorResponse('Wrong Password'))
          }
        } else {
          reject(response.errorResponse('Your E-Mail is not registered'))
        }
      })
    })