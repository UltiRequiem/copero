import mongoose from "mongoose";

const SnippetModel = mongoose.model("snippet", {
  snippet: String,
  slug: String,
});

export default SnippetModel;
