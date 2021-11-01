import mongoose from 'mongoose';

const { model, Schema } = mongoose;

const SnippetSchema = new Schema({
  snippet: String,
  slug: String,
});

export default model('snippet', SnippetSchema);
