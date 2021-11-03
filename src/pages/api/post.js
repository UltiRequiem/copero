import { DBService } from '../../services';
import { only } from '../../utils';

export default async function handlePost({ body, method }, response) {
  only(method, 'POST', response);

  const snippetPost = await DBService.newSnippet(body.snippet);

  response.status(200).json(snippetPost);
}
