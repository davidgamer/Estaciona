const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const AddressSchema = mongoose.Schema({
    rua: {
        type: String,
        required:true
      },
      bairro: {
        type: String,
        required:true
      },
      cep: {
        type: String,
        required:true
      },
      estado: {
        type: String,
        required:true
      },
     modified:{
          type:Date,
          default: Date.now, 
          required:true
      },
      created:{
          type:Date,
          default: Date.now, 
          required:true
    }
  });
  const Address = module.exports = mongoose.model('Address', AddressSchema);