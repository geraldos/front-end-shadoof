const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const mongoosePaginate = require('mongoose-paginate');


const detaildeviceSchema = new Schema(
    {
    guid: {
        type: String
    },
    device_name: {
        type: String
    },
    device_code: {
        type: String
    },
    device_activation_date: {
        type: Date,
        default: Date().toLocaleString()
    },
    device_registration_date: {
      type: Date,
      default: Date().toLocaleString()
  }
  }
)

module.exports = mongoose.model('device_aktive', detaildeviceSchema);