import { DBService } from '../../services';
import { only } from '../../utils.js';

export default async function handleRaw({ method, query }, response) {
  only(method, 'GET', response);

  let data = await DBService.publicSnippets();

  if (query.only && ['slug', 'snippet'].includes(query.only)) {
    data = data.map((item) => item[query.only]);
  }

  response.status(200).json(data);
}
