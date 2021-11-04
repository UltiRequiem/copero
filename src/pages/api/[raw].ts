import type { NextApiResponse, NextApiRequest } from 'next';
import { DBService } from '../../services';
import { only } from '../../utils';

export default async function handleRaw(
  { query: { raw }, method }: NextApiRequest,
  response: NextApiResponse,
) {
  only(method as string, 'GET', response);

  const snippetObject = await DBService.findBySlug(raw);

  if (!snippetObject) {
    response.json({ error: `Snippet ${raw} not found.` });
  }

  response.status(200).send(snippetObject?.snippet);
}
