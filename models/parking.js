const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const ParkingSchema = mongoose.Schema({
    name: {
      type: String,
      required:true
    },
    email: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    created:{
        type:Date,
        default: Date.now, 
        required:true
    }
  });

  const Parking = module.exports = mongoose.model('Parking', ParkingSchema);
  