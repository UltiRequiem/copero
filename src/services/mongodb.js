/* eslint-disable class-methods-use-this */
import mongoose from 'mongoose';

import randomString from 'randomstring';
import { Snippet } from '../models';

export default class MongoDB {
  constructor(uri) {
    (async () => {
      await mongoose.connect(uri);
    })();
  }

  async newSnippet(snippet) {
    return new Snippet({
      snippet,
      slug: randomString.generate({ length: 6, charset: 'alphabetic' }),
    }).save();
  }

  async findBySlug(slug) {
    return Snippet.findOne({ slug });
  }

  async publicSnippets() {
    return Snippet.find({ private: undefined }, '-_id -__v');
  }
}
