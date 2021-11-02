import DBService from '../../services/mongodb.js';

export default async function handleRaw({ method }, response) {
  if (method !== 'GET') {
    response.json({ error: `Method ${method} not allowed.` });
  }

  const snippets = await DBService.publicSnippets();

  response.status(200).json(snippets);
}
