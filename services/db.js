import mongoose from "mongoose";

import randomString from "randomstring";
import SnippetModel from "../models/snippet.js";

import { DB_USER, PASSWORD, CLUSTER_NAME, SUBDOMAIN } from "../config.js";

class DataBase {
  constructor() {
    mongoose
      .connect(
        `mongodb+srv://${DB_USER}:${PASSWORD}@${CLUSTER_NAME}.${SUBDOMAIN}.mongodb.net/principal?retryWrites=true&w=majority`
      )
      .then(() => {
        console.log("Connected to MongoDB Atlas.");
      });
  }

  async newSnippet(snippet) {
    const newSnippet = await new SnippetModel({
      snippet,
      slug: randomString.generate({ length: 6, charset: "alphabetic" }),
    }).save();

    return newSnippet;
  }

  async findBySlug(slug) {
    return await SnippetModel.findOne({ slug });
  }
}

export default new DataBase();
