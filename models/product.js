const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
      },
    code_hash: {
        type: number,
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
  const Product = module.exports = mongoose.model('Product', ProductSchema);