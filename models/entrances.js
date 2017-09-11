const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const EntracesSchema = mongoose.Schema({
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

  const User = module.exports = mongoose.model('Entraces', EntracesSchema);
  