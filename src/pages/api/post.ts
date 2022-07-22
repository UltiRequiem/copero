import type { NextApiRequest, NextApiResponse } from "next";
import { DBService } from "../../services";

export default async function handlePost(
  { body, method }: NextApiRequest,
  response: NextApiResponse,
) {
  if (method !== "POST") {
    response.json({ error: "Invalid method." });
  }

  const snippetPost = await DBService.newSnippet(body.snippet);

  response.status(200).json(snippetPost);
}
