export function parseQueryString(queryString) {
  let query = queryString.substring(queryString.indexOf("?"), queryString.length);
  const params = new URLSearchParams(query);

  const result = {};
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  return result;
}