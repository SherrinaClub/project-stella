const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose;

const subjectSchema = new Schema({
  originalTitle: String,
  transTitles: [String],
  description: String,
  tags: [String],
  author: String,
  status: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  group: String,
  history: String,
  _editor: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('subject', subjectSchema);
