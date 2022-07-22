import type { NextApiRequest, NextApiResponse } from "next";
import { DBService } from "../../services";

export default async function handleRaw(
  { query: { raw }, method }: NextApiRequest,
  response: NextApiResponse,
) {
  if (method !== "GET") {
    response.json({ error: "Invalid method." });
  }

  const snippetObject = await DBService.findBySlug(raw);

  if (!snippetObject) {
    response.json({ error: `Snippet ${raw} not found.` });
  }

  response.status(200).send(snippetObject?.snippet);
}
