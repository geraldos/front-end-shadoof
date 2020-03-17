const mongoose =require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  guid: {
    type: String
  },
  no_ktp: {
    type: String
  },
  nama: {
    type: String
  },
  no_hp: {
    type: Number
  },
  email: {
    type: String,
    required: true
  },
  alamat: {
    type: String
  },
  password: {
    type: String
  },
    user_location: {
      latitude: {
        type: String
      },
      longitude: {
        type: String
      }
    },
    devices:[{
      mac: {
        type: String
      },
      devices_name: {
        type: String
      },
      devices_code: {
        type: String
      },
      devices_code: {
        type: String
      },
      latitude: {
        type: String
      },
      longitude: {
        type: String
      },
        value:[{
          sensor: {
            type: String
          },
          tanggal: {
            type: String
          }
        }],
      device_type: {
        type: String
      },
      device_registration_date: {
        type: Date,
        default: new Date().toLocaleDateString()
      },
        zona:[{
          zona_name: {
            type: String
          },
          zona_number: {
            type: Number
          },
          jadwal: {
            dayPriod_timePriod: [{
              type: Date
            }],
            time_periode: [{
              jam: {
                type: String
              }
            }]
          },
        Seconds_duration: {
          type: Number
        },
        user_slot: {
          type: Number
        },
        foto: {
          type: String
        }
        }]
    }]
})

module.exports = mongoose.model('users', userSchema)