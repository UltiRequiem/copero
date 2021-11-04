import { connect } from 'mongoose';
import randomString from 'randomstring';

import { Snippet } from '../models';

export default class MongoDB {
  constructor(uri) {
    (async () => {
      await connect(uri);
    })();

    this.SnippetModel = Snippet;
  }

  async newSnippet(snippet) {
    const slug = randomString.generate({ length: 6, charset: 'alphabetic' });

    await new this.SnippetModel({
      snippet,
      slug,
    }).save();

    return this.findBySlug(slug);
  }

  async findBySlug(slug) {
    return this.SnippetModel.findOne({ slug }, '-_id -__v');
  }

  async publicSnippets() {
    return this.SnippetModel.find({ private: undefined }, '-_id -__v');
  }
}
