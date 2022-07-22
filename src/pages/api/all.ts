import type { NextApiRequest, NextApiResponse } from "next";
import { DBService } from "../../services";

export default async function handleRaw(
  { method, query }: NextApiRequest,
  response: NextApiResponse,
) {
  if (method !== "GET") {
    response.json({ error: "Invalid method." });
  }

  let data = await DBService.publicSnippets();

  if (query.only && ["slug", "snippet"].includes(query.only as string)) {
    data = data.map((item) => item[query.only as string]);
  }

  response.status(200).json(data);
}
