import DBService from "../../services/db";

export default async function handlePost(
  { body: { snippet }, method },
  response
) {
  if (method !== "POST") {
    response.json({ error: `Method ${method} not allowed` });
  }

  const snippetPost = await DBService.newSnippet(snippet);

  response.statusCode = 200;
  response.json(snippetPost);
}
