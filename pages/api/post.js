import DBService from '../../services/mongodb.js';

export default async function handlePost(
  { body: { snippet }, method },
  response,
) {
  if (method !== 'POST') {
    response.json({ error: `Method ${method} not allowed` });
  }

  const snippetPost = await DBService.newSnippet(snippet);

  response.status(200).json(snippetPost);
}
