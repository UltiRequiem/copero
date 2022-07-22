import mongoose, { Schema } from "mongoose";

const SnippetSchema = new Schema({
  snippet: String,
  slug: String,
});

export default mongoose.models.snippet ||
  mongoose.model("snippet", SnippetSchema);
