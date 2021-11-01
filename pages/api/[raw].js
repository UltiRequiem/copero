import DBService from "../../services/db";

export default async function handleRaw({ query: { raw }, method }, response) {
  if (method !== "GET") {
    response.json({ error: `Method ${method} not allowed` });
  }

  const snippetObject = await DBService.findBySlug(raw);

  if (!snippetObject) {
    response.json({ error: `Snippet ${raw} not found.` });
  }

  response.statusCode = 200;
  response.send(snippetObject.snippet);
}
