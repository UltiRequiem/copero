// eslint-disable-next-line import/prefer-default-export
export function isJSON(possibleJSON) {
  try {
    JSON.parse(possibleJSON);
  } catch {
    return false;
  }
  return true;
}
