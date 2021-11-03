import mongoose from 'mongoose';

import randomString from 'randomstring';
import { Snippet } from '../models';

export default class MongoDB {
  constructor(uri) {
    (async () => {
      await mongoose.connect(uri);
    })();

    this.SnippetModel = Snippet;
  }

  async newSnippet(snippet) {
    return new this.SnippetModel({
      snippet,
      slug: randomString.generate({ length: 6, charset: 'alphabetic' }),
    }).save();
  }

  async findBySlug(slug) {
    return this.SnippetModel.findOne({ slug });
  }

  async publicSnippets() {
    return this.SnippetModel.find({ private: undefined }, '-_id -__v');
  }
}
