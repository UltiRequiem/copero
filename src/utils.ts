import type { NextApiResponse } from 'next';

export function isJSON(possibleJSON: string) {
  try {
    JSON.parse(possibleJSON);
  } catch {
    return false;
  }
  return true;
}

export function only(
  method: string,
  expectedMethod: string,
  response: NextApiResponse,
) {
  if (method === expectedMethod) return;
  response.json({
    error: `Got '${method}', but only '${expectedMethod}' method is expected.`,
  });
}
