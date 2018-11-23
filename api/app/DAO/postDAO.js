
'use strict';

import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const postSchema = new mongoose.Schema({
  title: {type: String},
  url: {type: String},
  content: {type: String},
}, {
  collection: 'post'
});
postSchema.plugin(uniqueValidator);

const PostModel = mongoose.model('product', postSchema );

async function query() {
  const result = await PostModel.find({});
  {
    if (result) {
      return result;
    }
  }
}

export default {
  query: query,

  model: PostModel
};
