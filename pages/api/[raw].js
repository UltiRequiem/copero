import DBService from '../../services/mongodb.js';

export default async function handleRaw({ query: { raw }, method }, response) {
  if (method !== 'GET') {
    response.json({ error: `Method ${method} not allowed.` });
  }

  const snippetObject = await DBService.findBySlug(raw);

  const parsedSnippets = snippetObject.map((item) => ({
    snippet: item.snippet,
    slug: item.slug,
  }));

  response.status(200).send(parsedSnippets);
}
