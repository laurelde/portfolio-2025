export async function fetchGet(
  url,
  timeoutMs = 5000,
  catchFunc = (e) => defaultCatch(e)
) {
  let response;
  const controller = new AbortController();
  setTimeout(() => controller.abort(), timeoutMs);

  try {
    response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const parsedResponse = await response.json();
    if (!response.ok) {
      throw new Error(
        `Fetch Get Call Failed for ${url}, response: ${response.statusText}`
      );
    }
    return parsedResponse;
  } catch (error) {
    catchFunc(error);
  }
}

export async function fetchPost(
  url,
  data,
  jsonResponse = true,
  timeoutMs = 5000,
  catchFunc = (e) => defaultCatch(e)
) {
  let response;
  const controller = new AbortController();
  setTimeout(() => controller.abort(), timeoutMs);

  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(
        `Fetch Post Call Failed for ${url}, response: ${response.statusText}`
      );
    }
    if (jsonResponse) {
      const parsedResponse = await response.json();
      return parsedResponse;
    }
    return response.ok;
  } catch (error) {
    catchFunc(error);
  }
}

function defaultCatch(e) {
  throw new Error(`Error during fetch operation: ${e}`);
}
