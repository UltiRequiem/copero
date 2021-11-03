export function isJSON(possibleJSON) {
  try {
    JSON.parse(possibleJSON);
  } catch {
    return false;
  }
  return true;
}

export function only(method, wantedMethod, response) {
  if (method === wantedMethod) return;
  response.json({
    error: `Got '${method}', but only '${wantedMethod}' method is expected.`,
  });
}
