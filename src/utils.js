/**
 * @param {string} possibleJSON
 */
export function isJSON(possibleJSON) {
  try {
    JSON.parse(possibleJSON);
  } catch {
    return false;
  }
  return true;
}

/**
 * @param {string} method
 * @param {string} expectedMethod
 * @param {Object} response
 */
export function only(method, expectedMethod, response) {
  if (method === expectedMethod) return;
  response.json({
    error: `Got '${method}', but only '${expectedMethod}' method is expected.`,
  });
}
