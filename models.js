import mongoose from 'mongoose';

const SnippetSchema = new mongoose.Schema({
  snippet: String,
  slug: String,
});

// eslint-disable-next-line import/prefer-default-export
export const Snippet = mongoose.models.Snippet || mongoose.model('snippet', SnippetSchema);
