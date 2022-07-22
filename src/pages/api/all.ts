import type { NextApiRequest, NextApiResponse } from "next";
import { DBService } from "../../services";
import { only } from "../../utils";

export default async function handleRaw(
  { method, query }: NextApiRequest,
  response: NextApiResponse,
) {
  only(method as string, "GET", response);

  let data = await DBService.publicSnippets();

  if (query.only && ["slug", "snippet"].includes(query.only as string)) {
    data = data.map((item) => item[query.only as string]);
  }

  response.status(200).json(data);
}
