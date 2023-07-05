import { Schema, model, models } from 'mongoose';

const mongoose = require('mongoose')

const QueryScema = new Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    auto: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  query: {
    type: String,
    required: true
  }
});

const Query = models.Query || model("Query", QueryScema);

export default Query;