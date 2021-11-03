import DBService from '../../services/mongodb.js';

export default async function handleRaw({ method, query }, response) {
  if (method !== 'GET') {
    response.json({ error: `Method ${method} not allowed.` });
  }

  let data = await DBService.publicSnippets();

  if (query.only && ['slug', 'snippet'].includes(query.only)) {
    data = data.map((item) => item[query.only]);
  }

  response.status(200).json(data);
}
