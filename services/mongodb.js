/* eslint-disable class-methods-use-this */
import mongoose from 'mongoose';

import randomString from 'randomstring';
import { Snippet } from '../models.js';

import {
  DB_USER, PASSWORD, CLUSTER_NAME, SUBDOMAIN, DB,
} from '../config.js';

class DataBase {
  constructor() {
    (async () => {
      await mongoose.connect(
        `mongodb+srv://${DB_USER}:${PASSWORD}@${CLUSTER_NAME}.${SUBDOMAIN}.mongodb.net/${DB}?retryWrites=true&w=majority`,
      );
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
    return Snippet.find({ private: undefined });
  }
}

export default new DataBase();
