export const apiUrl = "http://localhost:8080";

export async function handleResponse(response) {
  if (response.ok) {
    if (response.status !== 204) {
      return response.json();
    }
    return null;
  }
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
}
export function handleError(error) {
  throw error;
}

export function fetchData(url, options) {
  if (!options) {
    options = {};
    options.method = "GET";
  }

  if (!options.headers) {
    options.headers = { "Content-Type": "application/json" };
  }

  return fetch(url, options)
    .then(handleResponse)
    .catch(handleError);
}
