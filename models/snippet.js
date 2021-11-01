import mongoose from "mongoose";

const { Schema } = mongoose;

const SnippetSchema = new Schema({
  snippet: String,
  slug: String,
});

const Snippet =
  mongoose.models.Snippet || mongoose.model("Snippet", SnippetSchema);

export default Snippet;
