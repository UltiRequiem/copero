import mongoose from 'mongoose';

const SnippetSchema = new mongoose.Schema({
  snippet: String,
  slug: String,
});

export default mongoose.models.snippet || mongoose.model('snippet', SnippetSchema);
