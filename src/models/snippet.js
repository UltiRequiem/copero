import mongoose from 'mongoose';

const SnippetSchema = new mongoose.Schema({
  snippet: String,
  slug: String,
});

const Snippet = mongoose.models.snippet || mongoose.model('snippet', SnippetSchema);

export default Snippet;
