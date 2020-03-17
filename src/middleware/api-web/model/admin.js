const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const mongoosePaginate = require('mongoose-paginate');


const adminSchema = new Schema(
    {
    nama: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
  }
)

module.exports = mongoose.model('admin', adminSchema);