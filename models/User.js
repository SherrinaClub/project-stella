const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
  qqId: String,
  name: { type: String, default: 'nickname' }
});

mongoose.model('users', userSchema);
