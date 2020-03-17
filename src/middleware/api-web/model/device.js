const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const mongoosePaginate = require('mongoose-paginate');


const deviceSchema = new Schema(
    {
    mac: {
        type: String
    },
    devicename: {
        type: String
    },
    devicetype: {
        type: String
    },
    device_registration_date: {
        type: Date,
        default: Date().toLocaleString()
    }
  }
)

module.exports = mongoose.model('device', deviceSchema);