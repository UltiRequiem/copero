import type { NextApiRequest, NextApiResponse } from 'next';
import { DBService } from '../../services';
import { only } from '../../utils';

export default async function handlePost(
  { body, method }: NextApiRequest,
  response: NextApiResponse,
) {
  only(method as string, 'POST', response);

  const snippetPost = await DBService.newSnippet(body.snippet);

  response.status(200).json(snippetPost);
}
