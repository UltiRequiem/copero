import mongoose from "mongoose";

import randomString from "randomstring";
import Snippet from "../models/snippet.js";

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
    return await Snippet.create({
      snippet,
      slug: randomString.generate({ length: 6, charset: "alphabetic" }),
    });
  }

  async findBySlug(slug) {
    return await Snippet.findOne({ slug });
  }
}

export default new DataBase();
