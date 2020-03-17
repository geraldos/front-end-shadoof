const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const mongoosePaginate = require('mongoose-paginate');


const markerSchema = new Schema(    
    {
    latitude: {
        type: String
    },
    longitude: {
        type: String
    },
    nama: {
        type: String
    }     
  }
)

module.exports = mongoose.model('user', markerSchema);