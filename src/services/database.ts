import { connect, model, models, Schema } from "mongoose";
import randomString from "randomstring";

import { CLUSTER_NAME, DB, DB_USER, PASSWORD, SUBDOMAIN } from "../config";

const SnippetSchema = new Schema({
  snippet: String,
  slug: String,
});

const Snippet = models.snippet || model("snippet", SnippetSchema);

export class MongoDB {
  constructor(uri: string) {
    connect(uri);
  }

  async newSnippet(snippet: string) {
    const slug = randomString.generate({ length: 6, charset: "alphabetic" });

    const data = { snippet, slug };

    await new Snippet(data).save();

    return data;
  }

  async findBySlug(slug: string) {
    return Snippet.findOne({ slug }, "-_id -__v");
  }

  async publicSnippets() {
    return Snippet.find({ private: undefined }, "-_id -__v");
  }
}

export const DBService = new MongoDB(
  `mongodb+srv://${DB_USER}:${PASSWORD}@${CLUSTER_NAME}.${SUBDOMAIN}.mongodb.net/${DB}?retryWrites=true&w=majority`,
);
