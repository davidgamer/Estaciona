const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const EntitySchema = mongoose.Schema({
    name: {
        type: String,
        required:true
      },
    cnpj: {
        type: number,
        required:true
    },
    cpf: {
        type: number,
        required:true
      },
      service_text:{
          type:String,
          required: true
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
  const Entity = module.exports = mongoose.model('Entity', EntitySchema);